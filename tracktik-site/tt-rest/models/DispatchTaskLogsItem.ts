/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { DispatchTasksItem } from './DispatchTasksItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { TimeStampNumber } from './TimeStampNumber';

export type DispatchTaskLogsItem = {
    /**
     * Status
     */
    status?: DispatchTaskLogsItem.status;
    /**
     * Event time
     */
    time?: TimeStampNumber;
    /**
     * Dispatch-Task: ID of the resource by default OR *on demand* JSON object of type [DispatchTasks](#operation/getOneDispatchTasks)
     */
    dispatchTask?: (DispatchTasksId | DispatchTasksItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * System ID
     */
    id?: Integer;
}

export namespace DispatchTaskLogsItem {

    /**
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }


}