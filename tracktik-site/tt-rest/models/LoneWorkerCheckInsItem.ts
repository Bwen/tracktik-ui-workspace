/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { LoneWorkerCheckInLogsId } from './LoneWorkerCheckInLogsId';
import type { LoneWorkerCheckInLogsItem } from './LoneWorkerCheckInLogsItem';
import type { ShiftsId } from './ShiftsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type LoneWorkerCheckInsItem = {
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Status
     */
    status?: LoneWorkerCheckInsItem.status;
    /**
     * Shift: ID of the resource by default OR *on demand* JSON object of type [Shifts](#operation/getOneShifts)
     */
    shift?: (ShiftsId | ShiftsItem);
    /**
     * Lone Worker Check-In Log: ID of the resource by default OR *on demand* JSON object of type [LoneWorkerCheckInLogs](#operation/getOneLoneWorkerCheckInLogs)
     */
    loneWorkerCheckInLog?: (LoneWorkerCheckInLogsId | LoneWorkerCheckInLogsItem);
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

export namespace LoneWorkerCheckInsItem {

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