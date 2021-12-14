/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';

export type WorkSessionsAddBreak = {
    /**
     * The type of break the employee is taking
     */
    breakType: WorkSessionsAddBreak.breakType;
    /**
     * Start Time
     */
    startTime: Label;
    /**
     * End Time
     */
    endTime?: Label;
}

export namespace WorkSessionsAddBreak {

    /**
     * The type of break the employee is taking
     */
    export enum breakType {
        BREAK = 'BREAK',
        MEAL = 'MEAL',
        REST = 'REST',
    }


}