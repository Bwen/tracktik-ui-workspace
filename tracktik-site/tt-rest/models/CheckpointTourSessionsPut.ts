/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointToursId } from './CheckpointToursId';
import type { EmployeesId } from './EmployeesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type CheckpointTourSessionsPut = {
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
     * End Date Time
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endDateTime?: TimeStampNumber;
}