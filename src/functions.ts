import {GenericComparison, StringOperator} from "./atomic";

export const GENERIC_VALUE_COMPARISON = /^\s*(?<opStr>>|>=|<|<=)\s*(?<value>-?(?:\d+)(?:(?:(?:.|,)\d+)+)?)(?<extra>\s+.*)*$/
const GENERIC_VALUE_COMPARISON_URL = 'https://regexr.com/6vama';

export const parseGenericValueComparison = (val: string, options?: {
    reg?: RegExp
}): GenericComparison => {

    const {
        reg = GENERIC_VALUE_COMPARISON,
    } = options || {};

    const matches = val.match(reg);

    if (matches === null) {
        throw new Error(`Could not parse ${val} as comparison`);
    }

    const groups = matches.groups as any;

    const displayParts = [`${groups.opStr} ${groups.value}`];
    const hasPercent = typeof groups.percent === 'string' && groups.percent.trim() !== '';
    if (hasPercent) {
        displayParts.push('%');
    }

    const {
        opStr,
        value,
        percent,
        extra,
        ...rest
    } = matches.groups || {};

    const extraGroups: Record<string, string> = {};
    let hasExtraGroups = false;

    for (const [k, v] of Object.entries(rest)) {
        if (typeof v === 'string' && v.trim() !== '') {
            extraGroups[k] = v;
            hasExtraGroups = true;
        }
    }

    return {
        operator: groups.opStr as StringOperator,
        value: Number.parseFloat(groups.value),
        isPercent: hasPercent,
        extra: groups.extra,
        groups: hasExtraGroups ? extraGroups : undefined,
        displayText: displayParts.join(''),
    }
}
