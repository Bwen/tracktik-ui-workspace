/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxClassesItem = {
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
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        items: {
    type: 'array',
    contains: {
        type: 'TaxClassItemsItem',
    },
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