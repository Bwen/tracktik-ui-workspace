/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Currency } from './Currency';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { DepartmentsId } from './DepartmentsId';
import type { DepartmentsItem } from './DepartmentsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollCodesItem } from './PayrollCodesItem';
import type { PayrollPayrunsId } from './PayrollPayrunsId';
import type { PayrollPayrunsItem } from './PayrollPayrunsItem';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { Uri } from './Uri';

export type PayrollPayrunItemsItem = {
    /**
     * Payrun: ID of the resource by default OR *on demand* JSON object of type [PayrollPayruns](#operation/getOnePayrollPayruns)
     */
    payrun?: (PayrollPayrunsId | PayrollPayrunsItem);
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Department: ID of the resource by default OR *on demand* JSON object of type [Departments](#operation/getOneDepartments)
     */
    department?: (DepartmentsId | DepartmentsItem);
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * This field was deprecated in favor of `customPayCode`: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    payrollCode?: (PayrollCodesId | PayrollCodesItem);
    /**
     * Custom Pay Code used as a label: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    customPayCode?: (PayrollCodesId | PayrollCodesItem);
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