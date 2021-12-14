/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { DispatchTasksItem } from './DispatchTasksItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type DispatchCustomLocationsItem = {
    /**
     * Dispatch-Task: ID of the resource by default OR *on demand* JSON object of type [DispatchTasks](#operation/getOneDispatchTasks)
     */
    dispatchTask?: (DispatchTasksId | DispatchTasksItem);
    /**
     * Type
     */
    type?: DispatchCustomLocationsItem.type;
    /**
     * Name
     */
    name?: string;
    /**
     * Address line 1
     */
    addressLine1?: string;
    /**
     * Address line 2
     */
    addressLine2?: string;
    /**
     * City
     */
    city?: string;
    /**
     * State / Province
     */
    state?: string;
    /**
     * Zip / Postal Code
     */
    postalCode?: string;
    /**
     * Country
     */
    country?: string;
    /**
     * Auto geo-code DispatchCustomLocation of type `ADDRESS` if set to `true`. Default value is `true`, you must set it to `false` if you don't want the auto geo-code override the latitude and longitude properties.
     */
    autoGeoCode?: boolean;
    /**
     * Latitude
     */
    latitude?: GeoPositionLatitude;
    /**
     * Longitude
     */
    longitude?: GeoPositionLongitude;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
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

export namespace DispatchCustomLocationsItem {

    /**
     * Type
     */
    export enum type {
        ADDRESS = 'ADDRESS',
        COORDINATES = 'COORDINATES',
        NEW_ACCOUNT = 'NEW_ACCOUNT',
    }


}