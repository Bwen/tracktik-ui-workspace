/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateTime } from './DateTime';
import type { Label } from './Label';
import type { ScheduleTimeOffRequestTypesId } from './ScheduleTimeOffRequestTypesId';
import type { TimeStampDate } from './TimeStampDate';

export type ScheduleTimeOffRequestsPatch = {
    /**
     * The description of the schedule off period
     */
    description?: Label;
    /**
     * The start date time of the schedule off period
     */
    startOffPeriodDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `startOffPeriodDateTime`
     */
    startOffPeriod?: TimeStampDate;
    /**
     * The end date time of the schedule off period
     */
    endOffPeriodDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `endOffPeriodDateTime`
     */
    endOffPeriod?: TimeStampDate;
    /**
     * Type
     */
    type?: ScheduleTimeOffRequestTypesId;
    /**
     * Time Zone
     */
    timeZone?: string;
}