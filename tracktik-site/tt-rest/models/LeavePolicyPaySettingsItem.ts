/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LeavePoliciesId } from './LeavePoliciesId';
import type { LeavePoliciesItem } from './LeavePoliciesItem';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollCodesItem } from './PayrollCodesItem';
import type { Uri } from './Uri';

export type LeavePolicyPaySettingsItem = {
    /**
     * Leave Policy: ID of the resource by default OR *on demand* JSON object of type LeavePolicies
     */
    leavePolicy?: (LeavePoliciesId | LeavePoliciesItem);
    /**
     * If the leave policy is paid
     */
    isPaid?: Boolean;
    /**
     * Pay rate preference
     */
    payRatePreference?: LeavePolicyPaySettingsItem.payRatePreference;
    /**
     * Policy-specific pay rate
     */
    policyPayRate?: CurrencyRate;
    /**
     * The maximum number of weeks we can consider when calculating the prorated pay rate
     */
    maxNumWeeksForProrated?: Integer;
    /**
     * Number of payed hours per day
     */
    hoursPerDay?: Decimal;
    /**
     * Pay Code: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    payCode?: (PayrollCodesId | PayrollCodesItem);
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

export namespace LeavePolicyPaySettingsItem {

    /**
     * Pay rate preference
     */
    export enum payRatePreference {
        EMPLOYEE_RATE = 'EMPLOYEE_RATE',
        POLICY_SPECIFIC = 'POLICY_SPECIFIC',
        PRORATED = 'PRORATED',
    }


}