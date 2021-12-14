/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { Time } from './Time';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PositionPriceMatrixRulesItem = {
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Days
     */
    days?: PositionPriceMatrixRulesItem.days;
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
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace PositionPriceMatrixRulesItem {

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