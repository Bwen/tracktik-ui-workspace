/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakSessionsPatch = {
    properties: {
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        startDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
},
        initiationMethod: {
    type: 'Enum',
},
        terminationMethod: {
    type: 'Enum',
},
        status: {
    type: 'Enum',
},
        type: {
    type: 'Enum',
},
    },
} as const;