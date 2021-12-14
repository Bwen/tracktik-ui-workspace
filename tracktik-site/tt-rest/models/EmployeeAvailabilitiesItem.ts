/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Time } from './Time';
import type { Uri } from './Uri';

export type EmployeeAvailabilitiesItem = {
    /**
     * Week Day
     */
    weekDay?: EmployeeAvailabilitiesItem.weekDay;
    /**
     * This field was deprecated in favor of `timeFromIn24hFormat`.
     */
    timeFrom?: Time;
    /**
     * Time From 24h Format
     */
    timeFromIn24hFormat?: Label;
    /**
     * This field was deprecated in favor of `timeToIn24hFormat`.
     */
    timeTo?: Time;
    /**
     * Time To 24h Format
     */
    timeToIn24hFormat?: Label;
    /**
     * This field was deprecated in favor of `status`.
     */
    available?: EmployeeAvailabilitiesItem.available;
    /**
     * Status
     */
    status?: EmployeeAvailabilitiesItem.status;
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
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

export namespace EmployeeAvailabilitiesItem {

    /**
     * Week Day
     */
    export enum weekDay {
        MONDAY = 'MONDAY',
        TUESDAY = 'TUESDAY',
        WEDNESDAY = 'WEDNESDAY',
        THURSDAY = 'THURSDAY',
        FRIDAY = 'FRIDAY',
        SATURDAY = 'SATURDAY',
        SUNDAY = 'SUNDAY',
    }

    /**
     * This field was deprecated in favor of `status`.
     */
    export enum available {
        NOT_AVAILABLE = 'NOT_AVAILABLE',
        AVAILABLE = 'AVAILABLE',
        MAYBE = 'MAYBE',
    }

    /**
     * Status
     */
    export enum status {
        NOT_AVAILABLE = 'NOT_AVAILABLE',
        AVAILABLE = 'AVAILABLE',
        MAYBE = 'MAYBE',
    }


}