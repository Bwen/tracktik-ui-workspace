/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LeavePolicyPaySettingsCollection } from './LeavePolicyPaySettingsCollection';
import type { LeaveTypesId } from './LeaveTypesId';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type LeavePoliciesCollection = {
    /**
     * The name of the leave policy
     */
    name?: Label;
    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    displayLeaveIn?: LeavePoliciesCollection.displayLeaveIn;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Leave Type
     */
    leaveType?: LeaveTypesId;
    /**
     * Pay Settings
     */
    paySettings?: LeavePolicyPaySettingsCollection;
    /**
     * Status of Leave Policy, active or archived
     */
    status?: LeavePoliciesCollection.status;
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

export namespace LeavePoliciesCollection {

    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    export enum displayLeaveIn {
        DAYS = 'DAYS',
        HOURS = 'HOURS',
    }

    /**
     * Status of Leave Policy, active or archived
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }


}