/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Label } from './Label';

export type LoneWorkerPhonesPut = {
    /**
     * Phone number description
     */
    description?: Label;
    /**
     * Phone number, the `*` can be used as a placeholder for any value, example: (614)335-****
     */
    phone: Label;
    /**
     * Account
     */
    account: AccountsId;
}