/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CommentsCollection = {
    properties: {
        comment: {
    type: 'string',
},
        type: {
    type: 'Enum',
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;