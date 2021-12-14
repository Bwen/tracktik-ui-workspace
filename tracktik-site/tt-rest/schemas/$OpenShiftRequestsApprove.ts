/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OpenShiftRequestsApprove = {
    properties: {
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        acknowledge: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        notify: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;