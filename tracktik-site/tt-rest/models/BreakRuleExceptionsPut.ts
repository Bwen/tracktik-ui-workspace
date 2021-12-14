/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AppLicensesId } from './AppLicensesId';
import type { BreakRuleConditionsId } from './BreakRuleConditionsId';
import type { BreakRulesId } from './BreakRulesId';
import type { BreakSessionsId } from './BreakSessionsId';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { WorkSessionsId } from './WorkSessionsId';

export type BreakRuleExceptionsPut = {
    /**
     * Type of the exception
     */
    type: BreakRuleExceptionsPut.type;
    /**
     * Type of the reason
     */
    reasonType: BreakRuleExceptionsPut.reasonType;
    /**
     * The time when the user adds the exception
     */
    actionDateTime?: DateTime;
    /**
     * The user comment
     */
    comment: Label;
    /**
     * The summary of one or all activitie(s) in the shift
     */
    summary: JSON;
    /**
     * The employee who raises this exception
     */
    employee: EmployeesId;
    /**
     * The shift where the employee is assigned
     */
    shift?: ShiftsId;
    /**
     * The work session
     */
    workSession: WorkSessionsId;
    /**
     * The break session
     */
    breakSession?: BreakSessionsId;
    /**
     * The account where the exception occured
     */
    account: AccountsId;
    /**
     * The break rule
     */
    breakRule: BreakRulesId;
    /**
     * The break rule condition
     */
    condition?: BreakRuleConditionsId;
    /**
     * The user mobile device license
     */
    device?: AppLicensesId;
    /**
     * The acccount of the user mobile device license
     */
    deviceAccount?: AccountsId;
}

export namespace BreakRuleExceptionsPut {

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