/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Email } from './Email';
import type { EmployeesId } from './EmployeesId';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type UsersCollection = {
    /**
     * Account
     */
    account?: AccountsId;
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
     * UserName (Sign-in)
     */
    username?: string;
    /**
     * Email
     */
    email?: Email;
    /**
     * Status
     */
    status?: UsersCollection.status;
    /**
     * Last login date & time
     */
    lastLoggedInOn?: TimeStampNumber;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * Picture
     */
    avatar?: Image;
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

export namespace UsersCollection {

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