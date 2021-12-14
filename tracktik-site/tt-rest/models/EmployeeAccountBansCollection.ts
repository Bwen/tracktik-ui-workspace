/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type EmployeeAccountBansCollection = {
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Reason
     */
    reason?: Label;
    /**
     * Start Date
     */
    startDate?: Date;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}