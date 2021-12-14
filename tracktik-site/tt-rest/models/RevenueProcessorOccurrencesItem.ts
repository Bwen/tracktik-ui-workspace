/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type RevenueProcessorOccurrencesItem = {
    /**
     * Status
     */
    status?: RevenueProcessorOccurrencesItem.status;
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
     * Site: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    site?: (ClientsId | ClientsItem);
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
    triggeredFrom?: RevenueProcessorOccurrencesItem.triggeredFrom;
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

export namespace RevenueProcessorOccurrencesItem {

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