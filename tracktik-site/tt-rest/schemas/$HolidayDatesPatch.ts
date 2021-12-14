/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDatesPatch = {
    properties: {
        name: {
    type: 'string',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        holidayDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        recurrent: {
    type: 'all-of',
    contains: [{
    type: 'HolidayRecurrentsId',
}],
},
    },
} as const;