/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewsItem = {
    properties: {
        is: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        widgetType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        title: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        status: {
    type: 'Enum',
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        uid: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        category: {
    type: 'one-of',
    contains: [{
    type: 'DataViewCategoriesId',
}, {
    type: 'DataViewCategoriesItem',
}],
},
        configs: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
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