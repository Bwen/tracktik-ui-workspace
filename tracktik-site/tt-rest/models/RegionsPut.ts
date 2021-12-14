/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPut } from './AddressesPut';
import type { Email } from './Email';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';

export type RegionsPut = {
    /**
     * Custom Id
     */
    customId?: Label;
    /**
     * Region Name
     */
    name: Label;
    /**
     * Company Name
     */
    company?: Label;
    /**
     * First Name
     */
    firstName?: Label;
    /**
     * Last Name
     */
    lastName?: Label;
    /**
     * Primary Phone
     */
    primaryPhone?: PhoneNumber;
    /**
     * Email
     */
    email?: Email;
    /**
     * Address
     */
    address?: AddressesPut;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Region Prefix
     */
    prefix?: Label;
}