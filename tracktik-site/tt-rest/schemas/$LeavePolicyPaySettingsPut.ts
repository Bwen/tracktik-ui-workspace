/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyPaySettingsPut = {
    properties: {
        isPaid: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        payRatePreference: {
    type: 'Enum',
    isRequired: true,
},
        policyPayRate: {
    type: 'all-of',
    contains: [{
    type: 'CurrencyRate',
}],
    isRequired: true,
},
        maxNumWeeksForProrated: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        hoursPerDay: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
    isRequired: true,
},
        payCode: {
    type: 'all-of',
    contains: [{
    type: 'PayrollCodesId',
}],
    isRequired: true,
},
    },
} as const;