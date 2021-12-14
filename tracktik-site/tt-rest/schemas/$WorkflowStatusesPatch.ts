/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowStatusesPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        tag: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        workflow: {
    type: 'all-of',
    contains: [{
    type: 'WorkflowsId',
}],
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