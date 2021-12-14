/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostRecipientsPost = {
    properties: {
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        messageBoardPost: {
    type: 'all-of',
    contains: [{
    type: 'MessageBoardPostsId',
}],
    isRequired: true,
},
    },
} as const;