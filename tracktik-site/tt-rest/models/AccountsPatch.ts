/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPatch } from './AddressesPatch';
import type { DispatchSlasId } from './DispatchSlasId';
import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type AccountsPatch = {
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
    type?: AccountsPatch.type;
    /**
     * Client Type
     */
    subType?: AccountsPatch.subType;
    /**
     * Address
     */
    address?: AddressesPatch;
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
    status?: AccountsPatch.status;
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

export namespace AccountsPatch {

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