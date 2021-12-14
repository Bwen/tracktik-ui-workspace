/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type HolidayGroupsCollection = {
    /**
     * Holiday Group Region
     */
    region?: RegionsId;
    /**
     * Name
     */
    name?: Label;
    /**
     * Is Default
     */
    isDefault?: Boolean;
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