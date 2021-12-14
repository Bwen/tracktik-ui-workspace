/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetsPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        dayOfWeek: {
    type: 'Enum',
    isRequired: true,
},
        rangeStartTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        timeRangeStart: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        rangeEndTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        timeRangeEnd: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        zonePosition: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
        zone: {
    type: 'all-of',
    contains: [{
    type: 'ZonesId',
}],
    isRequired: true,
},
        beginDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        endDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        status: {
    type: 'Enum',
},
    },
} as const;