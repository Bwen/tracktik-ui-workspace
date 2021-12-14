/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkSessionsStartBreak = {
    /**
     * The type of break the employee is taking
     */
    breakType: WorkSessionsStartBreak.breakType;
    /**
     * The application or device being used to perform the action
     */
    startMethod: WorkSessionsStartBreak.startMethod;
}

export namespace WorkSessionsStartBreak {

    /**
     * The type of break the employee is taking
     */
    export enum breakType {
        BREAK = 'BREAK',
        MEAL = 'MEAL',
        REST = 'REST',
    }

    /**
     * The application or device being used to perform the action
     */
    export enum startMethod {
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