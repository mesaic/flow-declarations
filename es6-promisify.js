declare module 'es6-promisify' {
  declare export function promisify<R>(fn: (...args: Array<any>) => any): (...args: Array<any>) => Promise<R>;
}