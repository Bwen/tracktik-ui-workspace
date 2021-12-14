/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AddressesCollection } from './AddressesCollection';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ContactsCollection = {
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
    address?: AddressesCollection;
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
}