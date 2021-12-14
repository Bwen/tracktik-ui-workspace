/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';
import type { OvertimeRuleItemsId } from './OvertimeRuleItemsId';

export type OvertimeRulesPut = {
    /**
     * Name
     */
    name: string;
    /**
     * Period Length
     */
    periodLength?: OvertimeRulesPut.periodLength;
    /**
     * Billing Rules
     */
    billingRuleItems?: Array<OvertimeRuleItemsId>;
    /**
     * Rule Type
     */
    ruleType?: OvertimeRulesPut.ruleType;
    /**
     * Rules
     */
    rules?: JSON;
}

export namespace OvertimeRulesPut {

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