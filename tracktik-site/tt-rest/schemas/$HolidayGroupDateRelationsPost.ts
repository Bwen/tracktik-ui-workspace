/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayGroupDateRelationsPost = {
    properties: {
        holidayGroup: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsId',
}],
},
        holidayDate: {
    type: 'all-of',
    contains: [{
    type: 'HolidayDatesId',
}],
},
        holidayRecurrent: {
    type: 'all-of',
    contains: [{
    type: 'HolidayRecurrentsId',
}],
},
    },
} as const;