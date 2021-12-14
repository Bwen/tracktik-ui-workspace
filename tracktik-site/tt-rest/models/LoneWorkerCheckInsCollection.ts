/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LoneWorkerCheckInLogsCollection } from './LoneWorkerCheckInLogsCollection';
import type { ShiftsId } from './ShiftsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type LoneWorkerCheckInsCollection = {
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Status
     */
    status?: LoneWorkerCheckInsCollection.status;
    /**
     * Shift
     */
    shift?: ShiftsId;
    /**
     * Lone Worker Check-In Log
     */
    loneWorkerCheckInLog?: LoneWorkerCheckInLogsCollection;
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

export namespace LoneWorkerCheckInsCollection {

    /**
     * Status
     */
    export enum status {
        OPEN = 'OPEN',
        LATE = 'LATE',
        OK = 'OK',
        REQUESTED_CHECK_IN = 'REQUESTED_CHECK_IN',
        CANCELLED = 'CANCELLED',
    }


}