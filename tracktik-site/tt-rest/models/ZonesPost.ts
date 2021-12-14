/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPost } from './AddressesPost';
import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type ZonesPost = {
    /**
     * Name
     */
    name: Label;
    /**
     * Description
     */
    description?: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Address
     */
    address?: AddressesPost;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Allowed Areas
     */
    allowedAreas?: Array<GeoFencesId>;
    /**
     * Restricted Areas
     */
    restrictedAreas?: Array<GeoFencesId>;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Preferred Language
     */
    preferredLanguage?: Label;
}