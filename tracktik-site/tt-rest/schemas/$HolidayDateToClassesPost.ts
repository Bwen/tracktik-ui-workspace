/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDateToClassesPost = {
    properties: {
        class: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsPost',
}],
},
        date: {
    type: 'all-of',
    contains: [{
    type: 'HolidayDatesId',
}],
},
        recurrent: {
    type: 'all-of',
    contains: [{
    type: 'HolidayRecurrentsPost',
}],
},
    },
} as const;