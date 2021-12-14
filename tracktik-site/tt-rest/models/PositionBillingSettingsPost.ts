/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillItemsId } from './BillItemsId';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { Percentage } from './Percentage';
import type { PositionPremiumsId } from './PositionPremiumsId';
import type { PositionPriceMatrixRulesId } from './PositionPriceMatrixRulesId';
import type { PositionsId } from './PositionsId';

export type PositionBillingSettingsPost = {
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Billing Type
     */
    type: PositionBillingSettingsPost.type;
    /**
     * Bill Item
     */
    billItem: BillItemsId;
    /**
     * Bill Rate
     */
    rate: CurrencyRate;
    /**
     * Discount Rate %
     */
    discountRate?: Percentage;
    /**
     * Holiday Group
     */
    holidayGroup: HolidayGroupsId;
    /**
     * Bill breaks
     */
    billBreaks: PositionBillingSettingsPost.billBreaks;
    /**
     * Bill Holiday
     */
    holiday: PositionBillingSettingsPost.holiday;
    /**
     * Holiday hourly rate
     */
    holidayRate: CurrencyRate;
    /**
     * Holiday multiplier
     */
    holidayMultiplier: Decimal;
    /**
     * Overtime Billing Rule
     */
    overtimeRule?: OvertimeRulesId;
    /**
     * Position Premiums of type `BILL_HOURLY`
     */
    billPremiums?: Array<PositionPremiumsId>;
    /**
     * Price Matrix Rules
     */
    priceMatrixRules?: Array<PositionPriceMatrixRulesId>;
}

export namespace PositionBillingSettingsPost {

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