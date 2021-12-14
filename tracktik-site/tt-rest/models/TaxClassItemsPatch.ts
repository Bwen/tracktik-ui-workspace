/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { TaxClassesId } from './TaxClassesId';

export type TaxClassItemsPatch = {
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
}