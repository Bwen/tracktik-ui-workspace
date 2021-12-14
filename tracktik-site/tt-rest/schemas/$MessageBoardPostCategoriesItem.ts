/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MessageBoardPostCategoriesItem = {
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
        type: 'MessageBoardPostsItem',
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
    },
} as const;