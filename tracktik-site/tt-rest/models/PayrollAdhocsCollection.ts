/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { TextArea } from './TextArea';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type PayrollAdhocsCollection = {
    /**
     * Include in Weighted OT Calculation
     */
    isOvertimeWeighted?: boolean;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Payroll Pay Code
     */
    payrollCode?: PayrollCodesId;
    /**
     * Memo
     */
    memo?: TextArea;
    /**
     * Event Date
     */
    eventDate?: Date;
    /**
     * Quantity
     */
    quantity?: Decimal;
    /**
     * Rate
     */
    rate?: CurrencyRate;
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