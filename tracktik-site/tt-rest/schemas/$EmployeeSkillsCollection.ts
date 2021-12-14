/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeSkillsCollection = {
    properties: {
        skillDateLabel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        expiryDate: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        expiresOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        skillDateLabelValue: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        skillLabel1: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        label1: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        skillLabel1Value: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        skillLabel2: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        label2: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        skillLabel2Value: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        label3: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        skillCustomFields: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        status: {
    type: 'Enum',
},
        comments: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        skill: {
    type: 'all-of',
    contains: [{
    type: 'SkillsId',
}],
},
        employee: {
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