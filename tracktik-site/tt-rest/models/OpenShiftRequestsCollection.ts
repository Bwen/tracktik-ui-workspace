/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type OpenShiftRequestsCollection = {
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Requester
     */
    requester?: EmployeesId;
    /**
     * If the Open Shift request is pending or cancelled
     */
    status?: OpenShiftRequestsCollection.status;
    /**
     * Reason for the current status
     */
    statusReason?: OpenShiftRequestsCollection.statusReason;
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

export namespace OpenShiftRequestsCollection {

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