/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Label } from './Label';

export type WhitelistedIpsPatch = {
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
}