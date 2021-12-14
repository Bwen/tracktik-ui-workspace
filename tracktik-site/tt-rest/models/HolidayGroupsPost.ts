/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';

export type HolidayGroupsPost = {
    /**
     * Holiday Group Region
     */
    region?: RegionsId;
    /**
     * Name
     */
    name: Label;
    /**
     * Is Default
     */
    isDefault: Boolean;
}