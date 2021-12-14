/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type GeoFencesItem = {
    /**
     * Account where this geo-fence was created: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Description
     */
    description?: Label;
    /**
     * Geometry Type
     */
    geometryType?: GeoFencesItem.geometryType;
    /**
     * Array of coordinates, each coordinate is an object with `latitude` and `longitude` properties where the values are numeric
     */
    geometryCoordinates?: Label;
    /**
     * Parameter Access Type
     */
    access?: GeoFencesItem.access;
    /**
     * Parameter Radius
     */
    radius?: Decimal;
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

export namespace GeoFencesItem {

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