import { GenericComparison } from "./atomic";
export declare const GENERIC_VALUE_COMPARISON: RegExp;
export declare const parseGenericValueComparison: (val: string, options?: {
    reg?: RegExp;
}) => GenericComparison;
