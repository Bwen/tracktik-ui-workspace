/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSchedulesPost = {
    properties: {
        tour: {
    type: 'all-of',
    contains: [{
    type: 'CheckpointToursId',
}],
    isRequired: true,
},
        scheduledDayOfWeek: {
    type: 'Enum',
    isRequired: true,
},
        weekDay: {
    type: 'Enum',
    isRequired: true,
},
        scheduledTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
    isRequired: true,
},
    },
} as const;