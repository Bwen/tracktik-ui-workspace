/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';
import type { EmployeesId } from './EmployeesId';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type VendorsCollection = {
    /**
     * Company
     */
    name?: Label;
    /**
     * Main Email
     */
    mainEmail?: Email;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
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
     * First Name
     */
    firstName?: Label;
    /**
     * Last Name
     */
    lastName?: Label;
    /**
     * Full Name
     */
    fullName?: Label;
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
     * Picture
     */
    avatar?: Image;
}