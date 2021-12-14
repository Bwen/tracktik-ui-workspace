/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewModularHooksItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        type: {
    type: 'Enum',
},
        dataView: {
    type: 'one-of',
    contains: [{
    type: 'DataViewsId',
}, {
    type: 'DataViewsItem',
}],
},
        dataViewCategory: {
    type: 'one-of',
    contains: [{
    type: 'DataViewCategoriesId',
}, {
    type: 'DataViewCategoriesItem',
}],
},
        portal: {
    type: 'Enum',
},
        contextFilter: {
    type: 'Enum',
},
        contextFilterAttribute: {
    type: 'string',
},
        settings: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        status: {
    type: 'Enum',
},
        archivedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
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