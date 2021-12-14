/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';

export type ReportFlagCategoriesPatch = {
    /**
     * Name
     */
    name?: string;
    /**
     * Code / Custom ID
     */
    customId?: string;
    /**
     * Available to all regions
     */
    isGlobal?: Boolean;
}