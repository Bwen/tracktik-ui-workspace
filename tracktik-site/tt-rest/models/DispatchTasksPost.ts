/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { DispatchCustomLocationsPost } from './DispatchCustomLocationsPost';
import type { EmployeesId } from './EmployeesId';
import type { GuidResourcesId } from './GuidResourcesId';
import type { Minutes } from './Minutes';
import type { ReportsId } from './ReportsId';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { TaskPriceTiersId } from './TaskPriceTiersId';
import type { TaskTypesId } from './TaskTypesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type DispatchTasksPost = {
    /**
     * Custom ID of the event
     */
    customId?: string;
    /**
     * Task Type
     */
    taskType: TaskTypesId;
    /**
     * Priority
     */
    priority?: DispatchTasksPost.priority;
    /**
     * Task Instructions
     */
    taskInstructions?: string;
    /**
     * Start Date / Time
     */
    startedOn: TimeStampNumber;
    /**
     * This field was deprecated in favor of `startedOn`
     */
    startDateTime: TimeStampNumber;
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
    status?: DispatchTasksPost.status;
    /**
     * Assigned User
     */
    assignedUser?: EmployeesId;
    /**
     * Assigned Group
     */
    assignedGroup?: GuidResourcesId;
    /**
     * Report Type
     */
    reportTemplate?: ReportTemplatesId;
    /**
     * Report
     */
    report: ReportsId;
    /**
     * Custom Location
     */
    location?: DispatchCustomLocationsPost;
    /**
     * Is A one time location
     */
    locationType?: DispatchTasksPost.locationType;
}

export namespace DispatchTasksPost {

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
     * Is A one time location
     */
    export enum locationType {
        ADDRESS = 'ADDRESS',
        COORDINATES = 'COORDINATES',
        ACCOUNT_ADDRESS = 'ACCOUNT_ADDRESS',
    }


}