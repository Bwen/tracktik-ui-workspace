/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { Uri } from './Uri';

export type OvertimeRuleItemsCollection = {
    /**
     * Rule Type
     */
    ruleType?: OvertimeRuleItemsCollection.ruleType;
    /**
     * Rate Type
     */
    rateType?: OvertimeRuleItemsCollection.rateType;
    /**
     * Threshold
     */
    threshold?: Integer;
    /**
     * Rate Multiplier
     */
    rateMultiplier?: Decimal;
    /**
     * Rate Amount
     */
    rateAmount?: Decimal;
    /**
     * Overtime Rule
     */
    overtimeRule?: OvertimeRulesId;
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
}

export namespace OvertimeRuleItemsCollection {

    /**
     * Rule Type
     */
    export enum ruleType {
        DAILY = 'DAILY',
        CONSECUTIVE_DAYS = 'CONSECUTIVE_DAYS',
        DAY_SPECIFIC = 'DAY_SPECIFIC',
        PERIOD = 'PERIOD',
        HOLIDAY = 'HOLIDAY',
    }

    /**
     * Rate Type
     */
    export enum rateType {
        MULTIPLIER = 'MULTIPLIER',
        RATE = 'RATE',
    }


}