/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostRecipientsItem = {
    properties: {
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        messageBoardPost: {
    type: 'one-of',
    contains: [{
    type: 'MessageBoardPostsId',
}, {
    type: 'MessageBoardPostsItem',
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;