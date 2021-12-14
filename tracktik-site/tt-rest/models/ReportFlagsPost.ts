/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionsId } from './RegionsId';
import type { ReportFlagCategoriesId } from './ReportFlagCategoriesId';
import type { ReportFlagGroupsId } from './ReportFlagGroupsId';
import type { ReportFlagsId } from './ReportFlagsId';
import type { ReportFlagTemplatesId } from './ReportFlagTemplatesId';
import type { TextArea } from './TextArea';

export type ReportFlagsPost = {
    /**
     * Name
     */
    name: string;
    /**
     * Details
     */
    details?: TextArea;
    /**
     * In default group
     */
    showInDefaultGroup: boolean;
    /**
     * Severity Impact Level
     */
    severityLevel?: ReportFlagsPost.severityLevel;
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
    isGlobal: boolean;
    /**
     * Only set a region, when is not global
     */
    region?: RegionsId;
    /**
     * Template
     */
    reportFlagTemplate?: ReportFlagTemplatesId;
    /**
     * List of report flag groups that this flag is linked to
     */
    reportFlagGroups?: Array<ReportFlagGroupsId>;
}

export namespace ReportFlagsPost {

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