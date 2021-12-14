/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CitiesId } from './CitiesId';
import type { Email } from './Email';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { TaskTypesId } from './TaskTypesId';

export type VendorsPost = {
    /**
     * Company
     */
    name: Label;
    /**
     * Main Email
     */
    mainEmail: Email;
    /**
     * Cities
     */
    cities?: Array<CitiesId>;
    /**
     * Service Types
     */
    serviceTypes?: Array<TaskTypesId>;
    /**
     * First Name
     */
    firstName: Label;
    /**
     * Last Name
     */
    lastName: Label;
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
}