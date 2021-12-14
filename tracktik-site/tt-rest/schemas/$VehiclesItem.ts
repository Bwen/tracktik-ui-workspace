/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VehiclesItem = {
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
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
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
        pictures: {
    type: 'array',
    contains: {
        type: 'FilesItem',
    },
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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