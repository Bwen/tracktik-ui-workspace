/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { GeoLocationsCollection } from './GeoLocationsCollection';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsId } from './PositionsId';
import type { ReportFlagsId } from './ReportFlagsId';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { SiteLocationsId } from './SiteLocationsId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type CheckpointsCollection = {
    /**
     * Name
     */
    name?: string;
    /**
     * Details
     */
    instructions?: TextArea;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Active
     */
    active?: boolean;
    /**
     * Scan action type
     */
    scanActionType?: CheckpointsCollection.scanActionType;
    /**
     * Scan Action Message
     */
    scanActionMessage?: TextArea;
    /**
     * Report Template
     */
    scanReportTemplate?: ReportTemplatesId;
    /**
     * Question
     */
    scanActionQuestion?: string;
    /**
     * Scan Action Multiple (Array)
     */
    scanActionMultiple?: any;
    /**
     * Monitoring Option
     */
    monitoringOption?: CheckpointsCollection.monitoringOption;
    /**
     * This field was deprecated in favor of `monitoringOption`
     */
    monitorType?: CheckpointsCollection.monitorType;
    /**
     * QR Code or NFC Tag
     */
    scanCode?: string;
    /**
     * This field was deprecated in favor of `manualScan`
     */
    allowManualScan?: boolean;
    /**
     * Allow manual scanning (V.5.2)
     */
    manualScan?: string;
    /**
     * Exception Category
     */
    exceptionCategory?: ReportFlagsId;
    /**
     * Located At
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
}

export namespace CheckpointsCollection {

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