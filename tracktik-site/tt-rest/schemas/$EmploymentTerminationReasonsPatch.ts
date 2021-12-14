/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmploymentTerminationReasonsPatch = {
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
    },
} as const;