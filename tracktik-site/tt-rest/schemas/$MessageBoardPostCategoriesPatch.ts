/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostCategoriesPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        messages: {
    type: 'array',
    contains: {
        type: 'MessageBoardPostsId',
    },
},
    },
} as const;