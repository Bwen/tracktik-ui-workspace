/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type HolidayRecurrentsCollection = {
    /**
     * Holiday Name
     */
    label?: string;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Code
     */
    code?: string;
    /**
     * Next occurrence
     */
    nextOccurrence?: Label;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}