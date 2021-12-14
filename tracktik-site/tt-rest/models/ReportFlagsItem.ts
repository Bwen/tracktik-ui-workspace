/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { ReportFlagCategoriesId } from './ReportFlagCategoriesId';
import type { ReportFlagCategoriesItem } from './ReportFlagCategoriesItem';
import type { ReportFlagGroupsItem } from './ReportFlagGroupsItem';
import type { ReportFlagsId } from './ReportFlagsId';
import type { ReportFlagTemplatesId } from './ReportFlagTemplatesId';
import type { ReportFlagTemplatesItem } from './ReportFlagTemplatesItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ReportFlagsItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Details
     */
    details?: TextArea;
    /**
     * GUID Reference ID: *On demand*
     */
    guidReferenceId?: Integer;
    /**
     * In default group
     */
    showInDefaultGroup?: boolean;
    /**
     * Severity Impact Level
     */
    severityLevel?: ReportFlagsItem.severityLevel;
    /**
     * Code / Custom ID
     */
    customId?: string;
    /**
     * Category: ID of the resource by default OR *on demand* JSON object of type [ReportFlagCategories](#operation/getOneReportFlagCategories)
     */
    category?: (ReportFlagCategoriesId | ReportFlagCategoriesItem);
    /**
     * Link to a parent one: ID of the resource by default OR *on demand* JSON object of type [ReportFlags](#operation/getOneReportFlags)
     */
    alias?: (ReportFlagsId | ReportFlagsItem);
    /**
     * True if the report-flag item will be available to all regions
     */
    isGlobal?: boolean;
    /**
     * Only set a region, when is not global: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Template: ID of the resource by default OR *on demand* JSON object of type [ReportFlagTemplates](#operation/getOneReportFlagTemplates)
     */
    reportFlagTemplate?: (ReportFlagTemplatesId | ReportFlagTemplatesItem);
    /**
     * List of report flag groups that this flag is linked to: *On demand*. List of JSON objects of type [ReportFlagGroups](#operation/getOneReportFlagGroups)
     */
    reportFlagGroups?: Array<ReportFlagGroupsItem>;
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

export namespace ReportFlagsItem {

    /**
     * Severity Impact Level
     */
    export enum severityLevel {
        SEVERE = 'SEVERE',
        HIGH = 'HIGH',
        MODERATE = 'MODERATE',
        LOW = 'LOW',
        INFO = 'INFO',
    }


}