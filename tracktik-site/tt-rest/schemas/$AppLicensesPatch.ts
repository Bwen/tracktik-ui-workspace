/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AppLicensesPatch = {
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
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
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
},
        installationCode: {
    type: 'string',
},
    },
} as const;