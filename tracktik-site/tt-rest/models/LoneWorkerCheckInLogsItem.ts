/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LoneWorkerCheckInsId } from './LoneWorkerCheckInsId';
import type { LoneWorkerCheckInsItem } from './LoneWorkerCheckInsItem';
import type { LoneWorkerPhoneCallsId } from './LoneWorkerPhoneCallsId';
import type { LoneWorkerPhoneCallsItem } from './LoneWorkerPhoneCallsItem';
import type { PositionsId } from './PositionsId';
import type { PositionsItem } from './PositionsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type LoneWorkerCheckInLogsItem = {
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Method used to check-in
     */
    checkInMethod?: LoneWorkerCheckInLogsItem.checkInMethod;
    /**
     * Phone number
     */
    number?: Label;
    /**
     * Employee: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    user?: (EmployeesId | EmployeesItem);
    /**
     * Phone Call: ID of the resource by default OR *on demand* JSON object of type [LoneWorkerPhoneCalls](#operation/getOneLoneWorkerPhoneCalls)
     */
    call?: (LoneWorkerPhoneCallsId | LoneWorkerPhoneCallsItem);
    /**
     * Position: ID of the resource by default OR *on demand* JSON object of type [Positions](#operation/getOnePositions)
     */
    position?: (PositionsId | PositionsItem);
    /**
     * Lone Worker Check-In: ID of the resource by default OR *on demand* JSON object of type [LoneWorkerCheckIns](#operation/getOneLoneWorkerCheckIns)
     */
    loneWorkerCheckIn?: (LoneWorkerCheckInsId | LoneWorkerCheckInsItem);
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
}

export namespace LoneWorkerCheckInLogsItem {

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