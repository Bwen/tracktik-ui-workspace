/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowStatusesPut = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        workflow: {
    type: 'all-of',
    contains: [{
    type: 'WorkflowsId',
}],
    isRequired: true,
},
        formatBackgroundColor: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        formatTextColor: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        warningThresholdInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        alertThresholdInMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
    },
} as const;