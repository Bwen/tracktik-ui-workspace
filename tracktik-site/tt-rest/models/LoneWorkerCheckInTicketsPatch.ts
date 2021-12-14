/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentsId } from './CommentsId';
import type { EmployeesId } from './EmployeesId';
import type { ShiftsId } from './ShiftsId';

export type LoneWorkerCheckInTicketsPatch = {
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Status
     */
    status?: LoneWorkerCheckInTicketsPatch.status;
    /**
     * Comments
     */
    comments?: Array<CommentsId>;
}

export namespace LoneWorkerCheckInTicketsPatch {

    /**
     * Status
     */
    export enum status {
        CLOSED = 'CLOSED',
        OPEN = 'OPEN',
        PENDING = 'PENDING',
    }


}