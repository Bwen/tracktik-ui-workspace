/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPost } from './AddressesPost';
import type { DispatchSlasId } from './DispatchSlasId';
import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type AccountsPost = {
    /**
     * Name
     */
    name?: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Account Type
     */
    type?: AccountsPost.type;
    /**
     * Client Type
     */
    subType?: AccountsPost.subType;
    /**
     * Address
     */
    address?: AddressesPost;
    /**
     * Account Region
     */
    region?: RegionsId;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Status
     */
    status?: AccountsPost.status;
    /**
     * Allowed Areas
     */
    allowedAreas?: Array<GeoFencesId>;
    /**
     * Restricted Areas
     */
    restrictedAreas?: Array<GeoFencesId>;
    /**
     * Dispatch SLA
     */
    dispatchSla?: DispatchSlasId;
}

export namespace AccountsPost {

    /**
     * Account Type
     */
    export enum type {
        CLIENT = 'CLIENT',
        REGION = 'REGION',
        ZONE = 'ZONE',
        DEPARTMENT = 'DEPARTMENT',
    }

    /**
     * Client Type
     */
    export enum subType {
        CLIENT = 'CLIENT',
        MULTI = 'MULTI',
        SITE = 'SITE',
    }

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        CLOSED = 'CLOSED',
    }


}