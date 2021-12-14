/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type NotesCollection = {
    /**
     * Content
     */
    content?: Label;
    /**
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
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
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}