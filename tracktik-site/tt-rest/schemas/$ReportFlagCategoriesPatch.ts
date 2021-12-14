/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagCategoriesPatch = {
    properties: {
        name: {
    type: 'string',
},
        customId: {
    type: 'string',
},
        isGlobal: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;