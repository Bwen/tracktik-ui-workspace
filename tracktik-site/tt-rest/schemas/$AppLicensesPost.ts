/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AppLicensesPost = {
    properties: {
        name: {
    type: 'string',
},
        number: {
    type: 'string',
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        applicationId: {
    type: 'Enum',
    isRequired: true,
},
        installationCode: {
    type: 'string',
},
    },
} as const;