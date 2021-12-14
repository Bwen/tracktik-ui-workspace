/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesId } from './AddressesId';
import type { AddressesItem } from './AddressesItem';
import type { ContactsItem } from './ContactsItem';
import type { CSV } from './CSV';
import type { Date } from './Date';
import type { Email } from './Email';
import type { EmployeeAccountAssignmentsItem } from './EmployeeAccountAssignmentsItem';
import type { EmployeeAccountBansItem } from './EmployeeAccountBansItem';
import type { EmployeeAvailabilitiesItem } from './EmployeeAvailabilitiesItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeeSkillsItem } from './EmployeeSkillsItem';
import type { EmploymentProfilesId } from './EmploymentProfilesId';
import type { EmploymentProfilesItem } from './EmploymentProfilesItem';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { NotesItem } from './NotesItem';
import type { PhoneNumber } from './PhoneNumber';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';
import type { UserNotificationSettingsId } from './UserNotificationSettingsId';
import type { UserNotificationSettingsItem } from './UserNotificationSettingsItem';

export type EmployeesItem = {
    /**
     * Job Title
     */
    jobTitle?: Label;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * The profile that contains start date, tesat: ID of the resource by default OR *on demand* JSON object of type [EmploymentProfiles](#operation/getOneEmploymentProfiles)
     */
    employmentProfile?: (EmploymentProfilesId | EmploymentProfilesItem);
    /**
     * Gender: *On demand*
     */
    gender?: EmployeesItem.gender;
    /**
     * Age: *On demand*
     */
    age?: Integer;
    /**
     * Birthday: *On demand*
     */
    birthday?: Date;
    /**
     * Age group: *On demand*
     */
    ageGroup?: string;
    /**
     * Emergency Contacts: *On demand*. List of JSON objects of type [Contacts](#operation/getOneContacts)
     */
    emergencyContacts?: Array<ContactsItem>;
    /**
     * Skills: *On demand*. List of JSON objects of type [EmployeeSkills](#operation/getOneEmployeeSkills)
     */
    skills?: Array<EmployeeSkillsItem>;
    /**
     * Notes: *On demand*. List of JSON objects of type Notes
     */
    notes?: Array<NotesItem>;
    /**
     * Employee Availability: *On demand*. List of JSON objects of type [EmployeeAvailabilities](#operation/getOneEmployeeAvailabilities)
     */
    availabilities?: Array<EmployeeAvailabilitiesItem>;
    /**
     * Account Assignments: *On demand*. List of JSON objects of type [EmployeeAccountAssignments](#operation/getOneEmployeeAccountAssignments)
     */
    accountAssignments?: Array<EmployeeAccountAssignmentsItem>;
    /**
     * Account Bans: *On demand*. List of JSON objects of type [EmployeeAccountBans](#operation/getOneEmployeeAccountBans)
     */
    accountBans?: Array<EmployeeAccountBansItem>;
    /**
     * Address: ID of the resource by default OR *on demand* JSON object of type Addresses
     */
    address?: (AddressesId | AddressesItem);
    /**
     * Tags: *On demand*
     */
    tags?: CSV;
    /**
     * User Notification Settings: ID of the resource by default OR *on demand* JSON object of type [UserNotificationSettings](#operation/getOneUserNotificationSettings)
     */
    notificationSettings?: (UserNotificationSettingsId | UserNotificationSettingsItem);
    /**
     * Only used when sending communications to the user: *On demand*
     */
    language?: EmployeesItem.language;
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
    status?: EmployeesItem.status;
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

export namespace EmployeesItem {

    /**
     * Gender: *On demand*
     */
    export enum gender {
        M = 'M',
        F = 'F',
        B = 'B',
    }

    /**
     * Only used when sending communications to the user: *On demand*
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