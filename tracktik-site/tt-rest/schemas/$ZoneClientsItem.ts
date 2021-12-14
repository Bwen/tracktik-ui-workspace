/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ZoneClientsItem = {
    properties: {
        zone: {
    type: 'one-of',
    contains: [{
    type: 'ZonesId',
}, {
    type: 'ZonesItem',
}],
},
        client: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
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