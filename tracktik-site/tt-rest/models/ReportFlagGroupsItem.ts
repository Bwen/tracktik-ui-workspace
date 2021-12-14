/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportFlagsItem } from './ReportFlagsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ReportFlagGroupsItem = {
    /**
     * name
     */
    name?: string;
    /**
     * Code / Custom ID
     */
    customId?: string;
    /**
     * List of report flags on this group: *On demand*. List of JSON objects of type [ReportFlags](#operation/getOneReportFlags)
     */
    reportFlags?: Array<ReportFlagsItem>;
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