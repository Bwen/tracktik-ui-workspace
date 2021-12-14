/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionsId } from './RegionsId';

export type HolidayRecurrentsPost = {
    /**
     * Holiday Name
     */
    label: string;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Code
     */
    code: string;
}