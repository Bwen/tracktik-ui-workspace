/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDatesPost = {
    properties: {
        name: {
    type: 'string',
    isRequired: true,
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