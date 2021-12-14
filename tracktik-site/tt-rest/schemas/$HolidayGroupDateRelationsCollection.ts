/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayGroupDateRelationsCollection = {
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