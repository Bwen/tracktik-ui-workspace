/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchTasksRaiseEvent = {
    properties: {
        event: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
        reportFields: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;