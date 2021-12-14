/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SiteLocationsPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        details: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        type: {
    type: 'Enum',
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
    },
} as const;