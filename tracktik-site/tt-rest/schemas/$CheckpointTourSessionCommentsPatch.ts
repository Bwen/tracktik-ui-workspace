/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSessionCommentsPatch = {
    properties: {
        session: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointTourSessionsId',
}],
},
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        pictures: {
    type: 'array',
    contains: {
        type: 'FilesId',
    },
},
    },
} as const;