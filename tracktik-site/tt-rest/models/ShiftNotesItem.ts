/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ShiftNotesItem = {
    /**
     * Content
     */
    content?: Label;
    /**
     * Created On
     */
    createdOn?: TimeStampNumber;
    /**
     * User who wrote the note: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Type
     */
    type?: ShiftNotesItem.type;
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
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

export namespace ShiftNotesItem {

    /**
     * Type
     */
    export enum type {
        NOTE = 'NOTE',
        LOG = 'LOG',
    }


}