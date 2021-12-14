/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPost } from './AddressesPost';
import type { Email } from './Email';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { RegionsId } from './RegionsId';

export type RegionsPost = {
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
    address?: AddressesPost;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Parent Region
     */
    parentRegion?: RegionsId;
    /**
     * Region Prefix
     */
    prefix?: Label;
}