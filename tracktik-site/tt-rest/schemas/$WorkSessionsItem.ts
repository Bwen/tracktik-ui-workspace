/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WorkSessionsItem = {
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        shift: {
    type: 'one-of',
    contains: [{
    type: 'ShiftsId',
}, {
    type: 'ShiftsItem',
}],
},
        durationHours: {
    type: 'all-of',
    contains: [{
    type: 'Hours',
}],
},
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        breaks: {
    type: 'array',
    contains: {
        type: 'BreakSessionsItem',
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
        mobileDevice: {
    type: 'one-of',
    contains: [{
    type: 'MobileDevicesId',
}, {
    type: 'MobileDevicesItem',
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
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
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