/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SkillsItem = {
    properties: {
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        category: {
    type: 'one-of',
    contains: [{
    type: 'SkillCategoriesId',
}, {
    type: 'SkillCategoriesItem',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        dateLabel: {
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
        label2: {
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
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        archived: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
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