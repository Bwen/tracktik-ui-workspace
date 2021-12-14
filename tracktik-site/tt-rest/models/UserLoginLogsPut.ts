/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { UsersId } from './UsersId';

export type UserLoginLogsPut = {
    /**
     * User
     */
    user?: UsersId;
    /**
     * Login date & time
     */
    loggedInOn?: TimeStampDate;
    /**
     * IP address used by the user when logging in
     */
    ip?: Label;
    /**
     * User agent
     */
    userAgent?: Label;
    /**
     * Login method
     */
    method?: Label;
}