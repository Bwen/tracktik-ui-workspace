/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShiftsStartBreak = {
    /**
     * The type of break the employee is taking
     */
    breakType: ShiftsStartBreak.breakType;
    /**
     * The application or device being used to perform the action
     */
    startMethod: ShiftsStartBreak.startMethod;
}

export namespace ShiftsStartBreak {

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