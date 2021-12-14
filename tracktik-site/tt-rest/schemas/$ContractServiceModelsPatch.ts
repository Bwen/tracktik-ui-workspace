/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractServiceModelsPatch = {
    properties: {
        name: {
    type: 'string',
},
        serviceType: {
    type: 'Enum',
},
        contract: {
    type: 'all-of',
    contains: [{
    type: 'ContractsId',
}],
},
        settings: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;