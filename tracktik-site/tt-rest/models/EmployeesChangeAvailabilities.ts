/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';

export type EmployeesChangeAvailabilities = {
    /**
     * Week Day
     */
    weekDay: EmployeesChangeAvailabilities.weekDay;
    /**
     * Availabilities
     */
    availabilities: JSON;
}

export namespace EmployeesChangeAvailabilities {

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


}