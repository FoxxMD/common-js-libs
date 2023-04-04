export interface GenericComparison extends HasDisplayText {
    operator: StringOperator;
    value: number;
    isPercent: boolean;
    extra?: string;
    groups?: Record<string, string> | undefined;
    displayText: string;
}
export interface HasDisplayText {
    displayText: string;
}
export declare const PASS = "\u2713";
export declare const FAIL = "\u2718";
export type StringOperator = '>' | '>=' | '<' | '<=';
