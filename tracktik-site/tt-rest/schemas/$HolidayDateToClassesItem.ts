/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDateToClassesItem = {
    properties: {
        class: {
    type: 'one-of',
    contains: [{
    type: 'HolidayGroupsId',
}, {
    type: 'HolidayGroupsItem',
}],
},
        date: {
    type: 'one-of',
    contains: [{
    type: 'HolidayDatesId',
}, {
    type: 'HolidayDatesItem',
}],
},
        recurrent: {
    type: 'one-of',
    contains: [{
    type: 'HolidayRecurrentsId',
}, {
    type: 'HolidayRecurrentsItem',
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