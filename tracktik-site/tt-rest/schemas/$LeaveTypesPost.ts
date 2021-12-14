/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeaveTypesPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
    },
} as const;