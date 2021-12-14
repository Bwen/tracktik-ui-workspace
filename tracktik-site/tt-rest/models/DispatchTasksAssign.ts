/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';

export type DispatchTasksAssign = {
    /**
     * Assign to
     */
    user: EmployeesId;
    /**
     * Notify user
     */
    notify: boolean;
}