/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type LoneWorkerPhoneCallsCollection = {
    /**
     * From
     */
    fromNumber?: Label;
    /**
     * To
     */
    toNumber?: Label;
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Employee
     */
    user?: EmployeesId;
    /**
     * Account
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
}