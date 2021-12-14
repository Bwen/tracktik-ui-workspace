/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserNotificationSettingsPatch = {
    properties: {
        communications: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
        user: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
    },
} as const;