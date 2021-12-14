/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillItemsCollection = {
    properties: {
        name: {
    type: 'string',
},
        customId: {
    type: 'string',
},
        status: {
    type: 'Enum',
},
        isGlobal: {
    type: 'boolean',
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