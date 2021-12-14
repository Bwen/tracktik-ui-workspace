/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SystemSettingsPost = {
    properties: {
        tag: {
    type: 'Enum',
    isRequired: true,
},
        value: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
        domainFilter: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;