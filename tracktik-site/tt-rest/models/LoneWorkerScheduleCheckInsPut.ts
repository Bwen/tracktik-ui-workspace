/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { PositionsId } from './PositionsId';
import type { Time } from './Time';

export type LoneWorkerScheduleCheckInsPut = {
    /**
     * Day of the Week
     */
    weekDay: LoneWorkerScheduleCheckInsPut.weekDay;
    /**
     * Schedule Time
     */
    startTime: Time;
    /**
     * Account
     */
    account: AccountsId;
    /**
     * Position
     */
    position: PositionsId;
}

export namespace LoneWorkerScheduleCheckInsPut {

    /**
     * Day of the Week
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