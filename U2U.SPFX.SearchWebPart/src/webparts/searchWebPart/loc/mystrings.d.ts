declare interface IStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  QueryFieldLabel: string;
}

declare module 'mystrings' {
  const strings: IStrings;
  export = strings;
}
