/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientBillingSettingsPatch = {
    properties: {
        useMainAddress: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        billingAddress: {
    type: 'all-of',
    contains: [{
    type: 'AddressesPatch',
}],
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
},
        client: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
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