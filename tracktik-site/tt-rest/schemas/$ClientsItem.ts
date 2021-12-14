/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientsItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        company: {
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
        parentClient: {
    type: 'one-of',
    contains: [{
    type: 'ClientsId',
}, {
    type: 'ClientsItem',
}],
},
        firstName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        lastName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        jobTitle: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        primaryPhone: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        secondaryPhone: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        type: {
    type: 'Enum',
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
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsItem',
    },
},
        address: {
    type: 'one-of',
    contains: [{
    type: 'AddressesId',
}, {
    type: 'AddressesItem',
}],
},
        notes: {
    type: 'array',
    contains: {
        type: 'NotesItem',
    },
},
        employeeAssignments: {
    type: 'array',
    contains: {
        type: 'EmployeeAccountAssignmentsItem',
    },
},
        employeeBans: {
    type: 'array',
    contains: {
        type: 'EmployeeAccountBansItem',
    },
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        faxNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        website: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        tags: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
},
        salesRepresentative: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        accountRepresentative: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        contacts: {
    type: 'array',
    contains: {
        type: 'ContactsItem',
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
        zones: {
    type: 'array',
    contains: {
        type: 'ZonesItem',
    },
},
        closedDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        avatar: {
    type: 'all-of',
    contains: [{
    type: 'Image',
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