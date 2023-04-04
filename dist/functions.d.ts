import { GenericComparison } from "./atomic";
export declare const GENERIC_VALUE_COMPARISON: RegExp;
export declare const parseGenericValueComparison: (val: string, options?: {
    reg?: RegExp;
}) => GenericComparison;
export declare const comparisonTextOp: (val1: number, strOp: string, val2: number) => boolean;
