/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { CommentsItem } from './CommentsItem';
import type { DateTime } from './DateTime';
import type { DispatchCustomLocationsId } from './DispatchCustomLocationsId';
import type { DispatchCustomLocationsItem } from './DispatchCustomLocationsItem';
import type { DispatchTaskLogsItem } from './DispatchTaskLogsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GuidResourcesId } from './GuidResourcesId';
import type { GuidResourcesItem } from './GuidResourcesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { ReportsId } from './ReportsId';
import type { ReportsItem } from './ReportsItem';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { ReportTemplatesItem } from './ReportTemplatesItem';
import type { TaskPriceTiersId } from './TaskPriceTiersId';
import type { TaskPriceTiersItem } from './TaskPriceTiersItem';
import type { TaskTypesId } from './TaskTypesId';
import type { TaskTypesItem } from './TaskTypesItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { VendorsId } from './VendorsId';
import type { VendorsItem } from './VendorsItem';
import type { WorkflowInstancesId } from './WorkflowInstancesId';
import type { WorkflowInstancesItem } from './WorkflowInstancesItem';

export type DispatchTasksItem = {
    /**
     * Custom ID of the event
     */
    customId?: string;
    /**
     * Task Type: ID of the resource by default OR *on demand* JSON object of type [TaskTypes](#operation/getOneTaskTypes)
     */
    taskType?: (TaskTypesId | TaskTypesItem);
    /**
     * Priority
     */
    priority?: DispatchTasksItem.priority;
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
     * The ID of the Client Alarm Organization: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    alarmOrganization?: (ClientsId | ClientsItem);
    /**
     * Client: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    client?: (ClientsId | ClientsItem);
    /**
     * This field was deprecated in favor of `client`: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    account?: (ClientsId | ClientsItem);
    /**
     * Price Tier: ID of the resource by default OR *on demand* JSON object of type [TaskPriceTiers](#operation/getOneTaskPriceTiers)
     */
    priceTier?: (TaskPriceTiersId | TaskPriceTiersItem);
    /**
     * Status
     */
    status?: DispatchTasksItem.status;
    /**
     * If the dispatch task is active or disabled
     */
    active?: DispatchTasksItem.active;
    /**
     * Assigned User: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    assignedUser?: (EmployeesId | EmployeesItem);
    /**
     * Assigned Group: ID of the resource by default OR *on demand* JSON object of type GuidResources
     */
    assignedGroup?: (GuidResourcesId | GuidResourcesItem);
    /**
     * Assigned Vendor: ID of the resource by default OR *on demand* JSON object of type [Vendors](#operation/getOneVendors)
     */
    assignedVendor?: (VendorsId | VendorsItem);
    /**
     * Report Type: ID of the resource by default OR *on demand* JSON object of type [ReportTemplates](#operation/getOneReportTemplates)
     */
    reportTemplate?: (ReportTemplatesId | ReportTemplatesItem);
    /**
     * Report: ID of the resource by default OR *on demand* JSON object of type [Reports](#operation/getOneReports)
     */
    report?: (ReportsId | ReportsItem);
    /**
     * Workflow Instance: ID of the resource by default OR *on demand* JSON object of type [WorkflowInstances](#operation/getOneWorkflowInstances)
     */
    workflowInstance?: (WorkflowInstancesId | WorkflowInstancesItem);
    /**
     * Custom Location: ID of the resource by default OR *on demand* JSON object of type [DispatchCustomLocations](#operation/getOneDispatchCustomLocations)
     */
    location?: (DispatchCustomLocationsId | DispatchCustomLocationsItem);
    /**
     * Is A one time location
     */
    locationType?: DispatchTasksItem.locationType;
    /**
     * Groups together billing notes and comments: *On demand*. List of JSON objects of type Comments
     */
    notes?: Array<CommentsItem>;
    /**
     * Dispatch Task Logs: *On demand*. List of JSON objects of type DispatchTaskLogs
     */
    logs?: Array<DispatchTaskLogsItem>;
    /**
     * Closed on
     */
    closedOn?: DateTime;
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

export namespace DispatchTasksItem {

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