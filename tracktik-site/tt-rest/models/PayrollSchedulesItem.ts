/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { Uri } from './Uri';

export type PayrollSchedulesItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Frequency
     */
    frequency?: PayrollSchedulesItem.frequency;
    /**
     * Frequency Semi Day 1
     */
    semiMonthlyFirstReferenceDay?: Integer;
    /**
     * Frequency Semi Day 2
     */
    semiMonthlySecondReferenceDay?: Integer;
    /**
     * Holiday hours towards period OT
     */
    isHolidayCountedInOvertime?: boolean;
    /**
     * Are holidays aligned with period start time
     */
    holidaysAlignedWithPeriodStartTime?: boolean;
    /**
     * Period start time
     */
    periodStartTime?: string;
    /**
     * Period start Date
     */
    periodStartDate?: Date;
    /**
     * If the schedule is available for all regions.
     */
    isGlobal?: boolean;
    /**
     * Only set a region, when isGlobal is false: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Status
     */
    status?: PayrollSchedulesItem.status;
    /**
     * This field was deprecated in favor of `overlappingStrategy`.
     */
    overlapingStrategy?: PayrollSchedulesItem.overlapingStrategy;
    /**
     * Period Overlapping Strategy
     */
    overlappingStrategy?: PayrollSchedulesItem.overlappingStrategy;
    /**
     * This field was deprecated in favor of `holidayOverlappingStrategy`.
     */
    holidayOverlapingStrategy?: PayrollSchedulesItem.holidayOverlapingStrategy;
    /**
     * Holiday Overlapping Strategy
     */
    holidayOverlappingStrategy?: PayrollSchedulesItem.holidayOverlappingStrategy;
    /**
     * Is Overtime Weighted
     */
    isOvertimeWeighted?: boolean;
    /**
     * Multiple Pay codes Strategy
     */
    multiplePayCodesStrategy?: PayrollSchedulesItem.multiplePayCodesStrategy;
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

export namespace PayrollSchedulesItem {

    /**
     * Frequency
     */
    export enum frequency {
        WEEKLY = 'WEEKLY',
        BI_WEEKLY = 'BI WEEKLY',
        SEMI_MONTHLY = 'SEMI MONTHLY',
        MONTHLY = 'MONTHLY',
    }

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }

    /**
     * This field was deprecated in favor of `overlappingStrategy`.
     */
    export enum overlapingStrategy {
        CUT_HOURS = 'CUT_HOURS',
        USE_START_TIME = 'USE_START_TIME',
        ALLOCATE_MOST_HOURS = 'ALLOCATE_MOST_HOURS',
    }

    /**
     * Period Overlapping Strategy
     */
    export enum overlappingStrategy {
        CUT_HOURS = 'CUT_HOURS',
        USE_START_TIME = 'USE_START_TIME',
        ALLOCATE_MOST_HOURS = 'ALLOCATE_MOST_HOURS',
    }

    /**
     * This field was deprecated in favor of `holidayOverlappingStrategy`.
     */
    export enum holidayOverlapingStrategy {
        CUT_HOURS = 'CUT_HOURS',
        USE_START_TIME = 'USE_START_TIME',
    }

    /**
     * Holiday Overlapping Strategy
     */
    export enum holidayOverlappingStrategy {
        CUT_HOURS = 'CUT_HOURS',
        USE_START_TIME = 'USE_START_TIME',
    }

    /**
     * Multiple Pay codes Strategy
     */
    export enum multiplePayCodesStrategy {
        HIGHEST_RATE = 'HIGHEST_RATE',
        ALL_APPLICABLE_CODES = 'ALL_APPLICABLE_CODES',
    }


}