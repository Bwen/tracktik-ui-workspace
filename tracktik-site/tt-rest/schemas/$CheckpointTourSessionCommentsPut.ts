/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSessionCommentsPut = {
    properties: {
        session: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointTourSessionsId',
}],
    isRequired: true,
},
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        pictures: {
    type: 'array',
    contains: {
        type: 'FilesId',
    },
},
    },
} as const;