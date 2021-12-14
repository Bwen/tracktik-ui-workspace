/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LeaveTypesId } from './LeaveTypesId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type LeaveRequestsCollection = {
    /**
     * Leave Request Reason
     */
    reason?: TextArea;
    /**
     * The first date when the employee is not available
     */
    startedOn?: TimeStampDate;
    /**
     * The last date when the employee is not available
     */
    endedOn?: TimeStampDate;
    /**
     * Status of leave request
     */
    status?: LeaveRequestsCollection.status;
    /**
     * Leave Type
     */
    leaveType?: LeaveTypesId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Reviewer
     */
    reviewer?: EmployeesId;
    /**
     * The date the request was processed
     */
    reviewedOn?: TimeStampDate;
    /**
     * The reason of the review's result
     */
    reviewReason?: Label;
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

export namespace LeaveRequestsCollection {

    /**
     * Status of leave request
     */
    export enum status {
        PENDING = 'PENDING',
        APPROVED = 'APPROVED',
        DECLINED = 'DECLINED',
        CANCELLED = 'CANCELLED',
    }


}