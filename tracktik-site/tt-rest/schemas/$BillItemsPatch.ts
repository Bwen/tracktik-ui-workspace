/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillItemsPatch = {
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
    },
} as const;