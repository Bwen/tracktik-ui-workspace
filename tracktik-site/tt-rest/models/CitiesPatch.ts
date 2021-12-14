/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';

export type CitiesPatch = {
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
}