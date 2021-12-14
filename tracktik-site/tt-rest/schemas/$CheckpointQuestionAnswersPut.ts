/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointQuestionAnswersPut = {
    properties: {
        question: {
    type: 'string',
    isRequired: true,
},
        questionIndex: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        answer: {
    type: 'string',
    isRequired: true,
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
    isRequired: true,
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
    isRequired: true,
},
    },
} as const;