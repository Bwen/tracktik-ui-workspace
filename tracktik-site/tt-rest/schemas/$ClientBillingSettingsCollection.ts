/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientBillingSettingsCollection = {
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
    type: 'AddressesCollection',
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;