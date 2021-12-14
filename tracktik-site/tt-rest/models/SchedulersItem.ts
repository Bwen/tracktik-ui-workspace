/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { TimeZone } from './TimeZone';
import type { Uri } from './Uri';

export type SchedulersItem = {
    /**
     * The label of the scheduler
     */
    label?: Label;
    /**
     * The repeat value for the scheduler
     */
    repeat?: SchedulersItem.repeat;
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
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}

export namespace SchedulersItem {

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