/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type SystemUsageLogsItem = {
    /**
     * Type
     */
    type?: Label;
    /**
     * Unit
     */
    unit?: Decimal;
    /**
     * Log ID
     */
    logId?: Label;
    /**
     * Time
     */
    occurredOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `occurredOn`
     */
    time?: TimeStampNumber;
    /**
     * Data
     */
    data?: Label;
    /**
     * Date time
     */
    logDate?: Date;
    /**
     * This field was deprecated in favor of `logDate`
     */
    date?: Date;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    region?: (AccountsId | AccountsItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
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