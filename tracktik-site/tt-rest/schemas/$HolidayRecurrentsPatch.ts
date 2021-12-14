/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayRecurrentsPatch = {
    properties: {
        label: {
    type: 'string',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        code: {
    type: 'string',
},
    },
} as const;