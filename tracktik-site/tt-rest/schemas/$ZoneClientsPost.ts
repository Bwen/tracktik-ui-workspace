/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ZoneClientsPost = {
    properties: {
        zone: {
    type: 'all-of',
    contains: [{
    type: 'ZonesId',
}],
},
        client: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
    },
} as const;