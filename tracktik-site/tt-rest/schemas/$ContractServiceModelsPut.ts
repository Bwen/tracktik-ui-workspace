/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractServiceModelsPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        serviceType: {
    type: 'Enum',
    isRequired: true,
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
    isRequired: true,
},
        settings: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;