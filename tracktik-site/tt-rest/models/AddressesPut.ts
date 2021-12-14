/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';

export type AddressesPut = {
    /**
     * Address
     */
    addressLine1: Label;
    /**
     * Address Line 2
     */
    addressLine2?: Label;
    /**
     * City
     */
    city: Label;
    /**
     * Country
     */
    country: Label;
    /**
     * State/Province
     */
    state: Label;
    /**
     * Zip/Postal Code
     */
    postalCode: Label;
}