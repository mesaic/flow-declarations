type TMetadata = {
  format: string,
  width: number,
  height: number,
};

declare module 'gm' {
  declare class Gm {
    subClass(opts: Object): Gm;
  }

  declare function exports(): Gm;
}
