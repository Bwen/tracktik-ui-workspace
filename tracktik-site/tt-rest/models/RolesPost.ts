/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RolePermissionsId } from './RolePermissionsId';
import type { SortIndex } from './SortIndex';

export type RolesPost = {
    /**
     * Name
     */
    name: Label;
    /**
     * Description
     */
    description: Label;
    /**
     * Portal
     */
    portal: RolesPost.portal;
    /**
     * Order
     */
    order: SortIndex;
    /**
     * This field was deprecated in favor of `region`
     */
    account?: AccountsId;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Permissions
     */
    permissions?: Array<RolePermissionsId>;
    /**
     * Available to all regions
     */
    isGlobal?: boolean;
}

export namespace RolesPost {

    /**
     * Portal
     */
    export enum portal {
        ADMIN = 'ADMIN',
        STAFF = 'STAFF',
        CLIENT = 'CLIENT',
    }


}