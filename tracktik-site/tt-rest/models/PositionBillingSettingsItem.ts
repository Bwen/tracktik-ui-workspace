/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillItemsId } from './BillItemsId';
import type { BillItemsItem } from './BillItemsItem';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { HolidayGroupsItem } from './HolidayGroupsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { OvertimeRulesItem } from './OvertimeRulesItem';
import type { Percentage } from './Percentage';
import type { PositionPremiumsItem } from './PositionPremiumsItem';
import type { PositionPriceMatrixRulesItem } from './PositionPriceMatrixRulesItem';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { Uri } from './Uri';

export type PositionBillingSettingsItem = {
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Billing Type
     */
    type?: PositionBillingSettingsItem.type;
    /**
     * Bill Item: ID of the resource by default OR *on demand* JSON object of type [BillItems](#operation/getOneBillItems)
     */
    billItem?: (BillItemsId | BillItemsItem);
    /**
     * Bill Rate
     */
    rate?: CurrencyRate;
    /**
     * Discount Rate %
     */
    discountRate?: Percentage;
    /**
     * Holiday Group: ID of the resource by default OR *on demand* JSON object of type [HolidayGroups](#operation/getOneHolidayGroups)
     */
    holidayGroup?: (HolidayGroupsId | HolidayGroupsItem);
    /**
     * Bill breaks
     */
    billBreaks?: PositionBillingSettingsItem.billBreaks;
    /**
     * Bill Holiday
     */
    holiday?: PositionBillingSettingsItem.holiday;
    /**
     * Holiday hourly rate
     */
    holidayRate?: CurrencyRate;
    /**
     * Holiday multiplier
     */
    holidayMultiplier?: Decimal;
    /**
     * Overtime Billing Rule: ID of the resource by default OR *on demand* JSON object of type [OvertimeRules](#operation/getOneOvertimeRules)
     */
    overtimeRule?: (OvertimeRulesId | OvertimeRulesItem);
    /**
     * Position Premiums of type `BILL_HOURLY`: *On demand*. List of JSON objects of type [PositionPremiums](#operation/getOnePositionPremiums)
     */
    billPremiums?: Array<PositionPremiumsItem>;
    /**
     * Price Matrix Rules: *On demand*. List of JSON objects of type PositionPriceMatrixRules
     */
    priceMatrixRules?: Array<PositionPriceMatrixRulesItem>;
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

export namespace PositionBillingSettingsItem {

    /**
     * Billing Type
     */
    export enum type {
        HOURLY = 'HOURLY',
        FIXED = 'FIXED',
    }

    /**
     * Bill breaks
     */
    export enum billBreaks {
        NONE = 'NONE',
        ALL = 'ALL',
        REST_ONLY = 'REST_ONLY',
        MEAL_ONLY = 'MEAL_ONLY',
    }

    /**
     * Bill Holiday
     */
    export enum holiday {
        REGULAR = 'REGULAR',
        RATE = 'RATE',
    }


}