/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { CheckpointsId } from './CheckpointsId';
import type { CheckpointsItem } from './CheckpointsItem';
import type { CommentsItem } from './CommentsItem';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoLocationsId } from './GeoLocationsId';
import type { GeoLocationsItem } from './GeoLocationsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { ReportFieldsItem } from './ReportFieldsItem';
import type { ReportFlagsId } from './ReportFlagsId';
import type { ReportFlagsItem } from './ReportFlagsItem';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { ReportTemplatesItem } from './ReportTemplatesItem';
import type { SiteLocationsId } from './SiteLocationsId';
import type { SiteLocationsItem } from './SiteLocationsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ReportsItem = {
    /**
     * Template: ID of the resource by default OR *on demand* JSON object of type [ReportTemplates](#operation/getOneReportTemplates)
     */
    reportTemplate?: (ReportTemplatesId | ReportTemplatesItem);
    /**
     * Reported on
     */
    reportDateTime?: DateTime;
    /**
     * This field was deprecated in favor of `submittedOn`
     */
    submitTime?: Integer;
    /**
     * Report Submitted on
     */
    submittedOn?: TimeStampNumber;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Field: *On demand*. List of JSON objects of type [ReportFields](#operation/getOneReportFields)
     */
    reportFields?: Array<ReportFieldsItem>;
    /**
     * Approved On
     */
    approvedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `approvedOn`
     */
    approvalDateTime?: TimeStampNumber;
    /**
     * Status
     */
    status?: ReportsItem.status;
    /**
     * Approved By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    approvedBy?: (EmployeesId | EmployeesItem);
    /**
     * Checkpoint: ID of the resource by default OR *on demand* JSON object of type [Checkpoints](#operation/getOneCheckpoints)
     */
    checkpoint?: (CheckpointsId | CheckpointsItem);
    /**
     * Report Category: ID of the resource by default OR *on demand* JSON object of type [ReportFlags](#operation/getOneReportFlags)
     */
    reportFlag?: (ReportFlagsId | ReportFlagsItem);
    /**
     * Site location: ID of the resource by default OR *on demand* JSON object of type [SiteLocations](#operation/getOneSiteLocations)
     */
    siteLocation?: (SiteLocationsId | SiteLocationsItem);
    /**
     * Geo Location: ID of the resource by default OR *on demand* JSON object of type GeoLocations
     */
    geoLocation?: (GeoLocationsId | GeoLocationsItem);
    /**
     * Report's comments: *On demand*. List of JSON objects of type Comments
     */
    comments?: Array<CommentsItem>;
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
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace ReportsItem {

    /**
     * Status
     */
    export enum status {
        APPROVED = 'APPROVED',
        NEW = 'NEW',
        VERIFICATION = 'VERIFICATION',
        PENDING = 'PENDING',
    }


}