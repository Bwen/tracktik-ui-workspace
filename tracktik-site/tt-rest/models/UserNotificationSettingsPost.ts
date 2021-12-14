/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { JSON } from './JSON';

export type UserNotificationSettingsPost = {
    /**
     * Settings
     */
    communications: JSON;
    /**
     * User
     */
    user?: EmployeesId;
}