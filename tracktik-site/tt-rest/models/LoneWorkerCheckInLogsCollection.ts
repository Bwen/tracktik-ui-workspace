/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LoneWorkerCheckInsId } from './LoneWorkerCheckInsId';
import type { LoneWorkerPhoneCallsId } from './LoneWorkerPhoneCallsId';
import type { PositionsId } from './PositionsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type LoneWorkerCheckInLogsCollection = {
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Method used to check-in
     */
    checkInMethod?: LoneWorkerCheckInLogsCollection.checkInMethod;
    /**
     * Phone number
     */
    number?: Label;
    /**
     * Employee
     */
    user?: EmployeesId;
    /**
     * Phone Call
     */
    call?: LoneWorkerPhoneCallsId;
    /**
     * Position
     */
    position?: PositionsId;
    /**
     * Lone Worker Check-In
     */
    loneWorkerCheckIn?: LoneWorkerCheckInsId;
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
}

export namespace LoneWorkerCheckInLogsCollection {

    /**
     * Method used to check-in
     */
    export enum checkInMethod {
        SMS = 'SMS',
        MANUAL = 'MANUAL',
        CALL = 'CALL',
        MOBILE_APP = 'MOBILE_APP',
        CALL_OUT = 'CALL_OUT',
        API = 'API',
    }


}