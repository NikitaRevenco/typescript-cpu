import { Equal, Expect } from "../utils/assert.ts";
import { BinaryDigit } from "./binary.ts";

export type And<A extends BinaryDigit, B extends BinaryDigit> = A extends 1
  ? B extends 1
    ? 1
    : 0
  : 0;

export type Or<A extends BinaryDigit, B extends BinaryDigit> = A extends 1
  ? 1
  : B extends 1
    ? 1
    : 0;

export type Not<A extends BinaryDigit> = A extends 1 ? 0 : 1;

export type Nand<A extends BinaryDigit, B extends BinaryDigit> = Not<And<A, B>>;

export type Tests = [
  Expect<Equal<And<0, 1>, 0>>,
  Expect<Equal<And<1, 0>, 0>>,
  Expect<Equal<And<0, 0>, 0>>,
  Expect<Equal<And<1, 1>, 1>>,

  Expect<Equal<Or<0, 1>, 1>>,
  Expect<Equal<Or<1, 0>, 1>>,
  Expect<Equal<Or<0, 0>, 0>>,
  Expect<Equal<Or<1, 1>, 1>>,

  Expect<Equal<Not<1>, 0>>,
  Expect<Equal<Not<0>, 1>>,
];
