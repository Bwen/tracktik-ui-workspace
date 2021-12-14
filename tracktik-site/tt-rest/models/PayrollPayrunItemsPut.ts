/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Currency } from './Currency';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { DepartmentsId } from './DepartmentsId';
import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollPayrunsId } from './PayrollPayrunsId';
import type { ShiftsId } from './ShiftsId';

export type PayrollPayrunItemsPut = {
    /**
     * Payrun
     */
    payrun?: PayrollPayrunsId;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Department
     */
    department?: DepartmentsId;
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * This field was deprecated in favor of `customPayCode`
     */
    payrollCode?: PayrollCodesId;
    /**
     * Custom Pay Code used as a label
     */
    customPayCode?: PayrollCodesId;
    /**
     * Pay Code
     */
    payrollCodeLabel?: Label;
    /**
     * Quantity
     */
    quantity?: Decimal;
    /**
     * Rate
     */
    rate?: CurrencyRate;
    /**
     * Total
     */
    total?: Currency;
    /**
     * Origin Type
     */
    originType?: Label;
    /**
     * Origine Type Item ID
     */
    originTypeItemId?: Label;
    /**
     * Label
     */
    label?: Label;
    /**
     * Notes
     */
    notes?: Label;
    /**
     * Locked
     */
    locked?: Label;
    /**
     * Shift Fragment Date Start
     */
    shiftFragmentDateStart?: Label;
    /**
     * Shift Fragment Date End
     */
    shiftFragmentDateEnd?: Label;
    /**
     * Expense Date
     */
    expenseDate?: Date;
    /**
     * Employee Type
     */
    employeeType?: Label;
    /**
     * Company Core
     */
    companyCode?: Label;
    /**
     * Base Rate
     */
    baseRate?: CurrencyRate;
    /**
     * Pay Rate Level
     */
    payRateLevel?: Label;
    /**
     * Qualifier
     */
    qualifier?: Label;
    /**
     * Whether this Payrun Item has Pay Code that is labeled
     */
    labeledCode?: Label;
}