/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { LeavePoliciesId } from './LeavePoliciesId';
import type { PayrollCodesId } from './PayrollCodesId';

export type LeavePolicyPaySettingsPost = {
    /**
     * Leave Policy
     */
    leavePolicy: LeavePoliciesId;
    /**
     * If the leave policy is paid
     */
    isPaid: Boolean;
    /**
     * Pay rate preference
     */
    payRatePreference: LeavePolicyPaySettingsPost.payRatePreference;
    /**
     * Policy-specific pay rate
     */
    policyPayRate: CurrencyRate;
    /**
     * The maximum number of weeks we can consider when calculating the prorated pay rate
     */
    maxNumWeeksForProrated: Integer;
    /**
     * Number of payed hours per day
     */
    hoursPerDay: Decimal;
    /**
     * Pay Code
     */
    payCode: PayrollCodesId;
}

export namespace LeavePolicyPaySettingsPost {

    /**
     * Pay rate preference
     */
    export enum payRatePreference {
        EMPLOYEE_RATE = 'EMPLOYEE_RATE',
        POLICY_SPECIFIC = 'POLICY_SPECIFIC',
        PRORATED = 'PRORATED',
    }


}