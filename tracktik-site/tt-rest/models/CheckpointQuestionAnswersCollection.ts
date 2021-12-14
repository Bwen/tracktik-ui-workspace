/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type CheckpointQuestionAnswersCollection = {
    /**
     * Question
     */
    question?: string;
    /**
     * Question Index
     */
    questionIndex?: Integer;
    /**
     * Answer
     */
    answer?: string;
    /**
     * Scanned By
     */
    employee?: EmployeesId;
    /**
     * Scan Date Time
     */
    scannedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `scannedOn`
     */
    scanTime?: TimeStampNumber;
    /**
     * Checkpoint
     */
    checkpoint?: CheckpointsId;
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