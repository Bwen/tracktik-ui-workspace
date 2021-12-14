/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { DateTime } from './DateTime';
import type { DispatchCustomLocationsCollection } from './DispatchCustomLocationsCollection';
import type { EmployeesId } from './EmployeesId';
import type { GuidResourcesId } from './GuidResourcesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { ReportsId } from './ReportsId';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { TaskPriceTiersId } from './TaskPriceTiersId';
import type { TaskTypesId } from './TaskTypesId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { VendorsCollection } from './VendorsCollection';
import type { WorkflowInstancesCollection } from './WorkflowInstancesCollection';

export type DispatchTasksCollection = {
    /**
     * Custom ID of the event
     */
    customId?: string;
    /**
     * Task Type
     */
    taskType?: TaskTypesId;
    /**
     * Priority
     */
    priority?: DispatchTasksCollection.priority;
    /**
     * Task Instructions
     */
    taskInstructions?: string;
    /**
     * Start Date / Time
     */
    startedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime?: TimeStampNumber;
    /**
     * End Date / Time
     */
    endedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `endedOn`
     */
    endDateTime?: TimeStampNumber;
    /**
     * Planned duration of the task
     */
    plannedDurationInMinutes?: Minutes;
    /**
     * Receive a reminder before the schedule time
     */
    reminderInMinutes?: Minutes;
    /**
     * The ID of the Client Alarm Organization
     */
    alarmOrganization?: ClientsId;
    /**
     * Client
     */
    client?: ClientsId;
    /**
     * This field was deprecated in favor of `client`
     */
    account?: ClientsId;
    /**
     * Price Tier
     */
    priceTier?: TaskPriceTiersId;
    /**
     * Status
     */
    status?: DispatchTasksCollection.status;
    /**
     * If the dispatch task is active or disabled
     */
    active?: DispatchTasksCollection.active;
    /**
     * Assigned User
     */
    assignedUser?: EmployeesId;
    /**
     * Assigned Group
     */
    assignedGroup?: GuidResourcesId;
    /**
     * Assigned Vendor
     */
    assignedVendor?: VendorsCollection;
    /**
     * Report Type
     */
    reportTemplate?: ReportTemplatesId;
    /**
     * Report
     */
    report?: ReportsId;
    /**
     * Workflow Instance
     */
    workflowInstance?: WorkflowInstancesCollection;
    /**
     * Custom Location
     */
    location?: DispatchCustomLocationsCollection;
    /**
     * Is A one time location
     */
    locationType?: DispatchTasksCollection.locationType;
    /**
     * Closed on
     */
    closedOn?: DateTime;
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

export namespace DispatchTasksCollection {

    /**
     * Priority
     */
    export enum priority {
        LOW = 'LOW',
        IMPORTANT = 'IMPORTANT',
        URGENT = 'URGENT',
    }

    /**
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        CLOSED = 'CLOSED',
    }

    /**
     * If the dispatch task is active or disabled
     */
    export enum active {
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
    }

    /**
     * Is A one time location
     */
    export enum locationType {
        ADDRESS = 'ADDRESS',
        COORDINATES = 'COORDINATES',
        ACCOUNT_ADDRESS = 'ACCOUNT_ADDRESS',
    }


}