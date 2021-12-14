/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Currency } from './Currency';
import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { Uri } from './Uri';

export type PayrollCodesItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * If the paycode is available for all region. If not select a region
     */
    isGlobal?: boolean;
    /**
     * Code
     */
    code?: string;
    /**
     * Type of Payroll code can be 'NORMAL', 'MULTIPLIER', 'ADDITIONNER'
     */
    type?: PayrollCodesItem.type;
    /**
     * Only set a region, when isGlobal is false: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Rate multiplier
     */
    multiplier?: Decimal;
    /**
     * Extra charge is the rate multiplier is not set
     */
    extraCharge?: Currency;
    /**
     * Is this payable
     */
    payable?: boolean;
    /**
     * Does this impact the overtime pay
     */
    impactsOvertime?: boolean;
    /**
     * Is this billable
     */
    billable?: boolean;
    /**
     * Is this code for Adhoc
     */
    isAdhoc?: boolean;
    /**
     * Is this code for deductions
     */
    isDeductable?: boolean;
    /**
     * Whether this code is used as a label
     */
    isLabel?: Boolean;
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

export namespace PayrollCodesItem {

    /**
     * Type of Payroll code can be 'NORMAL', 'MULTIPLIER', 'ADDITIONNER'
     */
    export enum type {
        NORMAL = 'NORMAL',
        MULTIPLIER = 'MULTIPLIER',
        ADDITIONNER = 'ADDITIONNER',
    }


}