
export interface GenericComparison extends HasDisplayText {
    operator: StringOperator,
    value: number,
    isPercent: boolean,
    extra?: string,
    groups?: Record<string, string> | undefined
    displayText: string,
}

export interface HasDisplayText {
    displayText: string
}

export const PASS = '✓';
export const FAIL = '✘';
export type StringOperator = '>' | '>=' | '<' | '<=';
