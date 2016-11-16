import * as React from 'react';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardLocation,
  DocumentCardActivity,
  Spinner,
  css
} from 'office-ui-fabric-react';


import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';

import {
  EnvironmentType
} from '@microsoft/sp-client-base';

import styles from '../SearchWebPart.module.scss';
import { ISearchWebPartWebPartProps } from '../ISearchWebPartWebPartProps';

export interface ISearchWebPartProps extends ISearchWebPartWebPartProps {
  //extra props, only used in component
  context:IWebPartContext;
}

//used to map search result cells
interface ICellValue {
  Key: string;
  Value: string;
}

//type that will store search results
export interface ISearchResult{
  url:string;
  id:string;
  title:string;
  previewImageUrl: string;
  lastModifiedByPhotoUrl?: string;
  lastModifiedByName?: string;
  lastModifiedTime?: string;
  extension?: string;
}

//state object
export interface ISearchWebPartState{
    searchResults:ISearchResult[];
    loading:boolean;
}

export default class SearchWebPart extends React.Component<ISearchWebPartProps, ISearchWebPartState> {

  private _siteUrl = this.props.context.pageContext.web.absoluteUrl;

  //default constructor -> set initial state
  constructor(props:ISearchWebPartProps, state:ISearchWebPartState){
    //call default react component properties initializer
    super(props);
    //create an initial component state
    this.state = {
      searchResults: [] as ISearchResult[],
      loading:true
    };
  }

  //render the DOM
  public render(): JSX.Element {
    const loading: JSX.Element = this.state.loading ? <div style={{margin: '0 auto'}}><Spinner label={'Loading Search Results...'} /></div> : <div/>;
    const results: JSX.Element[] =
      this.state.searchResults.map((resultItem: ISearchResult, i: number) => {
        const iconUrl: string = `https://spoprod-a.akamaihd.net/files/odsp-next-prod_ship-2016-08-15_20160815.002/odsp-media/images/filetypes/32/${resultItem.extension}.png`;
        return (
          <DocumentCard onClickHref={resultItem.url} key={resultItem.id}>
            <DocumentCardPreview
            previewImages={[
              {
                previewImageSrc: resultItem.previewImageUrl,
                iconSrc: iconUrl,
                width: 294,
                height: 196,
                accentColor: '#ce4b1f'
              }
            ]}
            />
            <DocumentCardTitle title={resultItem.title}/>
            <DocumentCardActivity
            activity={'Modified ' + resultItem.lastModifiedTime}
            people={
              [
                { name: resultItem.lastModifiedByName, profileImageSrc: resultItem.lastModifiedByPhotoUrl }
              ]
            }
            />
          </DocumentCard>
        );
      });
    return (
      <div className={styles.searchWebPart}>
        <div className={styles.title}>
          U2U Search Results Web Part
        </div>
        <div className={styles.instructions}>
          {this.props.instruction}
        </div>
        <div className={styles.results}>
          <div className={styles.resultslabel}>Search results for "<b>{this.props.query}</b>"</div>
          {loading}
          {results}
          <div style={{clear: 'both'}}/>
        </div>
        <div style={{clear: 'both'}}/>
      </div>
    );
  }

  //called when component is loaded initially
  public componentDidMount(): void{
    console.log("component mounted");
    this.loadSearchResults(this.props.query);
  }

  //called when props change
  public componentDidUpdate(prevProps: ISearchWebPartProps, prevState: ISearchWebPartState, prevContext:any){
    console.log("component updated");
    if(prevProps.query !== this.props.query){
      console.log("query changed!");
      this.setState((prevState: ISearchWebPartState, props: ISearchWebPartProps): ISearchWebPartState => {
          prevState.loading = true;
          return prevState;
        });
      this.loadSearchResults(this.props.query);
    }
    //nothing yet
  }

  private loadSearchResults(query:string): void{
    console.log("loading data for query:" + query);
    if (this.props.context.environment.type === EnvironmentType.Local) {
        console.log("test environment, not searching");
    } else {
        console.log("online, getting data!");
        this.loadSearchData(this._siteUrl, query);
    }
  }

