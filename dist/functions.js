"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparisonTextOp = exports.parseGenericValueComparison = exports.GENERIC_VALUE_COMPARISON = void 0;
exports.GENERIC_VALUE_COMPARISON = /^\s*(?<opStr>>|>=|<|<=)\s*(?<value>-?(?:\d+)(?:(?:(?:.|,)\d+)+)?)(?<extra>\s+.*)*$/;
const GENERIC_VALUE_COMPARISON_URL = 'https://regexr.com/6vama';
const parseGenericValueComparison = (val, options) => {
    const { reg = exports.GENERIC_VALUE_COMPARISON, } = options || {};
    const matches = val.match(reg);
    if (matches === null) {
        throw new Error(`Could not parse ${val} as comparison`);
    }
    const groups = matches.groups;
    const displayParts = [`${groups.opStr} ${groups.value}`];
    const hasPercent = typeof groups.percent === 'string' && groups.percent.trim() !== '';
    if (hasPercent) {
        displayParts.push('%');
    }
    const { opStr, value, percent, extra, ...rest } = matches.groups || {};
    const extraGroups = {};
    let hasExtraGroups = false;
    for (const [k, v] of Object.entries(rest)) {
        if (typeof v === 'string' && v.trim() !== '') {
            extraGroups[k] = v;
            hasExtraGroups = true;
        }
    }
    return {
        operator: groups.opStr,
        value: Number.parseFloat(groups.value),
        isPercent: hasPercent,
        extra: groups.extra,
        groups: hasExtraGroups ? extraGroups : undefined,
        displayText: displayParts.join(''),
    };
};
exports.parseGenericValueComparison = parseGenericValueComparison;
const comparisonTextOp = (val1, strOp, val2) => {
    switch (strOp) {
        case '>':
            return val1 > val2;
        case '>=':
            return val1 >= val2;
        case '<':
            return val1 < val2;
        case '<=':
            return val1 <= val2;
        default:
            throw new Error(`${strOp} was not a recognized operator`);
    }
};
exports.comparisonTextOp = comparisonTextOp;
