/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type AppLicensesCollection = {
    /**
     * Name
     */
    name?: string;
    /**
     * Number
     */
    number?: string;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Current User
     */
    user?: EmployeesId;
    /**
     * Last known Latitude
     */
    lastLatitude?: GeoPositionLatitude;
    /**
     * Last known Longitude
     */
    lastLongitude?: GeoPositionLongitude;
    /**
     * Start Date & Time
     */
    startedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startTime?: TimeStampNumber;
    /**
     * Status
     */
    status?: AppLicensesCollection.status;
    /**
     * App
     */
    applicationId?: AppLicensesCollection.applicationId;
    /**
     * Application Version
     */
    applicationVersion?: Label;
    /**
     * Device Model
     */
    deviceModel?: Label;
    /**
     * Device Operating System
     */
    deviceOS?: Label;
    /**
     * Device IMEI
     */
    deviceIMEI?: Label;
    /**
     * Installation Code
     */
    installationCode?: string;
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

export namespace AppLicensesCollection {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        NEW = 'NEW',
        KILLED = 'KILLED',
        CHECK_FLAG = 'CHECK_FLAG',
    }

    /**
     * App
     */
    export enum applicationId {
        GUARD_TOUR = 'GUARD_TOUR',
        PATROL_BROWSER = 'PATROL_BROWSER',
        CLOUD_STORAGE = 'CLOUD_STORAGE',
        DISPATCH_PRO = 'DISPATCH_PRO',
        KIOSK = 'KIOSK',
    }


}