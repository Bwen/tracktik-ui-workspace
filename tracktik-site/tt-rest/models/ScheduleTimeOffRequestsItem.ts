/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ScheduleTimeOffRequestTypesId } from './ScheduleTimeOffRequestTypesId';
import type { ScheduleTimeOffRequestTypesItem } from './ScheduleTimeOffRequestTypesItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ScheduleTimeOffRequestsItem = {
    /**
     * The description of the schedule off period
     */
    description?: Label;
    /**
     * The start date time of the schedule off period
     */
    startOffPeriodDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `startOffPeriodDateTime`
     */
    startOffPeriod?: TimeStampDate;
    /**
     * The end date time of the schedule off period
     */
    endOffPeriodDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `endOffPeriodDateTime`
     */
    endOffPeriod?: TimeStampDate;
    /**
     * Status
     */
    status?: ScheduleTimeOffRequestsItem.status;
    /**
     * The reason of the review's result
     */
    reason?: Label;
    /**
     * Reviewer: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    reviewer?: (EmployeesId | EmployeesItem);
    /**
     * Date & Time of the Review
     */
    reviewedOn?: TimeStampDate;
    /**
     * This field was deprecated in favor of `reviewedOn`
     */
    reviewedDateTime?: TimeStampDate;
    /**
     * Type: ID of the resource by default OR *on demand* JSON object of type [ScheduleTimeOffRequestTypes](#operation/getOneScheduleTimeOffRequestTypes)
     */
    type?: (ScheduleTimeOffRequestTypesId | ScheduleTimeOffRequestTypesItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * This field was deprecated in favor of `masterAccount`: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
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
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace ScheduleTimeOffRequestsItem {

    /**
     * Status
     */
    export enum status {
        REQUESTED = 'REQUESTED',
        APPROVED = 'APPROVED',
        DENIED = 'DENIED',
    }


}