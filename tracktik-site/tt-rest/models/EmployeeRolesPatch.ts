/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { RolesId } from './RolesId';

export type EmployeeRolesPatch = {
    /**
     * Employee
     */
    employee?: EmployeesId;
    /**
     * Role
     */
    role?: RolesId;
}