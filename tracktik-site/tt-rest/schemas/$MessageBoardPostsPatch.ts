/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostsPatch = {
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