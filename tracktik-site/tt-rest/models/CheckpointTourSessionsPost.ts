/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointToursId } from './CheckpointToursId';
import type { EmployeesId } from './EmployeesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type CheckpointTourSessionsPost = {
    /**
     * Tour
     */
    tour?: CheckpointToursId;
    /**
     * This field was deprecated in favor of `performedBy`
     */
    employee?: EmployeesId;
    /**
     * Performed By
     */
    performedBy?: EmployeesId;
    /**
     * Start Date Time
     */
    startedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime?: TimeStampNumber;
}