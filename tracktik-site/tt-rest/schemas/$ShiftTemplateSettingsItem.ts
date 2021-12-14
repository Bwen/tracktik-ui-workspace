/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftTemplateSettingsItem = {
    properties: {
        client: {
    type: 'one-of',
    contains: [{
    type: 'AccountsId',
}, {
    type: 'AccountsItem',
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
    },
} as const;