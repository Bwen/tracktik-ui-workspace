/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostRecipientsPatch = {
    properties: {
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        messageBoardPost: {
    type: 'all-of',
    contains: [{
    type: 'MessageBoardPostsId',
}],
},
    },
} as const;