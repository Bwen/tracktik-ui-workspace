/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Uri } from './Uri';

export type GuidResourcesCollection = {
    /**
     * Resource GUID
     */
    guid?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: string;
    /**
     * System ID
     */
    id?: Integer;
}