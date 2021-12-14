/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VehiclesPost = {
    properties: {
        name: {
    type: 'string',
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        comments: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        make: {
    type: 'string',
    isRequired: true,
},
        model: {
    type: 'string',
},
        ownershipType: {
    type: 'Enum',
},
        color: {
    type: 'string',
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        year: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        vin: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        licensePlate: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        licensePlateState: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        pictures: {
    type: 'array',
    contains: {
        type: 'FilesId',
    },
},
    },
} as const;