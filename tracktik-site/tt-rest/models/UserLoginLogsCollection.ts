/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { UsersId } from './UsersId';

export type UserLoginLogsCollection = {
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