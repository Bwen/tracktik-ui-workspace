/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyPaySettingsPatch = {
    properties: {
        isPaid: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        payRatePreference: {
    type: 'Enum',
},
        policyPayRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
},
        maxNumWeeksForProrated: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        hoursPerDay: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
},
    },
} as const;