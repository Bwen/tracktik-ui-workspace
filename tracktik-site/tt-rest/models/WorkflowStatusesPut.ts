/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { WorkflowsId } from './WorkflowsId';

export type WorkflowStatusesPut = {
    /**
     * The name of the status
     */
    name: Label;
    /**
     * A tag to uniquely identify the status within its workflow
     */
    tag: Label;
    /**
     * The workflow the status belongs to
     */
    workflow: WorkflowsId;
    /**
     * Format text color
     */
    formatBackgroundColor?: Label;
    /**
     * Format text color
     */
    formatTextColor?: Label;
    /**
     * Warning threshold (in minutes)
     */
    warningThresholdInMinutes?: Minutes;
    /**
     * Alert threshold (in minutes)
     */
    alertThresholdInMinutes?: Minutes;
}