/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { EmployeesId } from './EmployeesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type DispatchTaskLogsPatch = {
    /**
     * Status
     */
    status?: DispatchTaskLogsPatch.status;
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
}

export namespace DispatchTaskLogsPatch {

    /**
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }


}