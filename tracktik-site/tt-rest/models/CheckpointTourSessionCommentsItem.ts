/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckpointTourSessionsId } from './CheckpointTourSessionsId';
import type { CheckpointTourSessionsItem } from './CheckpointTourSessionsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { FilesItem } from './FilesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type CheckpointTourSessionCommentsItem = {
    /**
     * Tour Session: ID of the resource by default OR *on demand* JSON object of type [CheckpointTourSessions](#operation/getOneCheckpointTourSessions)
     */
    session?: (CheckpointTourSessionsId | CheckpointTourSessionsItem);
    /**
     * Content
     */
    content?: Label;
    /**
     * Pictures: *On demand*. List of JSON objects of type Files
     */
    pictures?: Array<FilesItem>;
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
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}