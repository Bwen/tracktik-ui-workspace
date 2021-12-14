/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';

export type PostOrderSubjectsPut = {
    /**
     * Subject
     */
    name: string;
    /**
     * Account ID
     */
    account: AccountsId;
}