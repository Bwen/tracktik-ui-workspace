/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesCollection } from './EmployeesCollection';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Time } from './Time';
import type { Uri } from './Uri';

export type EmployeeAvailabilitiesCollection = {
    /**
     * Week Day
     */
    weekDay?: EmployeeAvailabilitiesCollection.weekDay;
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
    available?: EmployeeAvailabilitiesCollection.available;
    /**
     * Status
     */
    status?: EmployeeAvailabilitiesCollection.status;
    /**
     * Employee
     */
    employee?: EmployeesCollection;
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

export namespace EmployeeAvailabilitiesCollection {

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