/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeavePolicyPaySettingsItem = {
    properties: {
        leavePolicy: {
    type: 'one-of',
    contains: [{
    type: 'LeavePoliciesId',
}, {
    type: 'LeavePoliciesItem',
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
    type: 'one-of',
    contains: [{
    type: 'PayrollCodesId',
}, {
    type: 'PayrollCodesItem',
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