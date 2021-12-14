/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourScheduleOccurrencesPatch = {
    properties: {
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        tourSchedule: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointTourSchedulesId',
}],
},
        tour: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointToursId',
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
        timeZone: {
    type: 'string',
},
    },
} as const;