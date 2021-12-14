/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointsItem } from './CheckpointsItem';
import type { CheckpointToursId } from './CheckpointToursId';
import type { CheckpointToursItem } from './CheckpointToursItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Number } from './Number';
import type { Uri } from './Uri';

export type CheckpointTourAssignmentsItem = {
    /**
     * Checkpoint: ID of the resource by default OR *on demand* JSON object of type [Checkpoints](#operation/getOneCheckpoints)
     */
    checkpoint?: (CheckpointsId | CheckpointsItem);
    /**
     * Tour: ID of the resource by default OR *on demand* JSON object of type [CheckpointTours](#operation/getOneCheckpointTours)
     */
    tour?: (CheckpointToursId | CheckpointToursItem);
    /**
     * Sort Order
     */
    sortOrder?: Number;
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