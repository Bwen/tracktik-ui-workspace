/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientBillingSettingsItem = {
    properties: {
        useMainAddress: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        billingAddress: {
    type: 'one-of',
    contains: [{
    type: 'AddressesId',
}, {
    type: 'AddressesItem',
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
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        taxClass: {
    type: 'one-of',
    contains: [{
    type: 'TaxClassesId',
}, {
    type: 'TaxClassesItem',
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