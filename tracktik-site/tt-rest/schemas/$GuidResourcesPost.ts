/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GuidResourcesPost = {
    properties: {
        guid: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        resourceType: {
    type: 'string',
},
    },
} as const;