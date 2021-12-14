/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { RolePermissionsItem } from './RolePermissionsItem';
import type { SortIndex } from './SortIndex';
import type { Uri } from './Uri';

export type RolesItem = {
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
    portal?: RolesItem.portal;
    /**
     * Order
     */
    order?: SortIndex;
    /**
     * This field was deprecated in favor of `region`: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Permissions: *On demand*. List of JSON objects of type [RolePermissions](#operation/getOneRolePermissions)
     */
    permissions?: Array<RolePermissionsItem>;
    /**
     * Available to all regions
     */
    isGlobal?: boolean;
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

export namespace RolesItem {

    /**
     * Portal
     */
    export enum portal {
        ADMIN = 'ADMIN',
        STAFF = 'STAFF',
        CLIENT = 'CLIENT',
    }


}