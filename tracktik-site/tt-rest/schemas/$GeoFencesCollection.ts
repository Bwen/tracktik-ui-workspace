/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeoFencesCollection = {
    properties: {
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
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