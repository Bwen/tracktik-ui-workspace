/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeeSkillsPost = {
    properties: {
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
    isRequired: true,
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
},
    },
} as const;