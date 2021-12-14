/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointsItem } from './CheckpointsItem';
import type { CheckpointTourSessionsId } from './CheckpointTourSessionsId';
import type { CheckpointTourSessionsItem } from './CheckpointTourSessionsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type CheckpointScansItem = {
    /**
     * Checkpoint: ID of the resource by default OR *on demand* JSON object of type [Checkpoints](#operation/getOneCheckpoints)
     */
    checkpoint?: (CheckpointsId | CheckpointsItem);
    /**
     * Scanned By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    scannedBy?: (EmployeesId | EmployeesItem);
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
     * Tour Session: ID of the resource by default OR *on demand* JSON object of type [CheckpointTourSessions](#operation/getOneCheckpointTourSessions)
     */
    tourSession?: (CheckpointTourSessionsId | CheckpointTourSessionsItem);
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