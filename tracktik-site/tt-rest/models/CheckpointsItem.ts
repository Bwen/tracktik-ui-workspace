/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoLocationsId } from './GeoLocationsId';
import type { GeoLocationsItem } from './GeoLocationsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { ReportFlagsId } from './ReportFlagsId';
import type { ReportFlagsItem } from './ReportFlagsItem';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { ReportTemplatesItem } from './ReportTemplatesItem';
import type { SiteLocationsId } from './SiteLocationsId';
import type { SiteLocationsItem } from './SiteLocationsItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type CheckpointsItem = {
    /**
     * Name
     */
    name?: string;
    /**
     * Details
     */
    instructions?: TextArea;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Active
     */
    active?: boolean;
    /**
     * Scan action type
     */
    scanActionType?: CheckpointsItem.scanActionType;
    /**
     * Scan Action Message
     */
    scanActionMessage?: TextArea;
    /**
     * Report Template: ID of the resource by default OR *on demand* JSON object of type [ReportTemplates](#operation/getOneReportTemplates)
     */
    scanReportTemplate?: (ReportTemplatesId | ReportTemplatesItem);
    /**
     * Question
     */
    scanActionQuestion?: string;
    /**
     * Scan Action Multiple (Array): *On demand*
     */
    scanActionMultiple?: any;
    /**
     * Monitoring Option
     */
    monitoringOption?: CheckpointsItem.monitoringOption;
    /**
     * This field was deprecated in favor of `monitoringOption`
     */
    monitorType?: CheckpointsItem.monitorType;
    /**
     * QR Code or NFC Tag: *On demand*
     */
    scanCode?: string;
    /**
     * This field was deprecated in favor of `manualScan`: *On demand*
     */
    allowManualScan?: boolean;
    /**
     * Allow manual scanning (V.5.2): *On demand*
     */
    manualScan?: string;
    /**
     * Exception Category: ID of the resource by default OR *on demand* JSON object of type [ReportFlags](#operation/getOneReportFlags)
     */
    exceptionCategory?: (ReportFlagsId | ReportFlagsItem);
    /**
     * Located At: ID of the resource by default OR *on demand* JSON object of type [SiteLocations](#operation/getOneSiteLocations)
     */
    siteLocation?: (SiteLocationsId | SiteLocationsItem);
    /**
     * Geo Location: ID of the resource by default OR *on demand* JSON object of type GeoLocations
     */
    geoLocation?: (GeoLocationsId | GeoLocationsItem);
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

export namespace CheckpointsItem {

    /**
     * Scan action type
     */
    export enum scanActionType {
        SCAN_ONLY = 'SCAN_ONLY',
        MESSAGE = 'MESSAGE',
        REPORT = 'REPORT',
        EXCEPTION_RANGE = 'EXCEPTION_RANGE',
        EXCEPTION_NO = 'EXCEPTION_NO',
        EXCEPTION_MULTIPLE = 'EXCEPTION_MULTIPLE',
        EXCEPTION_YES = 'EXCEPTION_YES',
    }

    /**
     * Monitoring Option
     */
    export enum monitoringOption {
        TIME_INTERVAL = 'TIME_INTERVAL',
        NONE = 'NONE',
        PART_OF_TOUR = 'PART_OF_TOUR',
    }

    /**
     * This field was deprecated in favor of `monitoringOption`
     */
    export enum monitorType {
        TIME_INTERVAL = 'TIME_INTERVAL',
        NONE = 'NONE',
        PART_OF_TOUR = 'PART_OF_TOUR',
    }


}