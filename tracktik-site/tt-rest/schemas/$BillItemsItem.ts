/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillItemsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
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