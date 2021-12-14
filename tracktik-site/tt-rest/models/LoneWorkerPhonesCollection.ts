/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type LoneWorkerPhonesCollection = {
    /**
     * Phone number description
     */
    description?: Label;
    /**
     * Phone number, the `*` can be used as a placeholder for any value, example: (614)335-****
     */
    phone?: Label;
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