/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkSessionsClockOut = {
    /**
     * Clock-out method
     */
    clockOutMethod?: WorkSessionsClockOut.clockOutMethod;
    /**
     * End Date Time
     */
    endDateTime?: any;
}

export namespace WorkSessionsClockOut {

    /**
     * Clock-out method
     */
    export enum clockOutMethod {
        LIVE = 'LIVE',
        DELAYED = 'DELAYED',
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BREAK = 'BREAK',
        BATCH = 'BATCH',
        KIOSK = 'KIOSK',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }


}