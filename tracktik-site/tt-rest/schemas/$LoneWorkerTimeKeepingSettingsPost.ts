/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerTimeKeepingSettingsPost = {
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
        loneWorkerPhones: {
    type: 'array',
    contains: {
        type: 'LoneWorkerPhonesId',
    },
},
    },
} as const;