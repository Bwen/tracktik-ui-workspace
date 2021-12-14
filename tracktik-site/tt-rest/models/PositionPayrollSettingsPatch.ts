/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionPremiumsId } from './PositionPremiumsId';
import type { PositionPriceMatrixRulesId } from './PositionPriceMatrixRulesId';
import type { PositionsId } from './PositionsId';

export type PositionPayrollSettingsPatch = {
    /**
     * Position
     */
    position?: PositionsId;
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
    holiday?: PositionPayrollSettingsPatch.holiday;
    /**
     * Holiday hourly rate
     */
    holidayRate?: CurrencyRate;
    /**
     * Holiday multiplier
     */
    holidayMultiplier?: Decimal;
    /**
     * Holiday Group
     */
    holidayGroup?: HolidayGroupsId;
    /**
     * Pay Code
     */
    payCode?: PayrollCodesId;
    /**
     * Pay breaks
     */
    payBreaks?: PositionPayrollSettingsPatch.payBreaks;
    /**
     * Position Premiums of type `PAY_HOURLY`
     */
    payPremiums?: Array<PositionPremiumsId>;
    /**
     * Price Matrix Rules
     */
    priceMatrixRules?: Array<PositionPriceMatrixRulesId>;
}

export namespace PositionPayrollSettingsPatch {

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