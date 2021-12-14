/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PayrollCodesCollection = {
    properties: {
        name: {
    type: 'string',
},
        isGlobal: {
    type: 'boolean',
},
        code: {
    type: 'string',
},
        type: {
    type: 'Enum',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;