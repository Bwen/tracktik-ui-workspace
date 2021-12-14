/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetOccurrencesCollection = {
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
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        zone: {
    type: 'all-of',
    contains: [{
    type: 'ZonesId',
}],
},
        mobileRunsheet: {
    type: 'all-of',
    contains: [{
    type: 'MobileRunsheetsId',
}],
},
        session: {
    type: 'all-of',
    contains: [{
    type: 'MobileRunsheetSessionsId',
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