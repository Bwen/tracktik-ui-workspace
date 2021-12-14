/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Error = {
    properties: {
        status: {
    type: 'number',
    maximum: 600,
    minimum: 100,
},
        error: {
    type: 'string',
},
    },
} as const;