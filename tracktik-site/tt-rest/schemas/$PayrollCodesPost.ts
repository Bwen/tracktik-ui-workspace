/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollCodesPost = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        isGlobal: {
    type: 'boolean',
    isRequired: true,
},
        code: {
    type: 'string',
},
        type: {
    type: 'Enum',
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
        multiplier: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        extraCharge: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        payable: {
    type: 'boolean',
    isRequired: true,
},
        impactsOvertime: {
    type: 'boolean',
},
        billable: {
    type: 'boolean',
},
        isAdhoc: {
    type: 'boolean',
},
        isDeductable: {
    type: 'boolean',
},
        isLabel: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;