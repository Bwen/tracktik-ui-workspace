/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaskTypesCollection = {
    properties: {
        name: {
    type: 'string',
},
        dispatchable: {
    type: 'boolean',
},
        schedulable: {
    type: 'boolean',
},
        billable: {
    type: 'boolean',
},
        prefix: {
    type: 'string',
},
        active: {
    type: 'boolean',
},
        reportTemplate: {
    type: 'all-of',
    contains: [{
    type: 'ReportTemplatesId',
}],
},
        priority: {
    type: 'Enum',
},
        dispatchGroup: {
    type: 'string',
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