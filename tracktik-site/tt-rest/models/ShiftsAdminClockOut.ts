/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TextArea } from './TextArea';

export type ShiftsAdminClockOut = {
    /**
     * Note
     */
    note?: TextArea;
    /**
     * Time for Clock-out
     */
    endTimeType: ShiftsAdminClockOut.endTimeType;
}

export namespace ShiftsAdminClockOut {

    /**
     * Time for Clock-out
     */
    export enum endTimeType {
        NOW = 'NOW',
        SHIFT_END = 'SHIFT_END',
    }


}