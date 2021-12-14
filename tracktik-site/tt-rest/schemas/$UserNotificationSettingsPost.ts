/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserNotificationSettingsPost = {
    properties: {
        communications: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
    isRequired: true,
},
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
    },
} as const;