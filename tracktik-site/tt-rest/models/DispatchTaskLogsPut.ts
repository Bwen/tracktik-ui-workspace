/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { EmployeesId } from './EmployeesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type DispatchTaskLogsPut = {
    /**
     * Status
     */
    status?: DispatchTaskLogsPut.status;
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

export namespace DispatchTaskLogsPut {

    /**
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }


}