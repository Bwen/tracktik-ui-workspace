/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkSessionsEndBreak = {
    /**
     * The application or device being used to perform the action
     */
    endMethod: WorkSessionsEndBreak.endMethod;
}

export namespace WorkSessionsEndBreak {

    /**
     * The application or device being used to perform the action
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