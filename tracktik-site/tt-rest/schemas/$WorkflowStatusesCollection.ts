/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkflowStatusesCollection = {
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
    },
} as const;