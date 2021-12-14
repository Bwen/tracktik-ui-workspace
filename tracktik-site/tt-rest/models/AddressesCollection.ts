/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type AddressesCollection = {
    /**
     * Address
     */
    addressLine1?: Label;
    /**
     * Address Line 2
     */
    addressLine2?: Label;
    /**
     * City
     */
    city?: Label;
    /**
     * Country
     */
    country?: Label;
    /**
     * State/Province
     */
    state?: Label;
    /**
     * Zip/Postal Code
     */
    postalCode?: Label;
    /**
     * Latitude
     */
    latitude?: GeoPositionLatitude;
    /**
     * Longitude
     */
    longitude?: GeoPositionLongitude;
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