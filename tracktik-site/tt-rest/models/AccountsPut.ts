/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPut } from './AddressesPut';
import type { DispatchSlasId } from './DispatchSlasId';
import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type AccountsPut = {
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
    type?: AccountsPut.type;
    /**
     * Client Type
     */
    subType?: AccountsPut.subType;
    /**
     * Address
     */
    address?: AddressesPut;
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
    status?: AccountsPut.status;
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

export namespace AccountsPut {

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