/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagCategoriesPost = {
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
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
    },
} as const;