/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeRolesItem = {
    properties: {
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        role: {
    type: 'one-of',
    contains: [{
    type: 'RolesId',
}, {
    type: 'RolesItem',
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
    },
} as const;