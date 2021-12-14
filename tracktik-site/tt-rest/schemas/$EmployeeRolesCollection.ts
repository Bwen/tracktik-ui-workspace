/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeRolesCollection = {
    properties: {
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        role: {
    type: 'all-of',
    contains: [{
    type: 'RolesId',
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