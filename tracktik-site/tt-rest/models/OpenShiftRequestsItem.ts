/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type OpenShiftRequestsItem = {
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * Requester: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    requester?: (EmployeesId | EmployeesItem);
    /**
     * If the Open Shift request is pending or cancelled
     */
    status?: OpenShiftRequestsItem.status;
    /**
     * Reason for the current status
     */
    statusReason?: OpenShiftRequestsItem.statusReason;
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

export namespace OpenShiftRequestsItem {

    /**
     * If the Open Shift request is pending or cancelled
     */
    export enum status {
        NEW = 'NEW',
        APPROVED = 'APPROVED',
        DECLINED = 'DECLINED',
        CLOSED = 'CLOSED',
    }

    /**
     * Reason for the current status
     */
    export enum statusReason {
        USER_CANCELLED = 'USER-CANCELLED',
        ADMIN_APPROVED = 'ADMIN-APPROVED',
        ADMIN_DECLINED = 'ADMIN-DECLINED',
        USER_UNASSIGNED = 'USER-UNASSIGNED',
        USER_TERMINATED = 'USER-TERMINATED',
        SITE_CLOSED = 'SITE-CLOSED',
        SHIFT_CHANGED = 'SHIFT-CHANGED',
        SHIFT_CANCELLED = 'SHIFT-CANCELLED',
        SHIFT_EXPIRED = 'SHIFT-EXPIRED',
        OTHER_REQUEST_APPROVED = 'OTHER-REQUEST-APPROVED',
    }


}