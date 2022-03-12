export type NonNullSkipArray<T> = NonNullable<T> extends infer T1
  ? T1 extends unknown[]
    ? NonNullable<T1[number]>
    : T1
  : never;

type Tail<Path extends any[]> = ((...args: Path) => any) extends (
  _: any,
  ..._1: infer Rest
) => any
  ? Rest
  : never;

type Id<T> = { [K in keyof T]: T[K] } & {};

declare const error: unique symbol;
declare const path: unique symbol;
declare const object: unique symbol;

type ___PickSkipArrays<T, Path extends [...string[]]> = Path extends [
  keyof T,
  ...any[]
]
  ? {
      [Head in Path[0]]: ___PickSkipArrays<
        NonNullSkipArray<T[Path[0]]>,
        Tail<Path>
      >;
    }[Path[0]]
  : Path extends [any, ...any[]]
  ? KeyNotFoundTypeError<T, Path[0]>
  : T;

/**
 * Extracts a deeply-nested type from the target `Path` in `Source`, skipping arrays and ignoring null|undefined|optional types:
 * @example
 * type QueryResult = { allPosts?: Array<{ users?: Array<{ name: string }> }> }
 * // will be { name: string }
 * type User = DeepExtractTypeSkipArrays<QueryResult, ["allPosts", "users"]>
 */
export type DeepExtractTypeSkipArrays<Source, Path extends [...string[]]> = Id<
  NonNullSkipArray<___PickSkipArrays<NonNullable<Source>, Path>>
>;

type ___Pick<T, Path extends [...(string | number)[]]> = Path extends [
  keyof T,
  ...any[]
]
  ? {
      [Head in Path[0]]: ___Pick<NonNullable<T[Path[0]]>, Tail<Path>>;
    }[Path[0]]
  : Path extends [any, ...any[]]
  ? KeyNotFoundTypeError<T, Path[0]>
  : T;

/**
 * Extracts a deeply-nested type from the target `Path` in `Source`, ignoring null|undefined|optional types:
 * @example
 * type QueryResult = { user?: { firstPost?: { title: string } } };
 * // will be { title: string }
 * type Post = DeepExtractType<QueryResult, ["user", "firstPost"]>;
 */
export type DeepExtractType<Source, Path extends [...(string | number)[]]> = Id<
  NonNullable<___Pick<NonNullable<Source>, Path>>
>;
