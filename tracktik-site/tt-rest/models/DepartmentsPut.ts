/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type DepartmentsPut = {
    /**
     * Department
     */
    name: Label;
    /**
     * Description
     */
    details: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Region
     */
    region: RegionsId;
    /**
     * Allowed Areas
     */
    allowedAreas?: Array<GeoFencesId>;
    /**
     * Restricted Areas
     */
    restrictedAreas?: Array<GeoFencesId>;
    /**
     * Install Code
     */
    installCode?: Label;
}