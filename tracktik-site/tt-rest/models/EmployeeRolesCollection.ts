/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RolesId } from './RolesId';
import type { Uri } from './Uri';

export type EmployeeRolesCollection = {
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Role
     */
    role?: RolesId;
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