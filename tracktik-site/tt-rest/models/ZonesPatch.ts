/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPatch } from './AddressesPatch';
import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type ZonesPatch = {
    /**
     * Name
     */
    name?: Label;
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
    address?: AddressesPatch;
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