/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayGroupsPatch = {
    properties: {
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        isDefault: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;