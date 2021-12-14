/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesCollection } from './AddressesCollection';
import type { ClientsId } from './ClientsId';
import type { CSV } from './CSV';
import type { Date } from './Date';
import type { Email } from './Email';
import type { EmployeesCollection } from './EmployeesCollection';
import type { EmployeesId } from './EmployeesId';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ClientsCollection = {
    /**
     * Company Name
     */
    name?: Label;
    /**
     * Company Name
     */
    company?: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Parent Client
     */
    parentClient?: ClientsId;
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
    type?: ClientsCollection.type;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Status
     */
    status?: ClientsCollection.status;
    /**
     * Address
     */
    address?: AddressesCollection;
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
    salesRepresentative?: EmployeesCollection;
    /**
     * Account Representative
     */
    accountRepresentative?: EmployeesCollection;
    /**
     * Closed date
     */
    closedDate?: Date;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Picture
     */
    avatar?: Image;
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

export namespace ClientsCollection {

    /**
     * Type of Record
     */
    export enum type {
        CLIENT = 'CLIENT',
        SERVICE_LOCATION = 'SERVICE_LOCATION',
        MULTI_LOCATION_CLIENT = 'MULTI_LOCATION_CLIENT',
    }

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        CLOSED = 'CLOSED',
    }


}