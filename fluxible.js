declare module 'fluxible' {
  declare var exports: any;
}

declare class Fluxible$BaseStore {
  emitChange(): void;
  getContext(): {
    getCookie(): ?string;
    setCookie(name: string, value: ?string): void;
    deleteCookie: (name: string) => void;
  };
}

declare module 'fluxible/addons' {
  declare class BaseStore extends Fluxible$BaseStore {}
}

declare module 'fluxible-addons-react/provideContext' {
  declare var exports: any;
}
