/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type EmployeeAccountAssignmentsItem = {
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Active
     */
    active?: Boolean;
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
}