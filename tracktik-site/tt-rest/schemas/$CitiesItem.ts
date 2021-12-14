/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CitiesItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        province: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        state: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        country: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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