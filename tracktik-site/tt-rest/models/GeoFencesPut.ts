/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Decimal } from './Decimal';
import type { Label } from './Label';

export type GeoFencesPut = {
    /**
     * Account where this geo-fence was created
     */
    account: AccountsId;
    /**
     * Description
     */
    description: Label;
    /**
     * Geometry Type
     */
    geometryType: GeoFencesPut.geometryType;
    /**
     * Array of coordinates, each coordinate is an object with `latitude` and `longitude` properties where the values are numeric
     */
    geometryCoordinates: Label;
    /**
     * Parameter Access Type
     */
    access: GeoFencesPut.access;
    /**
     * Parameter Radius
     */
    radius?: Decimal;
}

export namespace GeoFencesPut {

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