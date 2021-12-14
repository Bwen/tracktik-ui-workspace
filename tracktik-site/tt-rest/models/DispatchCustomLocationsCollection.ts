/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DispatchTasksId } from './DispatchTasksId';
import type { EmployeesId } from './EmployeesId';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type DispatchCustomLocationsCollection = {
    /**
     * Dispatch-Task
     */
    dispatchTask?: DispatchTasksId;
    /**
     * Type
     */
    type?: DispatchCustomLocationsCollection.type;
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
     * Region
     */
    region?: RegionsId;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
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

export namespace DispatchCustomLocationsCollection {

    /**
     * Type
     */
    export enum type {
        ADDRESS = 'ADDRESS',
        COORDINATES = 'COORDINATES',
        NEW_ACCOUNT = 'NEW_ACCOUNT',
    }


}