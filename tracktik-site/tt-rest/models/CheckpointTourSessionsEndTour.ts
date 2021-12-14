/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type CheckpointTourSessionsEndTour = {
    /**
     * Was the tour completed
     */
    completed?: Boolean;
    /**
     * Reason for the incomplete tour
     */
    incompleteReason?: Label;
    /**
     * User id requesting the tour to end
     */
    iduser: Integer;
    /**
     * Timestamp for the end of the tour session
     */
    endTime: TimeStampNumber;
}