/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesCollection } from './AddressesCollection';
import type { CSV } from './CSV';
import type { Date } from './Date';
import type { Email } from './Email';
import type { EmployeesId } from './EmployeesId';
import type { EmploymentProfilesCollection } from './EmploymentProfilesCollection';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { UserNotificationSettingsCollection } from './UserNotificationSettingsCollection';

export type EmployeesCollection = {
    /**
     * Job Title
     */
    jobTitle?: Label;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * The profile that contains start date, tesat
     */
    employmentProfile?: EmploymentProfilesCollection;
    /**
     * Gender
     */
    gender?: EmployeesCollection.gender;
    /**
     * Age
     */
    age?: Integer;
    /**
     * Birthday
     */
    birthday?: Date;
    /**
     * Age group
     */
    ageGroup?: string;
    /**
     * Address
     */
    address?: AddressesCollection;
    /**
     * Tags
     */
    tags?: CSV;
    /**
     * User Notification Settings
     */
    notificationSettings?: UserNotificationSettingsCollection;
    /**
     * Only used when sending communications to the user
     */
    language?: EmployeesCollection.language;
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
    status?: EmployeesCollection.status;
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

export namespace EmployeesCollection {

    /**
     * Gender
     */
    export enum gender {
        M = 'M',
        F = 'F',
        B = 'B',
    }

    /**
     * Only used when sending communications to the user
     */
    export enum language {
        EN_US = 'EN_US',
        FR = 'FR',
        RO = 'RO',
        ES = 'ES',
        DE = 'DE',
        NL = 'NL',
        PT = 'PT',
        SV = 'SV',
        ZH_HANS = 'ZH-HANS',
        TH = 'TH',
    }

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