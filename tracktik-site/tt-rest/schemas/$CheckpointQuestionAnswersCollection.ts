/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointQuestionAnswersCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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
    type: 'all-of',
    contains: [{
    type: 'CheckpointsId',
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