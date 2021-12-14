/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type LoneWorkerTimeKeepingSettingsCollection = {
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Use this option to enable lone worker check-ins.
     */
    checkInEnabled?: Boolean;
    /**
     * Restricts check ins to specific phone numbers. When set to off, guards can check in from any phone number
     */
    restrictPhoneNumber?: Boolean;
    /**
     * Number of minutes after which a check in is considered late.
     */
    lateAfterMinutes?: Minutes;
    /**
     * Have the guards receive a call at check in time.
     */
    automaticCheckInCall?: Boolean;
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