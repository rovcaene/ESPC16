import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';


import SearchWebPart, {ISearchWebPartProps} from './components/SearchWebPart';
import { ISearchWebPartWebPartProps } from './ISearchWebPartWebPartProps';

export default class SearchWebPartWebPart extends BaseClientSideWebPart<ISearchWebPartWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    const element: React.ReactElement<ISearchWebPartWebPartProps> = React.createElement(SearchWebPart, {
      instruction: this.properties.instruction,
      query:this.properties.query,
      context: this.context
    });

    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: "Search Settings"
          },
          groups: [
            {
              groupName: "Query",
              groupFields: [
                PropertyPaneTextField('instruction', {
                  label: 'Instructions'
                }),
                PropertyPaneTextField('query', {
                  label: 'Query',
                  placeholder: 'enter your query'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
