/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RolesId } from './RolesId';
import type { RolesItem } from './RolesItem';
import type { Uri } from './Uri';
import type { UsersId } from './UsersId';
import type { UsersItem } from './UsersItem';

export type UserRolesItem = {
    /**
     * User: ID of the resource by default OR *on demand* JSON object of type [Users](#operation/getOneUsers)
     */
    user?: (UsersId | UsersItem);
    /**
     * Role: ID of the resource by default OR *on demand* JSON object of type [Roles](#operation/getOneRoles)
     */
    role?: (RolesId | RolesItem);
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