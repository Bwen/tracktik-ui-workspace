/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';
import type { ZonesId } from './ZonesId';

export type ZoneClientsCollection = {
    /**
     * Zone
     */
    zone?: ZonesId;
    /**
     * Client
     */
    client?: ClientsId;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
}