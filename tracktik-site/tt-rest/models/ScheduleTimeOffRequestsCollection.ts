/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ScheduleTimeOffRequestTypesId } from './ScheduleTimeOffRequestTypesId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ScheduleTimeOffRequestsCollection = {
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
    status?: ScheduleTimeOffRequestsCollection.status;
    /**
     * The reason of the review's result
     */
    reason?: Label;
    /**
     * Reviewer
     */
    reviewer?: EmployeesId;
    /**
     * Date & Time of the Review
     */
    reviewedOn?: TimeStampDate;
    /**
     * This field was deprecated in favor of `reviewedOn`
     */
    reviewedDateTime?: TimeStampDate;
    /**
     * Type
     */
    type?: ScheduleTimeOffRequestTypesId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * This field was deprecated in favor of `masterAccount`
     */
    account?: AccountsId;
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
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace ScheduleTimeOffRequestsCollection {

    /**
     * Status
     */
    export enum status {
        REQUESTED = 'REQUESTED',
        APPROVED = 'APPROVED',
        DENIED = 'DENIED',
    }


}