/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostsPut = {
    properties: {
        content: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        expireOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
    isRequired: true,
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        category: {
    type: 'all-of',
    contains: [{
    type: 'MessageBoardPostCategoriesId',
}],
    isRequired: true,
},
        recipients: {
    type: 'array',
    contains: {
        type: 'MessageBoardPostRecipientsId',
    },
},
        messageBoardPostAcknowledgement: {
    type: 'array',
    contains: {
        type: 'MessageBoardPostAcknowledgementsId',
    },
},
    },
} as const;