/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolesId } from './RolesId';

export type RolePermissionsPost = {
    /**
     * Permission
     */
    permission: string;
    /**
     * Role
     */
    role: RolesId;
}