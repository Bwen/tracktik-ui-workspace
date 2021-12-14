/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { BreakSessionsId } from './BreakSessionsId';
import type { EmployeesId } from './EmployeesId';
import type { PhoneNumber } from './PhoneNumber';
import type { PositionsId } from './PositionsId';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type WorkSessionsPut = {
    /**
     * Start Date & Time
     */
    startedOn: TimeStampNumber;
    /**
     * End Date & Time
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endDateTime?: TimeStampNumber;
    /**
     * This field is deprecated in favor of `clockInMethod`
     */
    initiationMethod?: WorkSessionsPut.initiationMethod;
    /**
     * The method used to clock-in
     */
    clockInMethod?: WorkSessionsPut.clockInMethod;
    /**
     * This field is deprecated in favor of `clockOutMethod`
     */
    terminationMethod?: WorkSessionsPut.terminationMethod;
    /**
     * The method used to clock-out
     */
    clockOutMethod?: WorkSessionsPut.clockOutMethod;
    /**
     * Status
     */
    status?: WorkSessionsPut.status;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Account
     */
    account: AccountsId;
    /**
     * Breaks
     */
    breaks?: Array<BreakSessionsId>;
    /**
     * This field is deprecated in favor of clockInPhoneNumber
     */
    initiationPhoneNumber?: PhoneNumber;
    /**
     * Phone number used to clock in
     */
    clockInPhoneNumber?: PhoneNumber;
    /**
     * This field is deprecated in favor of clockOutPhoneNumber
     */
    terminationPhoneNumber?: PhoneNumber;
    /**
     * Phone number used to clock out
     */
    clockOutPhoneNumber?: PhoneNumber;
}

export namespace WorkSessionsPut {

    /**
     * This field is deprecated in favor of `clockInMethod`
     */
    export enum initiationMethod {
        LIVE = 'LIVE',
        DELAYED = 'DELAYED',
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BREAK = 'BREAK',
        BATCH = 'BATCH',
        KIOSK = 'KIOSK',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }

    /**
     * The method used to clock-in
     */
    export enum clockInMethod {
        LIVE = 'LIVE',
        DELAYED = 'DELAYED',
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BREAK = 'BREAK',
        BATCH = 'BATCH',
        KIOSK = 'KIOSK',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }

    /**
     * This field is deprecated in favor of `clockOutMethod`
     */
    export enum terminationMethod {
        LIVE = 'LIVE',
        DELAYED = 'DELAYED',
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BREAK = 'BREAK',
        BATCH = 'BATCH',
        KIOSK = 'KIOSK',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }

    /**
     * The method used to clock-out
     */
    export enum clockOutMethod {
        LIVE = 'LIVE',
        DELAYED = 'DELAYED',
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BREAK = 'BREAK',
        BATCH = 'BATCH',
        KIOSK = 'KIOSK',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }

    /**
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }


}