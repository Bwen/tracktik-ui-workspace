/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OpenShiftRequestsPost = {
    properties: {
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
    isRequired: true,
},
    },
} as const;