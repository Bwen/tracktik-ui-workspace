/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolesId } from './RolesId';
import type { UsersId } from './UsersId';

export type UserRolesPatch = {
    /**
     * User
     */
    user?: UsersId;
    /**
     * Role
     */
    role?: RolesId;
}