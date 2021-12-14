/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { Email } from './Email';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ClientUsersItem = {
    /**
     * Client portal where this user was created: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    client?: (ClientsId | ClientsItem);
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Custom ID
     */
    customId?: Label;
    /**
     * First name
     */
    firstName?: Label;
    /**
     * Last name
     */
    lastName?: Label;
    /**
     * Full name
     */
    name?: Label;
    /**
     * Primary phone
     */
    primaryPhone?: PhoneNumber;
    /**
     * Secondary phone
     */
    secondaryPhone?: PhoneNumber;
    /**
     * UserName (Sign-in): *On demand*
     */
    username?: string;
    /**
     * Email
     */
    email?: Email;
    /**
     * Status
     */
    status?: ClientUsersItem.status;
    /**
     * Last login date & time: *On demand*
     */
    lastLoggedInOn?: TimeStampNumber;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * Picture
     */
    avatar?: Image;
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

export namespace ClientUsersItem {

    /**
     * Status
     */
    export enum status {
        INACTIVE = 'INACTIVE',
        ACTIVE = 'ACTIVE',
        TERMINATED = 'TERMINATED',
        BANNED = 'BANNED',
    }


}