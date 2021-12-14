/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { EmployeesId } from './EmployeesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type EmployeeAccountAssignmentsPost = {
    /**
     * Employee
     */
    employee: EmployeesId;
    /**
     * Account
     */
    account: AccountsId;
    /**
     * Active
     */
    active: Boolean;
    /**
     * Pay Rate
     */
    payRate?: CurrencyRate;
    /**
     * Start Date
     */
    startedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDate?: TimeStampNumber;
    /**
     * End Date
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endDate?: TimeStampNumber;
}