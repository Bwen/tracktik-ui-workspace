/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $HolidayRecurrentsCollection = {
    properties: {
        label: {
    type: 'string',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        code: {
    type: 'string',
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