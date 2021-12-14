/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { BreakRulesId } from './BreakRulesId';
import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionBillingSettingsPost } from './PositionBillingSettingsPost';
import type { PositionExpenseReimbursementsId } from './PositionExpenseReimbursementsId';
import type { PositionPayrollSettingsPost } from './PositionPayrollSettingsPost';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';

export type PositionsPost = {
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
    status?: PositionsPost.status;
    /**
     * Account
     */
    account: AccountsId;
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
    billingSetting?: PositionBillingSettingsPost;
    /**
     * Payroll Settings
     */
    payrollSetting?: PositionPayrollSettingsPost;
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

export namespace PositionsPost {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }


}