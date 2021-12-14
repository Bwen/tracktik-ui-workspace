/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesCollection } from './AddressesCollection';
import type { Email } from './Email';
import type { EmployeesId } from './EmployeesId';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type RegionsCollection = {
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
    address?: AddressesCollection;
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
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
    /**
     * Picture
     */
    logo?: Image;
}