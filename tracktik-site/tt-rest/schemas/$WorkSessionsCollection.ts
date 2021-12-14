/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkSessionsCollection = {
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
        durationHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
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
        mobileDevice: {
    type: 'all-of',
    contains: [{
    type: 'MobileDevicesId',
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
        createdBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;