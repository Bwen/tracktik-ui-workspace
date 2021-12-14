/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { BreakSessionsItem } from './BreakSessionsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Hours } from './Hours';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileDevicesId } from './MobileDevicesId';
import type { MobileDevicesItem } from './MobileDevicesItem';
import type { PhoneNumber } from './PhoneNumber';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type WorkSessionsItem = {
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
    initiationMethod?: WorkSessionsItem.initiationMethod;
    /**
     * The method used to clock-in
     */
    clockInMethod?: WorkSessionsItem.clockInMethod;
    /**
     * This field is deprecated in favor of `clockOutMethod`
     */
    terminationMethod?: WorkSessionsItem.terminationMethod;
    /**
     * The method used to clock-out
     */
    clockOutMethod?: WorkSessionsItem.clockOutMethod;
    /**
     * Status
     */
    status?: WorkSessionsItem.status;
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * Duration: *On demand*
     */
    durationHours?: Hours;
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Breaks: *On demand*. List of JSON objects of type [BreakSessions](#operation/getOneBreakSessions)
     */
    breaks?: Array<BreakSessionsItem>;
    /**
     * This field is deprecated in favor of clockInPhoneNumber: *On demand*
     */
    initiationPhoneNumber?: PhoneNumber;
    /**
     * Phone number used to clock in: *On demand*
     */
    clockInPhoneNumber?: PhoneNumber;
    /**
     * This field is deprecated in favor of clockOutPhoneNumber: *On demand*
     */
    terminationPhoneNumber?: PhoneNumber;
    /**
     * Phone number used to clock out: *On demand*
     */
    clockOutPhoneNumber?: PhoneNumber;
    /**
     * Mobile device: ID of the resource by default OR *on demand* JSON object of type [MobileDevices](#operation/getOneMobileDevices)
     */
    mobileDevice?: (MobileDevicesId | MobileDevicesItem);
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
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace WorkSessionsItem {

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