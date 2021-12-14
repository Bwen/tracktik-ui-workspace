/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type LoneWorkerPhonesItem = {
    /**
     * Phone number description
     */
    description?: Label;
    /**
     * Phone number, the `*` can be used as a placeholder for any value, example: (614)335-****
     */
    phone?: Label;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}