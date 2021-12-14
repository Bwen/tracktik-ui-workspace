/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { TextArea } from './TextArea';

export type ShiftsReplace = {
    /**
     * Replace with
     */
    user: EmployeesId;
    /**
     * Note
     */
    note?: TextArea;
    /**
     * Acknowledge Shift
     */
    acknowledge?: boolean;
    /**
     * Notify
     */
    notify?: boolean;
}