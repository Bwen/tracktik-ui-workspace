/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportFlagCategoriesCollection = {
    properties: {
        name: {
    type: 'string',
},
        customId: {
    type: 'string',
},
        isGlobal: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
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