/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportFlagCategoriesId } from './ReportFlagCategoriesId';
import type { ReportFlagGroupsId } from './ReportFlagGroupsId';
import type { ReportFlagsId } from './ReportFlagsId';
import type { TextArea } from './TextArea';

export type ReportFlagsPatch = {
    /**
     * Name
     */
    name?: string;
    /**
     * Details
     */
    details?: TextArea;
    /**
     * In default group
     */
    showInDefaultGroup?: boolean;
    /**
     * Severity Impact Level
     */
    severityLevel?: ReportFlagsPatch.severityLevel;
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
     * List of report flag groups that this flag is linked to
     */
    reportFlagGroups?: Array<ReportFlagGroupsId>;
}

export namespace ReportFlagsPatch {

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