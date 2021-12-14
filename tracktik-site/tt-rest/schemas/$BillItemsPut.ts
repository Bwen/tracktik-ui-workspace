/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BillItemsPut = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
},
        customId: {
    type: 'string',
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        isGlobal: {
    type: 'boolean',
    isRequired: true,
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
    isRequired: true,
},
    },
} as const;