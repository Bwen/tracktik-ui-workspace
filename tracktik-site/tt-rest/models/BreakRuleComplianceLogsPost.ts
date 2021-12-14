/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { BreakRulesPost } from './BreakRulesPost';
import type { Integer } from './Integer';
import type { Minutes } from './Minutes';
import type { ShiftsId } from './ShiftsId';

export type BreakRuleComplianceLogsPost = {
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Break Rule
     */
    breakRule?: BreakRulesPost;
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
    totalSecondsStatus?: BreakRuleComplianceLogsPost.totalSecondsStatus;
    /**
     * Total Minutes Status
     */
    totalMinutesStatus?: BreakRuleComplianceLogsPost.totalMinutesStatus;
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
    totalBreaksStatus?: BreakRuleComplianceLogsPost.totalBreaksStatus;
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
}

export namespace BreakRuleComplianceLogsPost {

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