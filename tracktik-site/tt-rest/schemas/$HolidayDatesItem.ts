/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDatesItem = {
    properties: {
        name: {
    type: 'string',
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        holidayDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
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