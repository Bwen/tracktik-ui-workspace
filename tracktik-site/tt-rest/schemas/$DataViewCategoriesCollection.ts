/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewCategoriesCollection = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        iconClass: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        parentCategory: {
    type: 'all-of',
    contains: [{
    type: 'DataViewCategoriesId',
}],
},
        ownedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        archivedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        aclRule: {
    type: 'all-of',
    contains: [{
    type: 'AclRule',
}],
},
        options: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
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
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;