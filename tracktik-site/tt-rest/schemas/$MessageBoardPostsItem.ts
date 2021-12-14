/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        category: {
    type: 'one-of',
    contains: [{
    type: 'MessageBoardPostCategoriesId',
}, {
    type: 'MessageBoardPostCategoriesItem',
}],
},
        recipients: {
    type: 'array',
    contains: {
        type: 'MessageBoardPostRecipientsItem',
    },
},
        messageBoardPostAcknowledgement: {
    type: 'array',
    contains: {
        type: 'MessageBoardPostAcknowledgementsItem',
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