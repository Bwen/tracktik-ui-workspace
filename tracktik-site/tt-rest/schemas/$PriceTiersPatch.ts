/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PriceTiersPatch = {
    properties: {
        name: {
    type: 'string',
},
        customId: {
    type: 'string',
},
        instructions: {
    type: 'string',
},
        effectiveDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        validUntilDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        cancellationThresholdInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Number',
}],
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
},
        taxClass: {
    type: 'all-of',
    contains: [{
    type: 'TaxClassesId',
}],
},
    },
} as const;