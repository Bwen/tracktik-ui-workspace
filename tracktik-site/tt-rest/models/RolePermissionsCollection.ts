/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RolesId } from './RolesId';
import type { Uri } from './Uri';

export type RolePermissionsCollection = {
    /**
     * Permission
     */
    permission?: string;
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