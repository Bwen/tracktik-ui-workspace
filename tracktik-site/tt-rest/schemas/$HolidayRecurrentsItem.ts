/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayRecurrentsItem = {
    properties: {
        label: {
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
        code: {
    type: 'string',
},
        dates: {
    type: 'array',
    contains: {
        type: 'HolidayDatesItem',
    },
},
        groups: {
    type: 'array',
    contains: {
        type: 'HolidayGroupsItem',
    },
},
        nextOccurrence: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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