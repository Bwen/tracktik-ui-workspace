/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type SiteLocationsItem = {
    /**
     * Location Name
     */
    name?: string;
    /**
     * Optional Details
     */
    details?: TextArea;
    /**
     * Type
     */
    type?: SiteLocationsItem.type;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * System ID
     */
    id?: Integer;
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

export namespace SiteLocationsItem {

    /**
     * Type
     */
    export enum type {
        FLOOR = 'FLOOR',
        SECTION = 'SECTION',
        PARKING = 'PARKING',
        UNIT = 'UNIT',
        UTILITY_ROOM = 'UTILITY_ROOM',
        WASH_ROOM = 'WASH_ROOM',
        STAIR_CASE = 'STAIR_CASE',
        HALLWAY = 'HALLWAY',
        ELEVATOR = 'ELEVATOR',
        STREET_OR_INTERSECTION = 'STREET_OR_INTERSECTION',
        OTHER = 'OTHER',
    }


}