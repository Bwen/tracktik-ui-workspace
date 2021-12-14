/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchTasksAddNote = {
    properties: {
        note: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
    isRequired: true,
},
        showOnInvoiceAndBillingReport: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;