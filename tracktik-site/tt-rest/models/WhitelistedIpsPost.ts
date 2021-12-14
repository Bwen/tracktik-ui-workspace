/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Label } from './Label';

export type WhitelistedIpsPost = {
    /**
     * IP Address
     */
    ip: Label;
    /**
     * Label
     */
    label?: Label;
    /**
     * Account
     */
    account: AccountsId;
}