/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourScheduleOccurrencesItem = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        tourSchedule: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointTourSchedulesId',
}, {
    type: 'CheckpointTourSchedulesItem',
}],
},
        tour: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointToursId',
}, {
    type: 'CheckpointToursItem',
}],
},
        tourDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        date: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        tourTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        time: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        occurrenceDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        datetime: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
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