/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointToursId } from './CheckpointToursId';
import type { Number } from './Number';

export type CheckpointTourAssignmentsPut = {
    /**
     * Checkpoint
     */
    checkpoint: CheckpointsId;
    /**
     * Tour
     */
    tour: CheckpointToursId;
    /**
     * Sort Order
     */
    sortOrder?: Number;
}