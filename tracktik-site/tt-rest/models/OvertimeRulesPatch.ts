/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';
import type { OvertimeRuleItemsId } from './OvertimeRuleItemsId';

export type OvertimeRulesPatch = {
    /**
     * Name
     */
    name?: string;
    /**
     * Period Length
     */
    periodLength?: OvertimeRulesPatch.periodLength;
    /**
     * Billing Rules
     */
    billingRuleItems?: Array<OvertimeRuleItemsId>;
    /**
     * Rule Type
     */
    ruleType?: OvertimeRulesPatch.ruleType;
    /**
     * Rules
     */
    rules?: JSON;
}

export namespace OvertimeRulesPatch {

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