/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolesId } from './RolesId';
import type { UsersId } from './UsersId';

export type UserRolesPost = {
    /**
     * User
     */
    user: UsersId;
    /**
     * Role
     */
    role: RolesId;
}