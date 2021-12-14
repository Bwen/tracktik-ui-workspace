/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkSessionsAddBreak = {
    properties: {
        breakType: {
    type: 'Enum',
    isRequired: true,
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;