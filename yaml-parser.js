declare module 'yaml-parser' {
  declare function safeLoad(yaml: string): Object;
  declare function safeDump(object: Object, options?: {
    indent?: ?number,
    skipInvalid?: boolean,
    flowLevel?: number,
    styles?: Object,
    schema?: any,
    sortKeys?: boolean,
    lineWidth?: number,
    noRefs?: boolean,
  }): string;
}
