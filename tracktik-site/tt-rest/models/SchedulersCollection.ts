/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { TimeZone } from './TimeZone';
import type { Uri } from './Uri';

export type SchedulersCollection = {
    /**
     * The label of the scheduler
     */
    label?: Label;
    /**
     * The repeat value for the scheduler
     */
    repeat?: SchedulersCollection.repeat;
    /**
     * The start date time of the scheduler
     */
    startDateTime?: DateTime;
    /**
     *  The end date time of the scheduler
     */
    endDateTime?: DateTime;
    /**
     * The timezonec for the scheduler
     */
    timeZone?: TimeZone;
    /**
     * Unkown purpose of this
     */
    every?: Integer;
    /**
     * The weekday where the schedule has to be run
     */
    weekDay?: Integer;
    /**
     * The month day where the schedule has to be run
     */
    monthDay?: Integer;
    /**
     * The year day where the schedule has to be run
     */
    yearDay?: Label;
    /**
     * The status of the schedule
     */
    status?: Integer;
    /**
     * The last time where the schedule was performed
     */
    lastPerform?: Integer;
    /**
     * The next occurence of the schedule
     */
    nextPerform?: Integer;
    /**
     * The grace period before the schedule has to be run
     */
    graceValueBefore?: Integer;
    /**
     * The grace period unit of the schedule (before)
     */
    graceUnitBefore?: Integer;
    /**
     * The grace period after the schedule has run
     */
    graceValueAfter?: Integer;
    /**
     * The grace period unit of the schedule (after)
     */
    graceUnitAfter?: Integer;
    /**
     * The user id that created the schedule
     */
    createUserId?: Integer;
    /**
     * The user id that updated the schedule
     */
    updateUserId?: Integer;
    /**
     * The create time where the schedule was created
     */
    createTime?: Integer;
    /**
     * The update time where the schedule was updated
     */
    updateTime?: Integer;
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
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}

export namespace SchedulersCollection {

    /**
     * The repeat value for the scheduler
     */
    export enum repeat {
        DAILY = 'DAILY',
        WEEKLY = 'WEEKLY',
        MONTHLY = 'MONTHLY',
        YEARLY = 'YEARLY',
        PERIODLY = 'PERIODLY',
    }


}