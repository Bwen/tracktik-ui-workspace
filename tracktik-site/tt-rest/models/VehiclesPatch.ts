/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FilesId } from './FilesId';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { TextArea } from './TextArea';

export type VehiclesPatch = {
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
    ownershipType?: VehiclesPatch.ownershipType;
    /**
     * Color
     */
    color?: string;
    /**
     * Status
     */
    status?: VehiclesPatch.status;
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
     * Pictures
     */
    pictures?: Array<FilesId>;
}

export namespace VehiclesPatch {

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