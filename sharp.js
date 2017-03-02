type TMetadata = {
  format: string,
  width: number,
  height: number,
};

declare module 'sharp' {
  declare class Sharp extends stream$Duplex {
    metadata(): Promise<TMetadata>;

    resize(width: ?number, height: ?number): Sharp;

    quality(quality: ?number): Sharp;

    progressive(): Sharp;

    jpeg(): Sharp;
    png(): Sharp;

    on(event: string, listener: Function): Sharp;
  }

  declare function exports(): Sharp;
}
