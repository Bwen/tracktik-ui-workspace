/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ContractServiceModelsCollection = {
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