/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftTemplateSettingsPost = {
    properties: {
        client: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        cycleDays: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        startDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
    },
} as const;