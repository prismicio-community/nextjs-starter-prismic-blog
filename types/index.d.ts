import { DeepNonNullable, DeepRequired } from "ts-essentials";

type DeepNonNullRequired<T> = DeepRequired<DeepNonNullable<T>>;

type PickFieldsStartingWith<T, Prefix extends string> = {
  [K in keyof T as K extends `${Prefix}${string}` ? K : never]: T[K];
};
