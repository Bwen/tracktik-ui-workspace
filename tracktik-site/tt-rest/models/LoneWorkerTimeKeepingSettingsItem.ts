/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Boolean } from './Boolean';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LoneWorkerPhonesItem } from './LoneWorkerPhonesItem';
import type { Minutes } from './Minutes';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type LoneWorkerTimeKeepingSettingsItem = {
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
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
     * Phone numbers that the guards should use to check-in.: *On demand*. List of JSON objects of type [LoneWorkerPhones](#operation/getOneLoneWorkerPhones)
     */
    loneWorkerPhones?: Array<LoneWorkerPhonesItem>;
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