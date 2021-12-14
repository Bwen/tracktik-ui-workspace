/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Boolean } from './Boolean';
import type { BreakRulesId } from './BreakRulesId';
import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionBillingSettingsCollection } from './PositionBillingSettingsCollection';
import type { PositionPayrollSettingsCollection } from './PositionPayrollSettingsCollection';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PositionsCollection = {
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
    status?: PositionsCollection.status;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Contract
     */
    contract?: ContractsId;
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
     * Break Rule
     */
    breakRule?: BreakRulesId;
    /**
     * Billing Settings
     */
    billingSetting?: PositionBillingSettingsCollection;
    /**
     * Payroll Settings
     */
    payrollSetting?: PositionPayrollSettingsCollection;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
    /**
     * Pay Code used as a label
     */
    payCodeLabel?: PayrollCodesId;
    /**
     * System ID
     */
    id?: Integer;
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
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace PositionsCollection {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }


}