/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesId } from './AddressesId';
import type { AddressesItem } from './AddressesItem';
import type { ClientsItem } from './ClientsItem';
import type { EmployeeAccountAssignmentsItem } from './EmployeeAccountAssignmentsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { GeoFencesItem } from './GeoFencesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PositionsItem } from './PositionsItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ZonesItem = {
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
     * Address: ID of the resource by default OR *on demand* JSON object of type Addresses
     */
    address?: (AddressesId | AddressesItem);
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Status
     */
    status?: ZonesItem.status;
    /**
     * The list of Clients on this Zone: *On demand*. List of JSON objects of type [Clients](#operation/getOneClients)
     */
    clients?: Array<ClientsItem>;
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
     * Time Zone: *On demand*
     */
    timeZone?: Label;
    /**
     * Employee Assignment: *On demand*. List of JSON objects of type [EmployeeAccountAssignments](#operation/getOneEmployeeAccountAssignments)
     */
    employeeAssignments?: Array<EmployeeAccountAssignmentsItem>;
    /**
     * Preferred Language: *On demand*
     */
    preferredLanguage?: Label;
    /**
     * The list of Sub-Zones on this Zone: *On demand*. List of JSON objects of type [Zones](#operation/getOneZones)
     */
    subZones?: Array<ZonesItem>;
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

export namespace ZonesItem {

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
        CLOSED = 'CLOSED',
    }


}