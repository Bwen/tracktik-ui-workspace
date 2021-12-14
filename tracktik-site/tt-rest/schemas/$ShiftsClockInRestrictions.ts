/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShiftsClockInRestrictions = {
    properties: {
        startGracePeriodInMinutes: {
    type: 'number',
},
        lateAlertInMinutes: {
    type: 'number',
},
        geoFenceRestrictions: {
    properties: {
    },
},
        canClockInOnShiftApp: {
    type: 'boolean',
},
    },
} as const;