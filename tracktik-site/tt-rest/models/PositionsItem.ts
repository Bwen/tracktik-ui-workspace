/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Boolean } from './Boolean';
import type { BreakRulesId } from './BreakRulesId';
import type { BreakRulesItem } from './BreakRulesItem';
import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollCodesItem } from './PayrollCodesItem';
import type { PositionBillingSettingsId } from './PositionBillingSettingsId';
import type { PositionBillingSettingsItem } from './PositionBillingSettingsItem';
import type { PositionExpenseReimbursementsItem } from './PositionExpenseReimbursementsItem';
import type { PositionPayrollSettingsId } from './PositionPayrollSettingsId';
import type { PositionPayrollSettingsItem } from './PositionPayrollSettingsItem';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PositionsItem = {
    /**
     * Name
     */
    name?: Label;
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
    status?: PositionsItem.status;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
    /**
     * If there is no contract the position is non billable
     */
    nonBillable?: Boolean;
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
     * Break Rule: ID of the resource by default OR *on demand* JSON object of type [BreakRules](#operation/getOneBreakRules)
     */
    breakRule?: (BreakRulesId | BreakRulesItem);
    /**
     * Billing Settings: ID of the resource by default OR *on demand* JSON object of type PositionBillingSettings
     */
    billingSetting?: (PositionBillingSettingsId | PositionBillingSettingsItem);
    /**
     * Payroll Settings: ID of the resource by default OR *on demand* JSON object of type PositionPayrollSettings
     */
    payrollSetting?: (PositionPayrollSettingsId | PositionPayrollSettingsItem);
    /**
     * Tax Class: ID of the resource by default OR *on demand* JSON object of type [TaxClasses](#operation/getOneTaxClasses)
     */
    taxClass?: (TaxClassesId | TaxClassesItem);
    /**
     * Pay Code used as a label: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    payCodeLabel?: (PayrollCodesId | PayrollCodesItem);
    /**
     * Expense Reimbursements: *On demand*. List of JSON objects of type [PositionExpenseReimbursements](#operation/getOnePositionExpenseReimbursements)
     */
    expenseReimbursements?: Array<PositionExpenseReimbursementsItem>;
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
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace PositionsItem {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }


}