type Callback = () => void|Promise<void>;

declare function describe(name: string, fn: Callback): void;
declare function it(name: string, fn?: Callback): void;
declare function before(fn: Callback): void;
declare function after(fn: Callback): void;
declare function beforeEach(fn: Callback): void;
declare function afterEach(fn: Callback): void;
declare function beforeAll(fn: Callback): void;
declare function afterAll(fn: Callback): void;

declare function assert(condition: bool, msg: ?string): void;
declare function expect(): any;
