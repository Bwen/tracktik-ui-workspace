/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassesCollection = {
    properties: {
        name: {
    type: 'string',
},
        status: {
    type: 'Enum',
},
        customId: {
    type: 'string',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
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