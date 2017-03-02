declare module 'sequelize' {
  declare var BLOB: any;
  declare var BOOLEAN: any;
  declare var DATE: any;
  declare var ENUM: any;
  declare var FLOAT: any;
  declare var INTEGER: any;
  declare var JSON: any;
  declare var STRING: any;
  declare var CHAR: any;
  declare var TEXT: any;
  declare var UUID: any;
  declare var UUIDV1: any;
  declare var UUIDV4: any;
  declare var VIRTUAL: any;
  declare function DECIMAL(length: number, digits: number): any;

  declare function fn(functionName: string, ...args: any[]): Object;
  declare function col(name: string): Object;
  declare function or(...args: any[]): Object;
  declare function and(...args: any[]): Object;

  declare class Deferrable {
    static INITIALLY_DEFERRED: any;
    static INITIALLY_IMMEDIATE: any;
    static NOT: any;
    static SET_DEFERRED: any;
    static SET_IMMEDIATE: any;
  }
}

declare module 'sequelize/lib/model' {
  declare var exports: any;
}
