/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ZonesItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        address: {
    type: 'one-of',
    contains: [{
    type: 'AddressesId',
}, {
    type: 'AddressesItem',
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
        status: {
    type: 'Enum',
},
        clients: {
    type: 'array',
    contains: {
        type: 'ClientsItem',
    },
},
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsItem',
    },
},
        allowedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesItem',
    },
},
        restrictedAreas: {
    type: 'array',
    contains: {
        type: 'GeoFencesItem',
    },
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        employeeAssignments: {
    type: 'array',
    contains: {
        type: 'EmployeeAccountAssignmentsItem',
    },
},
        preferredLanguage: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        subZones: {
    type: 'array',
    contains: {
        type: 'ZonesItem',
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