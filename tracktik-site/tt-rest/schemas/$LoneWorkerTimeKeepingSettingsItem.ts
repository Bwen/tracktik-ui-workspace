/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerTimeKeepingSettingsItem = {
    properties: {
        account: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
}],
},
        checkInEnabled: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        restrictPhoneNumber: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        lateAfterMinutes: {
    type: 'all-of',
    contains: [{
    type: 'Minutes',
}],
},
        automaticCheckInCall: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        loneWorkerPhones: {
    type: 'array',
    contains: {
        type: 'LoneWorkerPhonesItem',
    },
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