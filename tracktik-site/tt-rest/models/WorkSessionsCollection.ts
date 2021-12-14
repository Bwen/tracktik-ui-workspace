/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { Hours } from './Hours';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileDevicesId } from './MobileDevicesId';
import type { PhoneNumber } from './PhoneNumber';
import type { PositionsId } from './PositionsId';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type WorkSessionsCollection = {
    /**
     * Start Date & Time
     */
    startedOn?: TimeStampNumber;
    /**
     * End Date & Time
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endDateTime?: TimeStampNumber;
    /**
     * This field is deprecated in favor of `clockInMethod`
     */
    initiationMethod?: WorkSessionsCollection.initiationMethod;
    /**
     * The method used to clock-in
     */
    clockInMethod?: WorkSessionsCollection.clockInMethod;
    /**
     * This field is deprecated in favor of `clockOutMethod`
     */
    terminationMethod?: WorkSessionsCollection.terminationMethod;
    /**
     * The method used to clock-out
     */
    clockOutMethod?: WorkSessionsCollection.clockOutMethod;
    /**
     * Status
     */
    status?: WorkSessionsCollection.status;
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Duration
     */
    durationHours?: Hours;
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Account
     */
    account?: AccountsId;
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
    /**
     * Mobile device
     */
    mobileDevice?: MobileDevicesId;
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
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace WorkSessionsCollection {

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