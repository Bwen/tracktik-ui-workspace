/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewCategoriesItem = {
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
    type: 'one-of',
    contains: [{
    type: 'DataViewCategoriesId',
}, {
    type: 'DataViewCategoriesItem',
}],
},
        ownedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        archivedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;