/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoneWorkerScheduleCheckInsCollection = {
    properties: {
        weekDay: {
    type: 'Enum',
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        account: {
    type: 'all-of',
    contains: [{
    type: 'AccountsId',
}],
},
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
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