/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportTemplatesId } from './ReportTemplatesId';

export type TaskTypesPut = {
    /**
     * Task Name
     */
    name: string;
    /**
     * Can Dispatch
     */
    dispatchable?: boolean;
    /**
     * Can Schedule
     */
    schedulable?: boolean;
    /**
     * Billable
     */
    billable?: boolean;
    /**
     * Prefix
     */
    prefix?: string;
    /**
     * Active
     */
    active?: boolean;
    /**
     * Report Template
     */
    reportTemplate?: ReportTemplatesId;
    /**
     * Priority
     */
    priority?: TaskTypesPut.priority;
}

export namespace TaskTypesPut {

    /**
     * Priority
     */
    export enum priority {
        LOW = 'LOW',
        IMPORTANT = 'IMPORTANT',
        URGENT = 'URGENT',
    }


}