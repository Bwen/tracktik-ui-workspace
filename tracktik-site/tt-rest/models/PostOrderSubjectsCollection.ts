/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Uri } from './Uri';

export type PostOrderSubjectsCollection = {
    /**
     * Subject
     */
    name?: string;
    /**
     * Account ID
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