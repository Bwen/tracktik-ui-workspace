/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { Time } from './Time';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PositionPriceMatrixRulesCollection = {
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Days
     */
    days?: PositionPriceMatrixRulesCollection.days;
    /**
     * Start Time
     */
    startTime?: Time;
    /**
     * End Time
     */
    endTime?: Time;
    /**
     * Price
     */
    price?: Currency;
    /**
     * Is percentage?
     */
    isPercentage?: Currency;
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
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace PositionPriceMatrixRulesCollection {

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