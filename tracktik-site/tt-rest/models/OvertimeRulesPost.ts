/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';
import type { OvertimeRuleItemsId } from './OvertimeRuleItemsId';

export type OvertimeRulesPost = {
    /**
     * Name
     */
    name: string;
    /**
     * Period Length
     */
    periodLength?: OvertimeRulesPost.periodLength;
    /**
     * Billing Rules
     */
    billingRuleItems?: Array<OvertimeRuleItemsId>;
    /**
     * Rule Type
     */
    ruleType?: OvertimeRulesPost.ruleType;
    /**
     * Rules
     */
    rules?: JSON;
}

export namespace OvertimeRulesPost {

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