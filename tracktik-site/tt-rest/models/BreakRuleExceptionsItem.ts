/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { AppLicensesId } from './AppLicensesId';
import type { AppLicensesItem } from './AppLicensesItem';
import type { BreakRuleConditionsId } from './BreakRuleConditionsId';
import type { BreakRuleConditionsItem } from './BreakRuleConditionsItem';
import type { BreakRulesId } from './BreakRulesId';
import type { BreakRulesItem } from './BreakRulesItem';
import type { BreakSessionsId } from './BreakSessionsId';
import type { BreakSessionsItem } from './BreakSessionsItem';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { WorkSessionsId } from './WorkSessionsId';
import type { WorkSessionsItem } from './WorkSessionsItem';

export type BreakRuleExceptionsItem = {
    /**
     * Type of the exception
     */
    type?: BreakRuleExceptionsItem.type;
    /**
     * Type of the reason
     */
    reasonType?: BreakRuleExceptionsItem.reasonType;
    /**
     * The time when the user adds the exception
     */
    actionDateTime?: DateTime;
    /**
     * The user comment
     */
    comment?: Label;
    /**
     * The summary of one or all activitie(s) in the shift
     */
    summary?: JSON;
    /**
     * The employee who raises this exception: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * The shift where the employee is assigned: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * The work session: ID of the resource by default OR *on demand* JSON object of type [WorkSessions](#operation/getOneWorkSessions)
     */
    workSession?: (WorkSessionsId | WorkSessionsItem);
    /**
     * The break session: ID of the resource by default OR *on demand* JSON object of type [BreakSessions](#operation/getOneBreakSessions)
     */
    breakSession?: (BreakSessionsId | BreakSessionsItem);
    /**
     * The account where the exception occured: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * The break rule: ID of the resource by default OR *on demand* JSON object of type [BreakRules](#operation/getOneBreakRules)
     */
    breakRule?: (BreakRulesId | BreakRulesItem);
    /**
     * The break rule condition: ID of the resource by default OR *on demand* JSON object of type [BreakRuleConditions](#operation/getOneBreakRuleConditions)
     */
    condition?: (BreakRuleConditionsId | BreakRuleConditionsItem);
    /**
     * The user mobile device license: ID of the resource by default OR *on demand* JSON object of type [AppLicenses](#operation/getOneAppLicenses)
     */
    device?: (AppLicensesId | AppLicensesItem);
    /**
     * The acccount of the user mobile device license: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    deviceAccount?: (AccountsId | AccountsItem);
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
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace BreakRuleExceptionsItem {

    /**
     * Type of the exception
     */
    export enum type {
        WAIVE = 'WAIVE',
        SUMMARY = 'SUMMARY',
        INVOLUNTARY = 'INVOLUNTARY',
        VOLUNTARY = 'VOLUNTARY',
        EMERGENCY = 'EMERGENCY',
    }

    /**
     * Type of the reason
     */
    export enum reasonType {
        SITE_ISSUE = 'SITE_ISSUE',
        SITE_NOT_RELATED = 'SITE_NOT_RELATED',
        OTHER_INVOLUNTARY = 'OTHER_INVOLUNTARY',
    }


}