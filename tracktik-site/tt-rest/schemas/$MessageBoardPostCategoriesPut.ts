/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostCategoriesPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        messages: {
    type: 'array',
    contains: {
        type: 'MessageBoardPostsId',
    },
},
    },
} as const;