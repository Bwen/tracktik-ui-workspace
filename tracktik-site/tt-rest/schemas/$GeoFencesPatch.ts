/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeoFencesPatch = {
    properties: {
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        geometryType: {
    type: 'Enum',
},
        geometryCoordinates: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        access: {
    type: 'Enum',
},
        radius: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
    },
} as const;