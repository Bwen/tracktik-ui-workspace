/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { RegionsId } from './RegionsId';

export type ReportFlagCategoriesPost = {
    /**
     * Name
     */
    name: string;
    /**
     * Code / Custom ID
     */
    customId?: string;
    /**
     * Available to all regions
     */
    isGlobal: Boolean;
    /**
     * Available Region
     */
    region?: RegionsId;
}