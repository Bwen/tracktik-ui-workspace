/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { DispatchCustomLocationsPatch } from './DispatchCustomLocationsPatch';
import type { EmployeesId } from './EmployeesId';
import type { GuidResourcesId } from './GuidResourcesId';
import type { Minutes } from './Minutes';
import type { ReportsId } from './ReportsId';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { TaskPriceTiersId } from './TaskPriceTiersId';
import type { TaskTypesId } from './TaskTypesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type DispatchTasksPatch = {
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
    priority?: DispatchTasksPatch.priority;
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
    status?: DispatchTasksPatch.status;
    /**
     * If the dispatch task is active or disabled
     */
    active?: DispatchTasksPatch.active;
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
    report?: ReportsId;
    /**
     * Custom Location
     */
    location?: DispatchCustomLocationsPatch;
    /**
     * Is A one time location
     */
    locationType?: DispatchTasksPatch.locationType;
}

export namespace DispatchTasksPatch {

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