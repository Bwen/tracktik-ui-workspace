/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { Uri } from './Uri';
import type { WorkflowsId } from './WorkflowsId';

export type WorkflowStatusesCollection = {
    /**
     * The name of the status
     */
    name?: Label;
    /**
     * A tag to uniquely identify the status within its workflow
     */
    tag?: Label;
    /**
     * The workflow the status belongs to
     */
    workflow?: WorkflowsId;
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
}