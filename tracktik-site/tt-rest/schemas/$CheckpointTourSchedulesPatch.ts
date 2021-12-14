/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSchedulesPatch = {
    properties: {
        tour: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointToursId',
}],
},
        scheduledDayOfWeek: {
    type: 'Enum',
},
        weekDay: {
    type: 'Enum',
},
        scheduledTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
    },
} as const;