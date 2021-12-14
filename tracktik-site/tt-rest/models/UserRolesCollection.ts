/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RolesId } from './RolesId';
import type { Uri } from './Uri';
import type { UsersId } from './UsersId';

export type UserRolesCollection = {
    /**
     * User
     */
    user?: UsersId;
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