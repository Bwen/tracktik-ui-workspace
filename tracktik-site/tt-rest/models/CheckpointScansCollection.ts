/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointTourSessionsId } from './CheckpointTourSessionsId';
import type { EmployeesId } from './EmployeesId';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type CheckpointScansCollection = {
    /**
     * Checkpoint
     */
    checkpoint?: CheckpointsId;
    /**
     * Scanned By
     */
    scannedBy?: EmployeesId;
    /**
     * Scan Date Time
     */
    scannedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `scannedOn`
     */
    scanDateTime?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `longitude`
     */
    lng?: GeoPositionLongitude;
    /**
     * Longitude
     */
    longitude?: GeoPositionLongitude;
    /**
     * This field was deprecated in favor of `latitude`
     */
    lat?: GeoPositionLatitude;
    /**
     * Latitude
     */
    latitude?: GeoPositionLatitude;
    /**
     * Tour Session
     */
    tourSession?: CheckpointTourSessionsId;
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