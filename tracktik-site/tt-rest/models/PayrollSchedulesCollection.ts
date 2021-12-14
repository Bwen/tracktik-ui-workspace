/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Date } from './Date';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type PayrollSchedulesCollection = {
    /**
     * Name
     */
    name?: string;
    /**
     * Frequency
     */
    frequency?: PayrollSchedulesCollection.frequency;
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
     * Only set a region, when isGlobal is false
     */
    region?: RegionsId;
    /**
     * Status
     */
    status?: PayrollSchedulesCollection.status;
    /**
     * This field was deprecated in favor of `overlappingStrategy`.
     */
    overlapingStrategy?: PayrollSchedulesCollection.overlapingStrategy;
    /**
     * Period Overlapping Strategy
     */
    overlappingStrategy?: PayrollSchedulesCollection.overlappingStrategy;
    /**
     * This field was deprecated in favor of `holidayOverlappingStrategy`.
     */
    holidayOverlapingStrategy?: PayrollSchedulesCollection.holidayOverlapingStrategy;
    /**
     * Holiday Overlapping Strategy
     */
    holidayOverlappingStrategy?: PayrollSchedulesCollection.holidayOverlappingStrategy;
    /**
     * Is Overtime Weighted
     */
    isOvertimeWeighted?: boolean;
    /**
     * Multiple Pay codes Strategy
     */
    multiplePayCodesStrategy?: PayrollSchedulesCollection.multiplePayCodesStrategy;
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

export namespace PayrollSchedulesCollection {

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