/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type CitiesItem = {
    /**
     * Name
     */
    name?: Label;
    /**
     * Province
     */
    province?: Label;
    /**
     * State
     */
    state?: Label;
    /**
     * Country
     */
    country?: Label;
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