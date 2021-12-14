/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSchedulesItem = {
    properties: {
        tour: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointToursId',
}, {
    type: 'CheckpointToursItem',
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