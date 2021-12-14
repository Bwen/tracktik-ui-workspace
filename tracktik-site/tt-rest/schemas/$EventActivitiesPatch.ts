/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EventActivitiesPatch = {
    properties: {
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        type: {
    type: 'string',
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        timeStamp: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
    },
} as const;