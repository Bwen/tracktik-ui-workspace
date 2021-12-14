/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsItem } from './ClientsItem';
import type { ShiftsItem } from './ShiftsItem';

/**
 * Display the employee work status information
 */
export type MobileDevicesWorkStatus = {
    /**
     * The shift where work the employee
     */
    shift?: Array<ShiftsItem>;
    /**
     * The count of assigned tasks
     */
    assignedTasksCount?: number;
    /**
     * The employee work runsheet status
     */
    runsheetStatus?: {
/**
 * The name of the runsheet
 */
runsheetName?: string;
/**
 * The count of the completed item
 */
completedItemCount?: number;
/**
 * The count of the total item
 */
totalItemCount?: number;
/**
 * The status of the runsheet
 */
status?: string;
/**
 * The client of the runsheet
 */
currentSite?: Array<ClientsItem>;
};
    /**
     * The work session information
     */
    workSession?: {
/**
 * The start datetime of work session
 */
startDateTime?: string;
};
}