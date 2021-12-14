/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';
import type { ZonesId } from './ZonesId';
import type { ZonesItem } from './ZonesItem';

export type ZoneClientsItem = {
    /**
     * Zone: ID of the resource by default OR *on demand* JSON object of type [Zones](#operation/getOneZones)
     */
    zone?: (ZonesId | ZonesItem);
    /**
     * Client: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    client?: (ClientsId | ClientsItem);
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
}