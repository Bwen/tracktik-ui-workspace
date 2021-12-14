/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TimeStampNumber } from './TimeStampNumber';

export type BreakSessionsPatch = {
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
    initiationMethod?: BreakSessionsPatch.initiationMethod;
    /**
     * Termination Method
     */
    terminationMethod?: BreakSessionsPatch.terminationMethod;
    /**
     * Status
     */
    status?: BreakSessionsPatch.status;
    /**
     * Type
     */
    type?: BreakSessionsPatch.type;
}

export namespace BreakSessionsPatch {

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
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
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