/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LeavePolicyPaySettingsId } from './LeavePolicyPaySettingsId';
import type { LeavePolicyPaySettingsItem } from './LeavePolicyPaySettingsItem';
import type { LeaveTypesId } from './LeaveTypesId';
import type { LeaveTypesItem } from './LeaveTypesItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type LeavePoliciesItem = {
    /**
     * The name of the leave policy
     */
    name?: Label;
    /**
     * Time unit for displaying a leave (DAYS or HOURS)
     */
    displayLeaveIn?: LeavePoliciesItem.displayLeaveIn;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Leave Type: ID of the resource by default OR *on demand* JSON object of type LeaveTypes
     */
    leaveType?: (LeaveTypesId | LeaveTypesItem);
    /**
     * Pay Settings: ID of the resource by default OR *on demand* JSON object of type LeavePolicyPaySettings
     */
    paySettings?: (LeavePolicyPaySettingsId | LeavePolicyPaySettingsItem);
    /**
     * Status of Leave Policy, active or archived
     */
    status?: LeavePoliciesItem.status;
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

export namespace LeavePoliciesItem {

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