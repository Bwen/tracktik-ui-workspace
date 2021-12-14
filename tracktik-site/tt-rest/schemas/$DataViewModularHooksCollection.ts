/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewModularHooksCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'DataViewsId',
}],
},
        dataViewCategory: {
    type: 'all-of',
    contains: [{
    type: 'DataViewCategoriesId',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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