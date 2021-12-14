/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointsItem } from './CheckpointsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type CheckpointQuestionAnswersItem = {
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
     * Scanned By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * Scan Date Time
     */
    scannedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `scannedOn`
     */
    scanTime?: TimeStampNumber;
    /**
     * Checkpoint: ID of the resource by default OR *on demand* JSON object of type [Checkpoints](#operation/getOneCheckpoints)
     */
    checkpoint?: (CheckpointsId | CheckpointsItem);
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