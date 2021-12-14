/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { ReportFlagCategoriesId } from './ReportFlagCategoriesId';
import type { ReportFlagsId } from './ReportFlagsId';
import type { ReportFlagTemplatesId } from './ReportFlagTemplatesId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ReportFlagsCollection = {
    /**
     * Name
     */
    name?: string;
    /**
     * Details
     */
    details?: TextArea;
    /**
     * GUID Reference ID
     */
    guidReferenceId?: Integer;
    /**
     * In default group
     */
    showInDefaultGroup?: boolean;
    /**
     * Severity Impact Level
     */
    severityLevel?: ReportFlagsCollection.severityLevel;
    /**
     * Code / Custom ID
     */
    customId?: string;
    /**
     * Category
     */
    category?: ReportFlagCategoriesId;
    /**
     * Link to a parent one
     */
    alias?: ReportFlagsId;
    /**
     * True if the report-flag item will be available to all regions
     */
    isGlobal?: boolean;
    /**
     * Only set a region, when is not global
     */
    region?: RegionsId;
    /**
     * Template
     */
    reportFlagTemplate?: ReportFlagTemplatesId;
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

export namespace ReportFlagsCollection {

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