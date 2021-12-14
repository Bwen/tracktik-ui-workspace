/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DepartmentsItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        details: {
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
        employeeAssignments: {
    type: 'array',
    contains: {
        type: 'EmployeeAccountAssignmentsItem',
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
        installCode: {
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