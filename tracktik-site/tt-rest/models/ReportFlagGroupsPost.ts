/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportFlagsId } from './ReportFlagsId';

export type ReportFlagGroupsPost = {
    /**
     * name
     */
    name: string;
    /**
     * Code / Custom ID
     */
    customId?: string;
    /**
     * List of report flags on this group
     */
    reportFlags?: Array<ReportFlagsId>;
}