/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesCollection } from './AddressesCollection';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ZonesCollection = {
    /**
     * Name
     */
    name?: Label;
    /**
     * Description
     */
    description?: Label;
    /**
     * UID
     */
    customId?: Label;
    /**
     * Address
     */
    address?: AddressesCollection;
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Status
     */
    status?: ZonesCollection.status;
    /**
     * Time Zone
     */
    timeZone?: Label;
    /**
     * Preferred Language
     */
    preferredLanguage?: Label;
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

export namespace ZonesCollection {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        CLOSED = 'CLOSED',
    }


}