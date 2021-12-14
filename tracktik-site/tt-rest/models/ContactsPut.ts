/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AddressesPut } from './AddressesPut';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';

export type ContactsPut = {
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
    address?: AddressesPut;
    /**
     * Account
     */
    account: AccountsId;
}