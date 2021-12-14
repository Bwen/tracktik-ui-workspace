/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TextArea } from './TextArea';

export type ShiftsAdminClockIn = {
    /**
     * Time for Clock-in
     */
    startTimeType: ShiftsAdminClockIn.startTimeType;
    /**
     * Note
     */
    note?: TextArea;
}

export namespace ShiftsAdminClockIn {

    /**
     * Time for Clock-in
     */
    export enum startTimeType {
        SHIFT_START = 'SHIFT_START',
        NOW = 'NOW',
    }


}