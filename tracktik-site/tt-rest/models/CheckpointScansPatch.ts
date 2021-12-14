/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointTourSessionsId } from './CheckpointTourSessionsId';
import type { EmployeesId } from './EmployeesId';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { TimeStampNumber } from './TimeStampNumber';

export type CheckpointScansPatch = {
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
}