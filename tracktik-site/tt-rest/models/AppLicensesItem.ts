/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type AppLicensesItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Number
     */
    number?: string;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Current User: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    user?: (EmployeesId | EmployeesItem);
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
    status?: AppLicensesItem.status;
    /**
     * App
     */
    applicationId?: AppLicensesItem.applicationId;
    /**
     * Application Version: *On demand*
     */
    applicationVersion?: Label;
    /**
     * Device Model: *On demand*
     */
    deviceModel?: Label;
    /**
     * Device Operating System: *On demand*
     */
    deviceOS?: Label;
    /**
     * Device IMEI: *On demand*
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

export namespace AppLicensesItem {

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