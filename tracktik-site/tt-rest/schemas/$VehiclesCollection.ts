/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VehiclesCollection = {
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
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;