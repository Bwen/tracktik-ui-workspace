/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';
import type { Uri } from './Uri';

export type TaxClassItemsCollection = {
    /**
     * The percentage
     */
    percentage?: Decimal;
    /**
     * Tax Code
     */
    code?: string;
    /**
     * Tax Number
     */
    number?: string;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
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