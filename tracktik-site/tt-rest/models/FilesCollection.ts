/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type FilesCollection = {
    /**
     * File URL
     */
    url?: Label;
    /**
     * When attached to an object it identify the file, example: avatar, logo, etc.
     */
    tag?: Label;
    /**
     * File format or extension
     */
    format?: Label;
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
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}