/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type GeoFencesCollection = {
    /**
     * Account where this geo-fence was created
     */
    account?: AccountsId;
    /**
     * Description
     */
    description?: Label;
    /**
     * Geometry Type
     */
    geometryType?: GeoFencesCollection.geometryType;
    /**
     * Array of coordinates, each coordinate is an object with `latitude` and `longitude` properties where the values are numeric
     */
    geometryCoordinates?: Label;
    /**
     * Parameter Access Type
     */
    access?: GeoFencesCollection.access;
    /**
     * Parameter Radius
     */
    radius?: Decimal;
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

export namespace GeoFencesCollection {

    /**
     * Geometry Type
     */
    export enum geometryType {
        POINT = 'POINT',
        MULTI_POINT = 'MULTI_POINT',
        LINE_STRING = 'LINE_STRING',
        MULTI_LINE_STRING = 'MULTI_LINE_STRING',
        POLYGON = 'POLYGON',
        MULTI_POLYGON = 'MULTI_POLYGON',
        GEOMETRY_COLLECTION = 'GEOMETRY_COLLECTION',
    }

    /**
     * Parameter Access Type
     */
    export enum access {
        PERMITTED = 'PERMITTED',
        RESTRICTED = 'RESTRICTED',
    }


}