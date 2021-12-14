/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { SortIndex } from './SortIndex';
import type { Uri } from './Uri';

export type RolesCollection = {
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
    portal?: RolesCollection.portal;
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
     * Available to all regions
     */
    isGlobal?: boolean;
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

export namespace RolesCollection {

    /**
     * Portal
     */
    export enum portal {
        ADMIN = 'ADMIN',
        STAFF = 'STAFF',
        CLIENT = 'CLIENT',
    }


}