/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MobileDevicesId } from './MobileDevicesId';
import type { MobileDevicesItem } from './MobileDevicesItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MobileDeviceGeoLocationsItem = {
    /**
     * Date and time of creation
     */
    createdOn?: TimeStampNumber;
    /**
     * Mobile Device: ID of the resource by default OR *on demand* JSON object of type [MobileDevices](#operation/getOneMobileDevices)
     */
    mobileDevice?: (MobileDevicesId | MobileDevicesItem);
    /**
     * Latitude
     */
    latitude?: GeoPositionLatitude;
    /**
     * Longitude
     */
    longitude?: GeoPositionLongitude;
    /**
     * Accuracy
     */
    accuracy?: Decimal;
    /**
     * Created by: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Global Unique Id of the Related Entity.: *On demand*
     */
    belongsTo?: Integer;
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
}