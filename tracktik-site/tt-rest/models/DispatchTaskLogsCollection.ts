/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { TimeStampNumber } from './TimeStampNumber';

export type DispatchTaskLogsCollection = {
    /**
     * Status
     */
    status?: DispatchTaskLogsCollection.status;
    /**
     * Event time
     */
    time?: TimeStampNumber;
    /**
     * Dispatch-Task
     */
    dispatchTask?: DispatchTasksId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * System ID
     */
    id?: Integer;
}

export namespace DispatchTaskLogsCollection {

    /**
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }


}