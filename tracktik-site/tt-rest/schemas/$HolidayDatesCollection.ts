/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayDatesCollection = {
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