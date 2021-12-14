/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerTimeKeepingSettingsCollection = {
    properties: {
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
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