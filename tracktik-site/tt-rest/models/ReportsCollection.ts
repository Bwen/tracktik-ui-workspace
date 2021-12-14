/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { CheckpointsId } from './CheckpointsId';
import type { DateTime } from './DateTime';
import type { EmployeesId } from './EmployeesId';
import type { GeoLocationsCollection } from './GeoLocationsCollection';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { ReportFlagsCollection } from './ReportFlagsCollection';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { SiteLocationsId } from './SiteLocationsId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ReportsCollection = {
    /**
     * Template
     */
    reportTemplate?: ReportTemplatesId;
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
     * Account
     */
    account?: AccountsId;
    /**
     * Position
     */
    position?: PositionsId;
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
    status?: ReportsCollection.status;
    /**
     * Approved By
     */
    approvedBy?: EmployeesId;
    /**
     * Checkpoint
     */
    checkpoint?: CheckpointsId;
    /**
     * Report Category
     */
    reportFlag?: ReportFlagsCollection;
    /**
     * Site location
     */
    siteLocation?: SiteLocationsId;
    /**
     * Geo Location
     */
    geoLocation?: GeoLocationsCollection;
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
    /**
     * Time Zone
     */
    timeZone?: string;
}

export namespace ReportsCollection {

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