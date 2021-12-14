/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type WhitelistedIpsCollection = {
    /**
     * IP Address
     */
    ip?: Label;
    /**
     * Label
     */
    label?: Label;
    /**
     * Account
     */
    account?: AccountsId;
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