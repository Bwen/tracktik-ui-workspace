/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointQuestionAnswersItem = {
    properties: {
        question: {
    type: 'string',
},
        questionIndex: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        answer: {
    type: 'string',
},
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        scannedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        scanTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        checkpoint: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointsId',
}, {
    type: 'CheckpointsItem',
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