/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPatch } from './AddressesPatch';
import type { Email } from './Email';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';

export type RegionsPatch = {
    /**
     * Custom Id
     */
    customId?: Label;
    /**
     * Region Name
     */
    name?: Label;
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
    address?: AddressesPatch;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Region Prefix
     */
    prefix?: Label;
}