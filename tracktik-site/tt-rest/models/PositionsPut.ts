/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRulesId } from './BreakRulesId';
import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionBillingSettingsPut } from './PositionBillingSettingsPut';
import type { PositionExpenseReimbursementsId } from './PositionExpenseReimbursementsId';
import type { PositionPayrollSettingsPut } from './PositionPayrollSettingsPut';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';

export type PositionsPut = {
    /**
     * Name
     */
    name: Label;
    /**
     * Position Description
     */
    description?: TextArea;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Status
     */
    status?: PositionsPut.status;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Memo that will be displayed on the schedule
     */
    shiftMemo?: Label;
    /**
     * Begin Date
     */
    beginDate?: Date;
    /**
     * EndDate
     */
    endDate?: Date;
    /**
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * Billing Settings
     */
    billingSetting?: PositionBillingSettingsPut;
    /**
     * Payroll Settings
     */
    payrollSetting?: PositionPayrollSettingsPut;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
    /**
     * Pay Code used as a label
     */
    payCodeLabel?: PayrollCodesId;
    /**
     * Expense Reimbursements
     */
    expenseReimbursements?: Array<PositionExpenseReimbursementsId>;
}

export namespace PositionsPut {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }


}