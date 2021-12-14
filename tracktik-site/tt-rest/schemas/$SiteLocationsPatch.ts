/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SiteLocationsPatch = {
    properties: {
        name: {
    type: 'string',
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
},
    },
} as const;