/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShiftsClockOut = {
    /**
     * End method
     */
    endMethod: ShiftsClockOut.endMethod;
    /**
     * Note
     */
    note?: string;
}

export namespace ShiftsClockOut {

    /**
     * End method
     */
    export enum endMethod {
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BATCH = 'BATCH',
        KIOSK_APP = 'KIOSK_APP',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }


}