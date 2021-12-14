/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesPost } from './AddressesPost';
import type { ClientsId } from './ClientsId';
import type { CSV } from './CSV';
import type { Email } from './Email';
import type { EmployeesPost } from './EmployeesPost';
import type { GeoFencesId } from './GeoFencesId';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { RegionsId } from './RegionsId';
import type { Uri } from './Uri';

export type ClientsPost = {
    /**
     * Company Name
     */
    company: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Parent Client
     */
    parentClient: ClientsId;
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
     * Type of Record
     */
    type: ClientsPost.type;
    /**
     * Region
     */
    region: RegionsId;
    /**
     * Address
     */
    address?: AddressesPost;
    /**
     * Email
     */
    email?: Email;
    /**
     * Fax number
     */
    faxNumber?: PhoneNumber;
    /**
     * Web site URL
     */
    website?: Uri;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Tags
     */
    tags?: CSV;
    /**
     * Sales Representative
     */
    salesRepresentative?: EmployeesPost;
    /**
     * Account Representative
     */
    accountRepresentative?: EmployeesPost;
    /**
     * Allowed Areas
     */
    allowedAreas?: Array<GeoFencesId>;
    /**
     * Restricted Areas
     */
    restrictedAreas?: Array<GeoFencesId>;
}

export namespace ClientsPost {

    /**
     * Type of Record
     */
    export enum type {
        CLIENT = 'CLIENT',
        SERVICE_LOCATION = 'SERVICE_LOCATION',
        MULTI_LOCATION_CLIENT = 'MULTI_LOCATION_CLIENT',
    }


}