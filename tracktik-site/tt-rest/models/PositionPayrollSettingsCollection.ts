/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { CurrencyRate } from './CurrencyRate';
import type { Decimal } from './Decimal';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PayrollCodesId } from './PayrollCodesId';
import type { PositionsId } from './PositionsId';
import type { Uri } from './Uri';

export type PositionPayrollSettingsCollection = {
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
    holiday?: PositionPayrollSettingsCollection.holiday;
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
    payBreaks?: PositionPayrollSettingsCollection.payBreaks;
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

export namespace PositionPayrollSettingsCollection {

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