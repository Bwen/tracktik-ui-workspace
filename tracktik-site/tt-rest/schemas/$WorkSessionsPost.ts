/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkSessionsPost = {
    properties: {
        startedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
}],
    isRequired: true,
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
    isRequired: true,
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
        clockInMethod: {
    type: 'Enum',
},
        terminationMethod: {
    type: 'Enum',
},
        clockOutMethod: {
    type: 'Enum',
},
        status: {
    type: 'Enum',
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        shift: {
    type: 'all-of',
    contains: [{
    type: 'ShiftsId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
    isRequired: true,
},
        breaks: {
    type: 'array',
    contains: {
        type: 'BreakSessionsId',
    },
},
        initiationPhoneNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        clockInPhoneNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        terminationPhoneNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        clockOutPhoneNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
    },
} as const;