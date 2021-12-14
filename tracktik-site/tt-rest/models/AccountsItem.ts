/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesId } from './AddressesId';
import type { AddressesItem } from './AddressesItem';
import type { Date } from './Date';
import type { DispatchSlasId } from './DispatchSlasId';
import type { DispatchSlasItem } from './DispatchSlasItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoFencesItem } from './GeoFencesItem';
import type { Image } from './Image';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { NotesItem } from './NotesItem';
import type { PositionsItem } from './PositionsItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';
import type { WhitelistedIpsItem } from './WhitelistedIpsItem';

export type AccountsItem = {
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
    type?: AccountsItem.type;
    /**
     * Client Type
     */
    subType?: AccountsItem.subType;
    /**
     * Address: ID of the resource by default OR *on demand* JSON object of type Addresses
     */
    address?: (AddressesId | AddressesItem);
    /**
     * Account Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Notes: *On demand*. List of JSON objects of type Notes
     */
    notes?: Array<NotesItem>;
    /**
     * Time Zone: *On demand*
     */
    timeZone?: Label;
    /**
     * Status: *On demand*
     */
    status?: AccountsItem.status;
    /**
     * Positions: *On demand*. List of JSON objects of type [Positions](#operation/getOnePositions)
     */
    positions?: Array<PositionsItem>;
    /**
     * Allowed Areas: *On demand*. List of JSON objects of type [GeoFences](#operation/getOneGeoFences)
     */
    allowedAreas?: Array<GeoFencesItem>;
    /**
     * Restricted Areas: *On demand*. List of JSON objects of type [GeoFences](#operation/getOneGeoFences)
     */
    restrictedAreas?: Array<GeoFencesItem>;
    /**
     * The list of authorized IPs: *On demand*. List of JSON objects of type [WhitelistedIps](#operation/getOneWhitelistedIps)
     */
    ipWhitelist?: Array<WhitelistedIpsItem>;
    /**
     * Dispatch SLA: ID of the resource by default OR *on demand* JSON object of type [DispatchSlas](#operation/getOneDispatchSlas)
     */
    dispatchSla?: (DispatchSlasId | DispatchSlasItem);
    /**
     * Closed date
     */
    closedDate?: Date;
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

export namespace AccountsItem {

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
     * Status: *On demand*
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        CLOSED = 'CLOSED',
    }


}