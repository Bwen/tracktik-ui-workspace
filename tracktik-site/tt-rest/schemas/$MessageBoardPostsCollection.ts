/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostsCollection = {
    properties: {
        content: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        status: {
    type: 'Enum',
},
        expireOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        category: {
    type: 'all-of',
    contains: [{
    type: 'MessageBoardPostCategoriesId',
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