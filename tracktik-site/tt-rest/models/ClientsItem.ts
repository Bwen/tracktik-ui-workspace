/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesId } from './AddressesId';
import type { AddressesItem } from './AddressesItem';
import type { ClientsId } from './ClientsId';
import type { ContactsItem } from './ContactsItem';
import type { CSV } from './CSV';
import type { Date } from './Date';
import type { Email } from './Email';
import type { EmployeeAccountAssignmentsItem } from './EmployeeAccountAssignmentsItem';
import type { EmployeeAccountBansItem } from './EmployeeAccountBansItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoFencesItem } from './GeoFencesItem';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { NotesItem } from './NotesItem';
import type { PhoneNumber } from './PhoneNumber';
import type { PositionsItem } from './PositionsItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { ZonesItem } from './ZonesItem';

export type ClientsItem = {
    /**
     * Company Name: *On demand*
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
     * Parent Client: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    parentClient?: (ClientsId | ClientsItem);
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
    type?: ClientsItem.type;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Status
     */
    status?: ClientsItem.status;
    /**
     * Positions: *On demand*. List of JSON objects of type [Positions](#operation/getOnePositions)
     */
    positions?: Array<PositionsItem>;
    /**
     * Address: ID of the resource by default OR *on demand* JSON object of type Addresses
     */
    address?: (AddressesId | AddressesItem);
    /**
     * Notes: *On demand*. List of JSON objects of type Notes
     */
    notes?: Array<NotesItem>;
    /**
     * Assigned Employees: *On demand*. List of JSON objects of type [EmployeeAccountAssignments](#operation/getOneEmployeeAccountAssignments)
     */
    employeeAssignments?: Array<EmployeeAccountAssignmentsItem>;
    /**
     * Banned Employees: *On demand*. List of JSON objects of type [EmployeeAccountBans](#operation/getOneEmployeeAccountBans)
     */
    employeeBans?: Array<EmployeeAccountBansItem>;
    /**
     * Email
     */
    email?: Email;
    /**
     * Fax number: *On demand*
     */
    faxNumber?: PhoneNumber;
    /**
     * Web site URL: *On demand*
     */
    website?: Uri;
    /**
     * Time Zone: *On demand*
     */
    timeZone?: Label;
    /**
     * Tags: *On demand*
     */
    tags?: CSV;
    /**
     * Sales Representative: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    salesRepresentative?: (EmployeesId | EmployeesItem);
    /**
     * Account Representative: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    accountRepresentative?: (EmployeesId | EmployeesItem);
    /**
     * Contacts: *On demand*. List of JSON objects of type [Contacts](#operation/getOneContacts)
     */
    contacts?: Array<ContactsItem>;
    /**
     * Allowed Areas: *On demand*. List of JSON objects of type [GeoFences](#operation/getOneGeoFences)
     */
    allowedAreas?: Array<GeoFencesItem>;
    /**
     * Restricted Areas: *On demand*. List of JSON objects of type [GeoFences](#operation/getOneGeoFences)
     */
    restrictedAreas?: Array<GeoFencesItem>;
    /**
     * The Zones the client belongs to: *On demand*. List of JSON objects of type [Zones](#operation/getOneZones)
     */
    zones?: Array<ZonesItem>;
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
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
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
}

export namespace ClientsItem {

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