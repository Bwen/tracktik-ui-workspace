/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { ZonesId } from './ZonesId';

export type ZoneClientsPut = {
    /**
     * Zone
     */
    zone?: ZonesId;
    /**
     * Client
     */
    client?: ClientsId;
}