/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LeaveTypesId } from './LeaveTypesId';
import type { LeaveTypesItem } from './LeaveTypesItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type LeaveRequestsItem = {
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
    status?: LeaveRequestsItem.status;
    /**
     * Leave Type: ID of the resource by default OR *on demand* JSON object of type LeaveTypes
     */
    leaveType?: (LeaveTypesId | LeaveTypesItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Reviewer: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    reviewer?: (EmployeesId | EmployeesItem);
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
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace LeaveRequestsItem {

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