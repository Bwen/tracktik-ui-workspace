/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type VehiclesCollection = {
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
     * Region
     */
    region?: RegionsId;
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
    ownershipType?: VehiclesCollection.ownershipType;
    /**
     * Color
     */
    color?: string;
    /**
     * Status
     */
    status?: VehiclesCollection.status;
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

export namespace VehiclesCollection {

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