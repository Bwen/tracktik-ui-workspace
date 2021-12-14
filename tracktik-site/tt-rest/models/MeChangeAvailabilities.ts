/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';

export type MeChangeAvailabilities = {
    /**
     * Week Day
     */
    weekDay: MeChangeAvailabilities.weekDay;
    /**
     * Availabilities
     */
    availabilities: JSON;
}

export namespace MeChangeAvailabilities {

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