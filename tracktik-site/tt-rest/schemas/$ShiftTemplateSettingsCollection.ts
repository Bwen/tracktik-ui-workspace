/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftTemplateSettingsCollection = {
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