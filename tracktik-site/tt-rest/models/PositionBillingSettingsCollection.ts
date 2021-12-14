/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillItemsId } from './BillItemsId';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { OvertimeRulesId } from './OvertimeRulesId';
import type { Percentage } from './Percentage';
import type { PositionsId } from './PositionsId';
import type { Uri } from './Uri';

export type PositionBillingSettingsCollection = {
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Billing Type
     */
    type?: PositionBillingSettingsCollection.type;
    /**
     * Bill Item
     */
    billItem?: BillItemsId;
    /**
     * Bill Rate
     */
    rate?: CurrencyRate;
    /**
     * Discount Rate %
     */
    discountRate?: Percentage;
    /**
     * Holiday Group
     */
    holidayGroup?: HolidayGroupsId;
    /**
     * Bill breaks
     */
    billBreaks?: PositionBillingSettingsCollection.billBreaks;
    /**
     * Bill Holiday
     */
    holiday?: PositionBillingSettingsCollection.holiday;
    /**
     * Holiday hourly rate
     */
    holidayRate?: CurrencyRate;
    /**
     * Holiday multiplier
     */
    holidayMultiplier?: Decimal;
    /**
     * Overtime Billing Rule
     */
    overtimeRule?: OvertimeRulesId;
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

export namespace PositionBillingSettingsCollection {

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