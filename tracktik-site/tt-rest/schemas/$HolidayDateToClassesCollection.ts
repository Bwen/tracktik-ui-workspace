/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDateToClassesCollection = {
    properties: {
        class: {
    type: 'all-of',
    contains: [{
    type: 'HolidayGroupsCollection',
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
    type: 'HolidayRecurrentsCollection',
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