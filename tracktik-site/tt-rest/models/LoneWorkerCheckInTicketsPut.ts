/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentsId } from './CommentsId';
import type { EmployeesId } from './EmployeesId';
import type { ShiftsId } from './ShiftsId';

export type LoneWorkerCheckInTicketsPut = {
    /**
     * Shift
     */
    shift: ShiftsId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Status
     */
    status?: LoneWorkerCheckInTicketsPut.status;
    /**
     * Comments
     */
    comments?: Array<CommentsId>;
}

export namespace LoneWorkerCheckInTicketsPut {

    /**
     * Status
     */
    export enum status {
        CLOSED = 'CLOSED',
        OPEN = 'OPEN',
        PENDING = 'PENDING',
    }


}