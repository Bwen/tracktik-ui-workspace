/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointQuestionAnswersPatch = {
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
    },
} as const;