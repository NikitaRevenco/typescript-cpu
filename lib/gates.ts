import { Equal, Expect } from "../utils/assert.ts";

export type And<A extends boolean, B extends boolean> = A extends true
  ? B extends true
    ? true
    : false
  : false;

export type Or<A extends boolean, B extends boolean> = A extends true
  ? true
  : B extends true
    ? true
    : false;

export type Not<A extends boolean> = A extends true ? false : true;

export type Tests = [
  Expect<Equal<And<false, true>, false>>,
  Expect<Equal<And<true, false>, false>>,
  Expect<Equal<And<false, false>, false>>,
  Expect<Equal<And<true, true>, true>>,

  Expect<Equal<Or<false, true>, true>>,
  Expect<Equal<Or<true, false>, true>>,
  Expect<Equal<Or<false, false>, false>>,
  Expect<Equal<Or<true, true>, true>>,

  Expect<Equal<Not<true>, false>>,
  Expect<Equal<Not<false>, true>>,
];
