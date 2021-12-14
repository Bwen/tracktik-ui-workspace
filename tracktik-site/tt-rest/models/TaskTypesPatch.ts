/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReportTemplatesId } from './ReportTemplatesId';

export type TaskTypesPatch = {
    /**
     * Task Name
     */
    name?: string;
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
    priority?: TaskTypesPatch.priority;
}

export namespace TaskTypesPatch {

    /**
     * Priority
     */
    export enum priority {
        LOW = 'LOW',
        IMPORTANT = 'IMPORTANT',
        URGENT = 'URGENT',
    }


}