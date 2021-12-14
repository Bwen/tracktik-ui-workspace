/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { HolidayGroupsItem } from './HolidayGroupsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PayrollCodesItem } from './PayrollCodesItem';
import type { PositionPremiumsItem } from './PositionPremiumsItem';
import type { PositionPriceMatrixRulesItem } from './PositionPriceMatrixRulesItem';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { Uri } from './Uri';

export type PositionPayrollSettingsItem = {
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * If `positionHourlyRate` should be used instead of the employee pay rate
     */
    payPositionRate?: Boolean;
    /**
     * Position Hourly rate
     */
    positionHourlyRate?: CurrencyRate;
    /**
     * Pay Holiday
     */
    holiday?: PositionPayrollSettingsItem.holiday;
    /**
     * Holiday hourly rate
     */
    holidayRate?: CurrencyRate;
    /**
     * Holiday multiplier
     */
    holidayMultiplier?: Decimal;
    /**
     * Holiday Group: ID of the resource by default OR *on demand* JSON object of type [HolidayGroups](#operation/getOneHolidayGroups)
     */
    holidayGroup?: (HolidayGroupsId | HolidayGroupsItem);
    /**
     * Pay Code: ID of the resource by default OR *on demand* JSON object of type [PayrollCodes](#operation/getOnePayrollCodes)
     */
    payCode?: (PayrollCodesId | PayrollCodesItem);
    /**
     * Pay breaks
     */
    payBreaks?: PositionPayrollSettingsItem.payBreaks;
    /**
     * Position Premiums of type `PAY_HOURLY`: *On demand*. List of JSON objects of type [PositionPremiums](#operation/getOnePositionPremiums)
     */
    payPremiums?: Array<PositionPremiumsItem>;
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

export namespace PositionPayrollSettingsItem {

    /**
     * Pay Holiday
     */
    export enum holiday {
        RATE = 'RATE',
        MULTIPLIER = 'MULTIPLIER',
    }

    /**
     * Pay breaks
     */
    export enum payBreaks {
        NONE = 'NONE',
        ALL = 'ALL',
        REST_ONLY = 'REST_ONLY',
        MEAL_ONLY = 'MEAL_ONLY',
    }


}