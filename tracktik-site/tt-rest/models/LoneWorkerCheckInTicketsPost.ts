/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentsId } from './CommentsId';
import type { EmployeesId } from './EmployeesId';
import type { ShiftsId } from './ShiftsId';

export type LoneWorkerCheckInTicketsPost = {
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
    status?: LoneWorkerCheckInTicketsPost.status;
    /**
     * Comments
     */
    comments?: Array<CommentsId>;
}

export namespace LoneWorkerCheckInTicketsPost {

    /**
     * Status
     */
    export enum status {
        CLOSED = 'CLOSED',
        OPEN = 'OPEN',
        PENDING = 'PENDING',
    }


}