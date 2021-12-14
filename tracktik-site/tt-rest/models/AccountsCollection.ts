/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesCollection } from './AddressesCollection';
import type { Date } from './Date';
import type { DispatchSlasId } from './DispatchSlasId';
import type { EmployeesId } from './EmployeesId';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type AccountsCollection = {
    /**
     * Name
     */
    name?: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Account Type
     */
    type?: AccountsCollection.type;
    /**
     * Client Type
     */
    subType?: AccountsCollection.subType;
    /**
     * Address
     */
    address?: AddressesCollection;
    /**
     * Account Region
     */
    region?: RegionsId;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Status
     */
    status?: AccountsCollection.status;
    /**
     * Dispatch SLA
     */
    dispatchSla?: DispatchSlasId;
    /**
     * Closed date
     */
    closedDate?: Date;
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

export namespace AccountsCollection {

    /**
     * Account Type
     */
    export enum type {
        CLIENT = 'CLIENT',
        REGION = 'REGION',
        ZONE = 'ZONE',
        DEPARTMENT = 'DEPARTMENT',
    }

    /**
     * Client Type
     */
    export enum subType {
        CLIENT = 'CLIENT',
        MULTI = 'MULTI',
        SITE = 'SITE',
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