/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { FilesItem } from './FilesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type VehiclesItem = {
    /**
     * This field was deprecated in favor of `comments`
     */
    name?: string;
    /**
     * Custom vehicle UID
     */
    customId?: Label;
    /**
     * Comments/Notes
     */
    comments?: TextArea;
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Make
     */
    make?: string;
    /**
     * Model
     */
    model?: string;
    /**
     * Ownership Type
     */
    ownershipType?: VehiclesItem.ownershipType;
    /**
     * Color
     */
    color?: string;
    /**
     * Status
     */
    status?: VehiclesItem.status;
    /**
     * Year
     */
    year?: Label;
    /**
     * VIN Number
     */
    vin?: Label;
    /**
     * License Plate
     */
    licensePlate?: Label;
    /**
     * License Plate State
     */
    licensePlateState?: Label;
    /**
     * Pictures: *On demand*. List of JSON objects of type Files
     */
    pictures?: Array<FilesItem>;
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

export namespace VehiclesItem {

    /**
     * Ownership Type
     */
    export enum ownershipType {
        LEASED = 'LEASED',
        OWNED = 'OWNED',
    }

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        INACTIVE = 'INACTIVE',
    }


}