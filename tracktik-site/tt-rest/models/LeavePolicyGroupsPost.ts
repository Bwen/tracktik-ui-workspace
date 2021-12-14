/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Label } from './Label';
import type { LeavePoliciesId } from './LeavePoliciesId';
import type { RegionsId } from './RegionsId';

export type LeavePolicyGroupsPost = {
    /**
     * Leave Policy Group Name
     */
    name: Label;
    /**
     * Region
     */
    region: RegionsId;
    /**
     * Leave Policies
     */
    leavePolicies?: Array<LeavePoliciesId>;
    /**
     * Employees
     */
    employees?: Array<EmployeesId>;
}