/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type BreakSessionsPost = {
    /**
     * Start Date & Time
     */
    startedOn?: TimeStampNumber;
    /**
     * End Date & Time
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endDateTime?: TimeStampNumber;
    /**
     * Initiation Method
     */
    initiationMethod?: BreakSessionsPost.initiationMethod;
    /**
     * Termination Method
     */
    terminationMethod?: BreakSessionsPost.terminationMethod;
    /**
     * Type
     */
    type?: BreakSessionsPost.type;
    /**
     * The employee linked to the break session
     */
    employee?: EmployeesId;
    /**
     * Account
     */
    account?: AccountsId;
}

export namespace BreakSessionsPost {

    /**
     * Initiation Method
     */
    export enum initiationMethod {
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

    /**
     * Termination Method
     */
    export enum terminationMethod {
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

    /**
     * Type
     */
    export enum type {
        BREAK = 'BREAK',
        MEAL = 'MEAL',
        REST = 'REST',
    }


}