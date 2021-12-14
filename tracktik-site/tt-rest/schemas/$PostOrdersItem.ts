/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrdersItem = {
    properties: {
        subject: {
    type: 'one-of',
    contains: [{
    type: 'PostOrderSubjectsId',
}, {
    type: 'PostOrderSubjectsItem',
}],
},
        details: {
    type: 'string',
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        version: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        acknowledgements: {
    type: 'array',
    contains: {
        type: 'PostOrderAcknowledgementsItem',
    },
},
        attachments: {
    type: 'array',
    contains: {
        type: 'FilesItem',
    },
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
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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