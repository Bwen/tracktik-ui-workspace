/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AddressesPost } from './AddressesPost';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';

export type ContactsPost = {
    /**
     * First Name
     */
    firstName?: Label;
    /**
     * Last Name
     */
    lastName?: Label;
    /**
     * Job Title
     */
    jobTitle?: Label;
    /**
     * Primary Phone
     */
    primaryPhone?: PhoneNumber;
    /**
     * Secondary Phone
     */
    secondaryPhone?: PhoneNumber;
    /**
     * Fax
     */
    fax?: PhoneNumber;
    /**
     * Email
     */
    email?: Label;
    /**
     * Address
     */
    address?: AddressesPost;
    /**
     * Account
     */
    account: AccountsId;
}