/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CitiesItem } from './CitiesItem';
import type { Email } from './Email';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { TaskTypesItem } from './TaskTypesItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type VendorsItem = {
    /**
     * Company
     */
    name?: Label;
    /**
     * Main Email
     */
    mainEmail?: Email;
    /**
     * Cities: *On demand*. List of JSON objects of type [Cities](#operation/getOneCities)
     */
    cities?: Array<CitiesItem>;
    /**
     * Service Types: *On demand*. List of JSON objects of type [TaskTypes](#operation/getOneTaskTypes)
     */
    serviceTypes?: Array<TaskTypesItem>;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
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