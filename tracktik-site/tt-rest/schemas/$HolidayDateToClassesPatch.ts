/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDateToClassesPatch = {
    properties: {
        class: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsPatch',
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
    type: 'HolidayRecurrentsPatch',
}],
},
    },
} as const;