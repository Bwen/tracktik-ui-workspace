/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type LoneWorkerCheckInTicketsCollection = {
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
    status?: LoneWorkerCheckInTicketsCollection.status;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace LoneWorkerCheckInTicketsCollection {

    /**
     * Status
     */
    export enum status {
        CLOSED = 'CLOSED',
        OPEN = 'OPEN',
        PENDING = 'PENDING',
    }


}