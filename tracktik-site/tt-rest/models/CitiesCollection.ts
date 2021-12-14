/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type CitiesCollection = {
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