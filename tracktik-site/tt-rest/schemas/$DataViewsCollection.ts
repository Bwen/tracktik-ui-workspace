/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewsCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'DataViewCategoriesId',
}],
},
        configs: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
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