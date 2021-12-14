/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BreakRuleConditionsItem } from './BreakRuleConditionsItem';

/**
 * Display the break compliance information
 */
export type ShiftsBreakCompliance = {
    /**
     * The list of break grace periods from settings
     */
    breakGracePeriods?: {
/**
 * The authorized grace period in minutes before start break
 */
gracePeriodStart?: number;
/**
 * The authorized grace period in minutes after start break
 */
gracePeriodEnd?: number;
/**
 * The authorized extra grace period in minutes for a break duration
 */
extraBreakMinutesTolerance?: number;
};
    /**
     * The list of break rule conditions managed in break management
     */
    breakRuleConditions?: Array<BreakRuleConditionsItem>;
    /**
     * The list of break sessions computed
     */
    computedSessions?: {
/**
 * The expected and actual clock-in
 */
clockIn?: {
/**
 * The expected datetime for clock-in or clock-out
 */
expected?: string;
/**
 * The actual datetime for clock-in or clock-out
 */
actual?: string;
};
/**
 * The expected and actual clock-out
 */
clockOut?: {
/**
 * The expected datetime for clock-in or clock-out
 */
expected?: string;
/**
 * The actual datetime for clock-in or clock-out
 */
actual?: string;
};
/**
 * The expected, actual, not used and extra used for meal break
 */
mealBreak?: {
/**
 * Total of expected minutes for a break
 */
expectedInMinutes?: number;
/**
 * Used minutes for a break
 */
actualInMinutes?: number;
/**
 * Not used minutes for a break
 */
notUsedInMinutes?: number;
/**
 * Extra used minutes for a break
 */
extraUsedInMinutes?: number;
};
/**
 * The expected, actual, not used and extra used for rest break
 */
restBreak?: {
/**
 * Total of expected minutes for a break
 */
expectedInMinutes?: number;
/**
 * Used minutes for a break
 */
actualInMinutes?: number;
/**
 * Not used minutes for a break
 */
notUsedInMinutes?: number;
/**
 * Extra used minutes for a break
 */
extraUsedInMinutes?: number;
};
};
    /**
     * Show if the feature break management is enable on shift
     */
    breakManagementEnableFeature?: boolean;
    /**
     * The list of break exceptions
     */
    breakExceptions?: any;
    /**
     * Which type of breaks should be paid
     */
    payBreaks?: string;
}