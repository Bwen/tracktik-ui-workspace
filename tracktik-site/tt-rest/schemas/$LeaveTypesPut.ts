/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LeaveTypesPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
    },
} as const;