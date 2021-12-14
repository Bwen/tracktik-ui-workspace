/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileRunsheetsItem = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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
        rangeStartTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        timeRangeStart: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        rangeEndTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        timeRangeEnd: {
    type: 'all-of',
    contains: [{
    type: 'Time',
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;