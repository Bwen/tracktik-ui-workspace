/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type TaxClassesCollection = {
    /**
     * Tax Class
     */
    name?: string;
    /**
     * Status
     */
    status?: TaxClassesCollection.status;
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Region
     */
    region?: RegionsId;
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

export namespace TaxClassesCollection {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }


}