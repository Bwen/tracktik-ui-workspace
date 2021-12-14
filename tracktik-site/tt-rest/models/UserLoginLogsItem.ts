/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { UsersId } from './UsersId';
import type { UsersItem } from './UsersItem';

export type UserLoginLogsItem = {
    /**
     * User: ID of the resource by default OR *on demand* JSON object of type [Users](#operation/getOneUsers)
     */
    user?: (UsersId | UsersItem);
    /**
     * Login date & time
     */
    loggedInOn?: TimeStampDate;
    /**
     * IP address used by the user when logging in
     */
    ip?: Label;
    /**
     * User agent: *On demand*
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
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}