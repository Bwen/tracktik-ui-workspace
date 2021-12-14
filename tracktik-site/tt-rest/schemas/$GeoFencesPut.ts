/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeoFencesPut = {
    properties: {
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        geometryType: {
    type: 'Enum',
    isRequired: true,
},
        geometryCoordinates: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        access: {
    type: 'Enum',
    isRequired: true,
},
        radius: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
    },
} as const;