/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportFlagGroupsId } from './ReportFlagGroupsId';
import type { ReportFlagsId } from './ReportFlagsId';

export type ReportFlagGroupAssignmentsPost = {
    /**
     * Report Flag
     */
    reportFlag?: ReportFlagsId;
    /**
     * Report Flag Group
     */
    reportFlagGroup?: ReportFlagGroupsId;
}