/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmploymentTerminationReasonsPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        isVoluntary: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
        commentRequired: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
    isRequired: true,
},
    },
} as const;