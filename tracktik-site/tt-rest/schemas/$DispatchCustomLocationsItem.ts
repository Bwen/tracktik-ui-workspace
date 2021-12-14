/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DispatchCustomLocationsItem = {
    properties: {
        dispatchTask: {
    type: 'one-of',
    contains: [{
    type: 'DispatchTasksId',
}, {
    type: 'DispatchTasksItem',
}],
},
        type: {
    type: 'Enum',
},
        name: {
    type: 'string',
},
        addressLine1: {
    type: 'string',
},
        addressLine2: {
    type: 'string',
},
        city: {
    type: 'string',
},
        state: {
    type: 'string',
},
        postalCode: {
    type: 'string',
},
        country: {
    type: 'string',
},
        autoGeoCode: {
    type: 'boolean',
},
        latitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLatitude',
}],
},
        longitude: {
    type: 'all-of',
    contains: [{
    type: 'GeoPositionLongitude',
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