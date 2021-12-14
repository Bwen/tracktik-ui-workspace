/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { TimeStampNumber } from './TimeStampNumber';

export type EventActivitiesCollection = {
    /**
     * User
     */
    user?: EmployeesId;
    /**
     * Type
     */
    type?: string;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Timestamp (Unix)
     */
    createdOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `createdOn`
     */
    timeStamp?: TimeStampNumber;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}