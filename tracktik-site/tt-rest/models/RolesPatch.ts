/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RolePermissionsId } from './RolePermissionsId';
import type { SortIndex } from './SortIndex';

export type RolesPatch = {
    /**
     * Name
     */
    name?: Label;
    /**
     * Description
     */
    description?: Label;
    /**
     * Portal
     */
    portal?: RolesPatch.portal;
    /**
     * Order
     */
    order?: SortIndex;
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

export namespace RolesPatch {

    /**
     * Portal
     */
    export enum portal {
        ADMIN = 'ADMIN',
        STAFF = 'STAFF',
        CLIENT = 'CLIENT',
    }


}