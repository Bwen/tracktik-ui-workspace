/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { OvertimeRulesId } from './OvertimeRulesId';

export type OvertimeRuleItemsPut = {
    /**
     * Rule Type
     */
    ruleType?: OvertimeRuleItemsPut.ruleType;
    /**
     * Rate Type
     */
    rateType?: OvertimeRuleItemsPut.rateType;
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
}

export namespace OvertimeRuleItemsPut {

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