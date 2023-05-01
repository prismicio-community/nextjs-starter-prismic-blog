import { DeepNonNullable, DeepRequired } from "ts-essentials";

type DeepNonNullRequired<T> = DeepRequired<DeepNonNullable<T>>;
