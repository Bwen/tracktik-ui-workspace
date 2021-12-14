/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetOccurrencesItem = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        dayOfWeek: {
    type: 'Enum',
},
        rangeStartDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        dateTimeRangeStart: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        rangeEndDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        dateTimeRangeEnd: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        occurrenceDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        zonePosition: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        zone: {
    type: 'one-of',
    contains: [{
    type: 'ZonesId',
}, {
    type: 'ZonesItem',
}],
},
        mobileRunsheet: {
    type: 'one-of',
    contains: [{
    type: 'MobileRunsheetsId',
}, {
    type: 'MobileRunsheetsItem',
}],
},
        session: {
    type: 'one-of',
    contains: [{
    type: 'MobileRunsheetSessionsId',
}, {
    type: 'MobileRunsheetSessionsItem',
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
        timeZone: {
    type: 'string',
},
    },
} as const;