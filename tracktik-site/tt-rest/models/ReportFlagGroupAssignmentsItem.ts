/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportFlagGroupsId } from './ReportFlagGroupsId';
import type { ReportFlagGroupsItem } from './ReportFlagGroupsItem';
import type { ReportFlagsId } from './ReportFlagsId';
import type { ReportFlagsItem } from './ReportFlagsItem';
import type { Uri } from './Uri';

export type ReportFlagGroupAssignmentsItem = {
    /**
     * Report Flag: ID of the resource by default OR *on demand* JSON object of type [ReportFlags](#operation/getOneReportFlags)
     */
    reportFlag?: (ReportFlagsId | ReportFlagsItem);
    /**
     * Report Flag Group: ID of the resource by default OR *on demand* JSON object of type [ReportFlagGroups](#operation/getOneReportFlagGroups)
     */
    reportFlagGroup?: (ReportFlagGroupsId | ReportFlagGroupsItem);
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
}