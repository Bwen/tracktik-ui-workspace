/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { BreakRulesId } from './BreakRulesId';
import type { BreakRulesItem } from './BreakRulesItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type BreakRuleComplianceLogsItem = {
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Break Rule: ID of the resource by default OR *on demand* JSON object of type [BreakRules](#operation/getOneBreakRules)
     */
    breakRule?: (BreakRulesId | BreakRulesItem);
    /**
     * Total Seconds Expected
     */
    totalSecondsExpected?: Integer;
    /**
     * Total Minutes Expected
     */
    totalMinutesExpected?: Minutes;
    /**
     * Total Seconds Actual
     */
    totalSecondsActual?: Integer;
    /**
     * Total Minutes Actual
     */
    totalMinutesActual?: Minutes;
    /**
     * Total Seconds Status
     */
    totalSecondsStatus?: BreakRuleComplianceLogsItem.totalSecondsStatus;
    /**
     * Total Minutes Status
     */
    totalMinutesStatus?: BreakRuleComplianceLogsItem.totalMinutesStatus;
    /**
     * Total Breaks Expected
     */
    totalBreaksExpected?: Integer;
    /**
     * Total Breaks Actual
     */
    totalBreaksActual?: Integer;
    /**
     * Total Breaks Status
     */
    totalBreaksStatus?: BreakRuleComplianceLogsItem.totalBreaksStatus;
    /**
     * Compliant Count
     */
    compliantCount?: Integer;
    /**
     * Late Count
     */
    lateCount?: Integer;
    /**
     * Early Count
     */
    earlyCount?: Integer;
    /**
     * Missed Count
     */
    missedCount?: Integer;
    /**
     * Unscheduled Count
     */
    unscheduledCount?: Integer;
    /**
     * Too Long Count
     */
    tooLongCount?: Integer;
    /**
     * Too Short Count
     */
    tooShortCount?: Integer;
    /**
     * Meal Seconds Expected
     */
    mealSecondsExpected?: Integer;
    /**
     * Meal Minutes Expected
     */
    mealMinutesExpected?: Minutes;
    /**
     * Meal Seconds Actual
     */
    mealSecondsActual?: Integer;
    /**
     * Meal Minutes Actual
     */
    mealMinutesActual?: Minutes;
    /**
     * Meal Late Count
     */
    mealLateCount?: Integer;
    /**
     * Meal Early Count
     */
    mealEarlyCount?: Integer;
    /**
     * Meal Missed Count
     */
    mealMissedCount?: Integer;
    /**
     * Meal Unscheduled Count
     */
    mealUnscheduledCount?: Integer;
    /**
     * Meal Too Long Count
     */
    mealTooLongCount?: Integer;
    /**
     * Meal Too Short Count
     */
    mealTooShortCount?: Integer;
    /**
     * Rest Seconds Expected
     */
    restSecondsExpected?: Integer;
    /**
     * Rest Minutes Expected
     */
    restMinutesExpected?: Minutes;
    /**
     * Rest Seconds Actual
     */
    restSecondsActual?: Integer;
    /**
     * Rest Minutes Actual
     */
    restMinutesActual?: Minutes;
    /**
     * Rest Late Count
     */
    restLateCount?: Integer;
    /**
     * Rest Early Count
     */
    restEarlyCount?: Integer;
    /**
     * Rest Missed Count
     */
    restMissedCount?: Integer;
    /**
     * Rest Unscheduled Count
     */
    restUnscheduledCount?: Integer;
    /**
     * Rest Too Long Count
     */
    restTooLongCount?: Integer;
    /**
     * Rest Too Short Count
     */
    restTooShortCount?: Integer;
    /**
     * Interrupted Rest Break Count
     */
    restInterruptedCount?: Integer;
    /**
     * Interrupted Meal Break Count
     */
    mealInterruptedCount?: Integer;
    /**
     * Whether or not log's values are rounded down to the minute
     */
    rounded?: Integer;
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

export namespace BreakRuleComplianceLogsItem {

    /**
     * Total Seconds Status
     */
    export enum totalSecondsStatus {
        LESS = 'LESS',
        GREATER = 'GREATER',
        EQUAL = 'EQUAL',
    }

    /**
     * Total Minutes Status
     */
    export enum totalMinutesStatus {
        LESS = 'LESS',
        GREATER = 'GREATER',
        EQUAL = 'EQUAL',
    }

    /**
     * Total Breaks Status
     */
    export enum totalBreaksStatus {
        LESS = 'LESS',
        GREATER = 'GREATER',
        EQUAL = 'EQUAL',
    }


}