  private getRequestDigest(siteUrl: string): Promise<string> {
    const component: SearchWebPart = this;
    return new Promise<string>((resolve, reject): void => {
      component.request(`${siteUrl}/_api/contextinfo`, 'POST').then((data: { FormDigestValue: string }): void => {
        resolve(data.FormDigestValue);
      }, (error: any): void => {
        reject(error);
      });
    });
  }

  private handleError(err: any): void {
    console.log("ERROR!" + err);
    this.setState((previousState: ISearchWebPartState, curProps: ISearchWebPartProps): ISearchWebPartState => {
      previousState.loading = false;
      return previousState;
    });
  }

  private loadSearchData(siteUrl: string, query: string): void{
    console.log("getting digest");
    const component: SearchWebPart = this;
    let requestDigest: string = null;
    component
      //get digest for posting
      .getRequestDigest(siteUrl)
      .then((digest: string): void => {
        console.log("digest:" + digest);
        requestDigest = digest;
      }, (err: any): void => {
        component.handleError(err);
      })
      //execute query
      .then((): Promise<ISearchResult[]> => {
        return component.getSearchData(siteUrl, query, requestDigest);
      }, (err: any): void => {
        component.handleError(err);
      })
      //process results
      .then((searchResults:ISearchResult[]):void => {
        component.setState((prevState: ISearchWebPartState, props: ISearchWebPartProps): ISearchWebPartState => {
          prevState.searchResults.length = 0;
          return prevState;
        });
        searchResults.forEach((value) :void=>{
          component.setState((prevState: ISearchWebPartState, props: ISearchWebPartProps): ISearchWebPartState => {
            prevState.searchResults.push(value);
            return prevState;
          });
        });
        component.setState((prevState: ISearchWebPartState, props: ISearchWebPartProps): ISearchWebPartState => {
          prevState.loading = false;
          return prevState;
        });
      });
    }

    private getSearchData(siteUrl: string, query: string, requestDigest: string): Promise<ISearchResult[]> {
    console.log("getting search data");
    const component: SearchWebPart = this;
    const gq: string = '';
    siteUrl = siteUrl.replace(':443/', '/');
    const postData: string = JSON.stringify({
      'request': {
        '__metadata': {
          'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
        },
        'Querytext': query,//,
        // 'Querytemplate': '{searchterms} path:' + siteUrl
        'SelectProperties': {
          'results': ['Author', 'AuthorOwsUser', 'DocId', 'DocumentPreviewMetadata', 'Edges', 'EditorOwsUser', 'FileExtension', 'FileType', 'HitHighlightedProperties', 'HitHighlightedSummary', 'LastModifiedTime', 'LikeCountLifetime', 'ListID', 'ListItemID', 'OriginalPath', 'Path', 'Rank', 'SPWebUrl', 'SecondaryFileExtension', 'ServerRedirectedURL', 'SiteTitle', 'Title', 'ViewCountLifetime', 'siteID', 'uniqueID', 'webID']
        },
      }
    });
    return new Promise<ISearchResult[]>((resolve: (searchResults: ISearchResult[]) => void, reject: (err: any) => void): void => {
      component.request(`${siteUrl}/_api/search/postquery`, 'POST', {
        'Accept': 'application/json;odata=nometadata',
        'Content-Type': 'application/json;odata=verbose',
        'X-RequestDigest': requestDigest
      }, postData)
      .then(
        (data: any): void => {
          console.log("success!" + data);
          const searchContent: ISearchResult[] = [];
          if (data.PrimaryQueryResult &&
              data.PrimaryQueryResult.RelevantResults &&
              data.PrimaryQueryResult.RelevantResults.Table.Rows.length > 0) {
                console.log("total items found:" + data.PrimaryQueryResult.RelevantResults.Table.Rows.length);
                data.PrimaryQueryResult.RelevantResults.Table.Rows.forEach((row: any): void => {
                  const cells: ICellValue[] = row.Cells;
                  console.log('Processing item:' + component.getValueFromResults('Title', cells));
                  cells.forEach((value:ICellValue) => {console.log(value.Key + ":" + value.Value);});
                  var editorInfo: string[];
                  if(component.getValueFromResults('EditorOwsUser', cells)!==null) editorInfo = component.getValueFromResults('EditorOwsUser', cells).split('|');
                  const modifiedDate: Date = component.getValueFromResults('LastModifiedTime', cells) === null ? new Date(): new Date(component.getValueFromResults('LastModifiedTime', cells).replace('.0000000', ''));
                  const dateString: string = (modifiedDate.getMonth() + 1) + '/' + modifiedDate.getDate() + '/' + modifiedDate.getFullYear();
                  console.log('Adding search result:' + component.getValueFromResults('Title', cells));
                  console.log('Extension:' + component.getValueFromResults('FileExtension', cells));
                  console.log('Type:' + component.getValueFromResults('FileType', cells));
                  searchContent.push({
                    id: component.getValueFromResults('DocId', cells),
                    url: component.getResultUrl(cells),
                    title: component.getValueFromResults('Title', cells),
                    previewImageUrl: component.getPreviewImageUrl(cells, siteUrl),
                    lastModifiedTime: dateString,
                    lastModifiedByName: editorInfo ? component.trim(editorInfo[1]):"",
                    lastModifiedByPhotoUrl: editorInfo ? component.getUserPhotoUrl(component.trim(editorInfo[0]), siteUrl):"",
                    extension: component.getValueFromResults('FileType', cells)
                  });
                  console.log('Added search result:' + component.getValueFromResults('Title', cells));

                });
                console.log('search processed, total items:' + searchContent.length);
              resolve(searchContent);
          }
        },
        (error: any): void => {
          console.log("ERROR!" + error);
          reject(error);
        });
    });
  }

