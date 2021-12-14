/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ZoneClientsCollection = {
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;