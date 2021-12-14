/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointToursId } from './CheckpointToursId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Number } from './Number';
import type { Uri } from './Uri';

export type CheckpointTourAssignmentsCollection = {
    /**
     * Checkpoint
     */
    checkpoint?: CheckpointsId;
    /**
     * Tour
     */
    tour?: CheckpointToursId;
    /**
     * Sort Order
     */
    sortOrder?: Number;
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