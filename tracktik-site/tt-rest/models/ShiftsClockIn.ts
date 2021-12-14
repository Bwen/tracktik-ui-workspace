/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Decimal } from './Decimal';
import type { GeoPositionLatitude } from './GeoPositionLatitude';
import type { GeoPositionLongitude } from './GeoPositionLongitude';
import type { TextArea } from './TextArea';

export type ShiftsClockIn = {
    /**
     * Start method
     */
    startMethod: ShiftsClockIn.startMethod;
    /**
     * Note
     */
    note?: TextArea;
    /**
     * Latitude
     */
    latitude?: GeoPositionLatitude;
    /**
     * Longitude
     */
    longitude?: GeoPositionLongitude;
    /**
     * Gps accuracy
     */
    gpsAccuracy?: Decimal;
}

export namespace ShiftsClockIn {

    /**
     * Start method
     */
    export enum startMethod {
        DEVICE = 'DEVICE',
        ADMIN = 'ADMIN',
        PHONE = 'PHONE',
        BROWSER = 'BROWSER',
        BATCH = 'BATCH',
        KIOSK_APP = 'KIOSK_APP',
        SHIFT_APP = 'SHIFT_APP',
        API = 'API',
        GUARD_APP = 'GUARD_APP',
    }


}