   private trim(s: string): string {
    if (s != null && s.length > 0) {
      return s.replace(/^\s+|\s+$/gm, '');
    }
    else {
      return s;
    }
  }

  private getResultUrl(result: ICellValue[]): string{
    var itemUrl = this.getValueFromResults('ServerRedirectedURL', result);
    itemUrl = itemUrl? itemUrl: this.getValueFromResults('OriginalPath', result);
    return itemUrl;
  }

   private getPreviewImageUrl(result: ICellValue[], siteUrl: string): string {
    const uniqueID: string = this.getValueFromResults('uniqueID', result);
    const siteId: string = this.getValueFromResults('siteID', result);
    const webId: string = this.getValueFromResults('webID', result);
    const docId: string = this.getValueFromResults('DocId', result);
    if (uniqueID !== null && siteId !== null && webId !== null && docId !== null) {
      return `${siteUrl}/_layouts/15/getpreview.ashx?guidFile=${uniqueID}&guidSite=${siteId}&guidWeb=${webId}&docid=${docId}
      &metadatatoken=300x424x2&ClientType=CodenameOsloWeb&size=small`;
    }
    else {
      return '';
    }
  }

  private getUserPhotoUrl(userEmail: string, siteUrl: string): string {
    //return '';
    return `${siteUrl}/_layouts/15/userphoto.aspx?size=S&accountname=${userEmail}`;
  }

  private request<T>(url: string, method: string = 'GET', headers: any = null, data: any = null): Promise<T> {
    return new Promise<T>((resolve, reject): void => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onreadystatechange = function (): void {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(this.response as T);
          }
          else if (this.status >= 400) {
            reject({
              message: this.response['odata.error'].message.value,
              statusText: this.statusText,
              status: this.status
            });
          }
        }
      };

      xhr.open(method, url, true);
      if (headers === null) {
        xhr.setRequestHeader('Accept', 'application/json;odata=nometadata');
      }
      else {
        for (var header in headers) {
          if (headers.hasOwnProperty(header)) {
            xhr.setRequestHeader(header, headers[header]);
          }
        }
      }
      xhr.responseType = 'json';
      xhr.send(data);
    });
  }

  private getValueFromResults(key: string, results: ICellValue[]): string {
    let value: string = '';

    if (results != null && results.length > 0 && key != null) {
      for (let i: number = 0; i < results.length; i++) {
        const resultItem: ICellValue = results[i];
        if (resultItem.Key === key) {
          value = resultItem.Value;
          break;
        }
      }
    }

    return value;
  }
}
