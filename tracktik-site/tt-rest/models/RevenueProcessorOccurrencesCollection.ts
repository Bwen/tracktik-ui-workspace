/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type RevenueProcessorOccurrencesCollection = {
    /**
     * Status
     */
    status?: RevenueProcessorOccurrencesCollection.status;
    /**
     * Execution Start Time
     */
    executionStartedOn?: TimeStampDate;
    /**
     * Execution End Time
     */
    executionEndedOn?: TimeStampDate;
    /**
     * Process Start Date
     */
    startedOn?: TimeStampDate;
    /**
     * Process End Date
     */
    endedOn?: TimeStampDate;
    /**
     * Site
     */
    site?: ClientsId;
    /**
     * Number of processed items
     */
    processedItems?: Integer;
    /**
     * Batch Id
     */
    batchId?: Integer;
    /**
     * Triggered by
     */
    triggeredFrom?: RevenueProcessorOccurrencesCollection.triggeredFrom;
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

export namespace RevenueProcessorOccurrencesCollection {

    /**
     * Status
     */
    export enum status {
        CREATED = 'CREATED',
        RUNNING = 'RUNNING',
        SUCCESS = 'SUCCESS',
        ERROR = 'ERROR',
    }

    /**
     * Triggered by
     */
    export enum triggeredFrom {
        TTC = 'TTC',
        TT_FLOW = 'TT-FLOW',
    }


}