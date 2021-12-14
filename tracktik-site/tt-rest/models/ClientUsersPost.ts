/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { Email } from './Email';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';

export type ClientUsersPost = {
    /**
     * Client portal where this user was created
     */
    client: ClientsId;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * First name
     */
    firstName: Label;
    /**
     * Last name
     */
    lastName: Label;
    /**
     * Primary phone
     */
    primaryPhone?: PhoneNumber;
    /**
     * Secondary phone
     */
    secondaryPhone?: PhoneNumber;
    /**
     * UserName (Sign-in)
     */
    username?: string;
    /**
     * Email
     */
    email?: Email;
}