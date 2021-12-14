/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolesId } from './RolesId';

export type RolePermissionsPut = {
    /**
     * Permission
     */
    permission: string;
    /**
     * Role
     */
    role: RolesId;
}