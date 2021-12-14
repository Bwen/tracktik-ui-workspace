/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { OvertimeRulesItem } from './OvertimeRulesItem';
import type { Uri } from './Uri';

export type OvertimeRuleItemsItem = {
    /**
     * Rule Type
     */
    ruleType?: OvertimeRuleItemsItem.ruleType;
    /**
     * Rate Type
     */
    rateType?: OvertimeRuleItemsItem.rateType;
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
     * Overtime Rule: ID of the resource by default OR *on demand* JSON object of type [OvertimeRules](#operation/getOneOvertimeRules)
     */
    overtimeRule?: (OvertimeRulesId | OvertimeRulesItem);
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
}

export namespace OvertimeRuleItemsItem {

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