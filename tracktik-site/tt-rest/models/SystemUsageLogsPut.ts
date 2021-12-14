/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type SystemUsageLogsPut = {
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
     * Region
     */
    region: AccountsId;
    /**
     * Employee
     */
    employee: EmployeesId;
}