/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { OvertimeRuleItemsItem } from './OvertimeRuleItemsItem';
import type { Uri } from './Uri';

export type OvertimeRulesItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Period Length
     */
    periodLength?: OvertimeRulesItem.periodLength;
    /**
     * Billing Rules: *On demand*. List of JSON objects of type [OvertimeRuleItems](#operation/getOneOvertimeRuleItems)
     */
    billingRuleItems?: Array<OvertimeRuleItemsItem>;
    /**
     * Rule Type
     */
    ruleType?: OvertimeRulesItem.ruleType;
    /**
     * Rules
     */
    rules?: JSON;
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

export namespace OvertimeRulesItem {

    /**
     * Period Length
     */
    export enum periodLength {
        WEEKLY = 'WEEKLY',
        BI_WEEKLY = 'BI-WEEKLY',
    }

    /**
     * Rule Type
     */
    export enum ruleType {
        PAYROLL = 'PAYROLL',
        BILLING = 'BILLING',
    }


}