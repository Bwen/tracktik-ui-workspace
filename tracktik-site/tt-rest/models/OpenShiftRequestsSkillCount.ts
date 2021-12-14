/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Display present and total skill count
 */
export type OpenShiftRequestsSkillCount = {
    /**
     * Number of required skills fulfilled by the requester
     */
    present?: number;
    /**
     * Total number of hard and conditional skill requirements for this request
     */
    total?: number;
}