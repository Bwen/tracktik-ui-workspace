/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { CheckpointsId } from './CheckpointsId';
import type { DateTime } from './DateTime';
import type { GeoLocationsPost } from './GeoLocationsPost';
import type { Integer } from './Integer';
import type { PositionsId } from './PositionsId';
import type { ReportFieldsId } from './ReportFieldsId';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type ReportsPost = {
    /**
     * Template
     */
    reportTemplate: ReportTemplatesId;
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
    account: AccountsId;
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Field
     */
    reportFields?: Array<ReportFieldsId>;
    /**
     * This field was deprecated in favor of `approvedOn`
     */
    approvalDateTime?: TimeStampNumber;
    /**
     * Status
     */
    status?: ReportsPost.status;
    /**
     * Checkpoint
     */
    checkpoint?: CheckpointsId;
    /**
     * Geo Location
     */
    geoLocation?: GeoLocationsPost;
}

export namespace ReportsPost {

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