/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmploymentTerminationReasonsItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        isVoluntary: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        commentRequired: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        employmentProfiles: {
    type: 'array',
    contains: {
        type: 'EmploymentProfilesItem',
    },
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