/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SystemSettingsPatch = {
    properties: {
        tag: {
    type: 'Enum',
},
        value: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        domainFilter: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;