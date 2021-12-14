/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type OvertimeRulesCollection = {
    /**
     * Name
     */
    name?: string;
    /**
     * Period Length
     */
    periodLength?: OvertimeRulesCollection.periodLength;
    /**
     * Rule Type
     */
    ruleType?: OvertimeRulesCollection.ruleType;
    /**
     * Rules
     */
    rules?: JSON;
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

export namespace OvertimeRulesCollection {

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