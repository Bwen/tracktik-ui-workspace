/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type SiteLocationsCollection = {
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
    type?: SiteLocationsCollection.type;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * System ID
     */
    id?: Integer;
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

export namespace SiteLocationsCollection {

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