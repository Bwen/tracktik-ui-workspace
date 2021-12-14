/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MobileDevicesWorkStatus = {
    properties: {
        shift: {
    type: 'array',
    contains: {
        type: 'ShiftsItem',
    },
},
        assignedTasksCount: {
    type: 'number',
},
        runsheetStatus: {
    properties: {
        runsheetName: {
    type: 'string',
},
        completedItemCount: {
    type: 'number',
},
        totalItemCount: {
    type: 'number',
},
        status: {
    type: 'string',
},
        currentSite: {
    type: 'array',
    contains: {
        type: 'ClientsItem',
    },
},
    },
},
        workSession: {
    properties: {
        startDateTime: {
    type: 'string',
    format: 'date-time',
},
    },
},
    },
} as const;