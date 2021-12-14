/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';

export type EmployeeAccountBansPut = {
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
}