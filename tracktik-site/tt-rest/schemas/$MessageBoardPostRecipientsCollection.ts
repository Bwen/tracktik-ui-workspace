/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostRecipientsCollection = {
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