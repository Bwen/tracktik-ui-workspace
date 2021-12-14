/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDateToClassesPut = {
    properties: {
        class: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsPut',
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
    type: 'HolidayRecurrentsPut',
}],
},
    },
} as const;