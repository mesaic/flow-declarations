declare module 'es6-promisify' {
  declare function exports<R>(fn: (...args: Array<any>) => any): (...args: Array<any>) => Promise<R>;
}
