/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';
import type { PositionsId } from './PositionsId';
import type { Time } from './Time';

export type PositionPriceMatrixRulesPut = {
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Days
     */
    days: PositionPriceMatrixRulesPut.days;
    /**
     * Start Time
     */
    startTime: Time;
    /**
     * End Time
     */
    endTime: Time;
    /**
     * Price
     */
    price: Currency;
    /**
     * Is percentage?
     */
    isPercentage: Currency;
}

export namespace PositionPriceMatrixRulesPut {

    /**
     * Days
     */
    export enum days {
        MON = 'MON',
        TUE = 'TUE',
        WED = 'WED',
        THU = 'THU',
        FRI = 'FRI',
        SAT = 'SAT',
        SUN = 'SUN',
        WEEK_DAYS = 'WEEK_DAYS',
        WEEKEND_DAYS = 'WEEKEND_DAYS',
        EVERYDAY = 'EVERYDAY',
    }


}