/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagCategoriesPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        customId: {
    type: 'string',
},
        isGlobal: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
    },
} as const;