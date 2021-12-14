/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayRecurrentsPost = {
    properties: {
        label: {
    type: 'string',
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        code: {
    type: 'string',
    isRequired: true,
},
    },
} as const;