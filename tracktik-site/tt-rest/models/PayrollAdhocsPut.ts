/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { PayrollCodesId } from './PayrollCodesId';
import type { TextArea } from './TextArea';

export type PayrollAdhocsPut = {
    /**
     * Include in Weighted OT Calculation
     */
    isOvertimeWeighted: boolean;
    /**
     * Account
     */
    account: AccountsId;
    /**
     * Employee
     */
    employee: EmployeesId;
    /**
     * Payroll Pay Code
     */
    payrollCode: PayrollCodesId;
    /**
     * Memo
     */
    memo?: TextArea;
    /**
     * Event Date
     */
    eventDate: Date;
    /**
     * Quantity
     */
    quantity: Decimal;
    /**
     * Rate
     */
    rate: CurrencyRate;
}