/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyPaySettingsCollection = {
    properties: {
        leavePolicy: {
    type: 'all-of',
    contains: [{
    type: 'LeavePoliciesId',
}],
},
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