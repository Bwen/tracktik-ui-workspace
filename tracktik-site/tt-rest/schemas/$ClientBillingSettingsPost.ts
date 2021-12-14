/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientBillingSettingsPost = {
    properties: {
        useMainAddress: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        billingAddress: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPost',
}],
    isRequired: true,
},
        distributeByMail: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        distributeByEmail: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        emailList: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
    isRequired: true,
},
        distributeByFax: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        faxNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
    isRequired: true,
},
        client: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
    isRequired: true,
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
        paymentTerm: {
    type: 'Enum',
},
        taxExempt: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        taxExemptCode: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        distributionNote: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        invoicePermanentMemo: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        invoiceAttentionOf: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        flagForReview: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
    },
} as const;