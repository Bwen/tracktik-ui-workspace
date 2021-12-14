/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportFlagGroupsId } from './ReportFlagGroupsId';
import type { ReportFlagsId } from './ReportFlagsId';
import type { Uri } from './Uri';

export type ReportFlagGroupAssignmentsCollection = {
    /**
     * Report Flag
     */
    reportFlag?: ReportFlagsId;
    /**
     * Report Flag Group
     */
    reportFlagGroup?: ReportFlagGroupsId;
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
}