/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftNotesCollection = {
    /**
     * Content
     */
    content?: Label;
    /**
     * Created On
     */
    createdOn?: TimeStampNumber;
    /**
     * User who wrote the note
     */
    createdBy?: EmployeesId;
    /**
     * Type
     */
    type?: ShiftNotesCollection.type;
    /**
     * Shift
     */
    shift?: ShiftsId;
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

export namespace ShiftNotesCollection {

    /**
     * Type
     */
    export enum type {
        NOTE = 'NOTE',
        LOG = 'LOG',
    }


}