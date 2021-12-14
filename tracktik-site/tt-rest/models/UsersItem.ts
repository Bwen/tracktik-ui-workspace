/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
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

export type UsersItem = {
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Type
     */
    type?: Label;
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
    status?: UsersItem.status;
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

export namespace UsersItem {

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