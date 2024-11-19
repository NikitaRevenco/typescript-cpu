import { Equal, Expect } from "../utils/assert.ts";
import { BinaryDigit } from "./binary.ts";
import { And, Nand, Not } from "./gates.ts";

/**
 * Returns the N - 1 element of the Options array which must have a length of 4, where N
 * is the processed denary number computer from the first two digits
 */
export type BinaryDecoder2to4<
  A extends BinaryDigit,
  B extends BinaryDigit,
  Options,
> = Options extends [infer First, infer Second, infer Third, infer Fourth]
  ? And<A, B> extends 1
    ? Options[3]
    : And<A, Not<B>> extends 1
      ? Options[2]
      : And<Not<A>, B> extends 1
        ? Options[1]
        : Nand<A, B> extends 1
          ? Options[0]
          : never
  : never;

export type Tests = [
  Expect<
    Equal<
      BinaryDecoder2to4<0, 0, ["test", "again", "another", "yet again"]>,
      "test"
    >
  >,
  Expect<
    Equal<
      BinaryDecoder2to4<0, 1, ["test", "again", "another", "yet again"]>,
      "again"
    >
  >,
  Expect<
    Equal<
      BinaryDecoder2to4<1, 0, ["test", "again", "another", "yet again"]>,
      "another"
    >
  >,
  Expect<
    Equal<
      BinaryDecoder2to4<1, 1, ["test", "again", "another", "yet again"]>,
      "yet again"
    >
  >,
];
