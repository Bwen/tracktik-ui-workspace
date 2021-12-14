/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type GeoLocationsCollection = {
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
     * Date and time of creation
     */
    createdOn?: TimeStampNumber;
    /**
     * Created by
     */
    createdBy?: EmployeesId;
    /**
     * Global Unique Id of the Related Entity.
     */
    belongsTo?: Integer;
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
}