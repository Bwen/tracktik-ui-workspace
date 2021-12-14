/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeoFencesItem = {
    properties: {
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        geometryType: {
    type: 'Enum',
},
        geometryCoordinates: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        access: {
    type: 'Enum',
},
        radius: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
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