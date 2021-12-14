/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { JSON } from './JSON';

export type UserNotificationSettingsPatch = {
    /**
     * Settings
     */
    communications?: JSON;
    /**
     * User
     */
    user?: EmployeesId;
}