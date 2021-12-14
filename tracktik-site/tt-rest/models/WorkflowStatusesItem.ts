/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Minutes } from './Minutes';
import type { Uri } from './Uri';
import type { WorkflowsId } from './WorkflowsId';
import type { WorkflowsItem } from './WorkflowsItem';

export type WorkflowStatusesItem = {
    /**
     * The name of the status
     */
    name?: Label;
    /**
     * A tag to uniquely identify the status within its workflow
     */
    tag?: Label;
    /**
     * The workflow the status belongs to: ID of the resource by default OR *on demand* JSON object of type [Workflows](#operation/getOneWorkflows)
     */
    workflow?: (WorkflowsId | WorkflowsItem);
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
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}