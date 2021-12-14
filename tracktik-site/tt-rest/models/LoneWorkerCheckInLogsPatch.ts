/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type LoneWorkerCheckInLogsPatch = {
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Method used to check-in
     */
    checkInMethod?: LoneWorkerCheckInLogsPatch.checkInMethod;
    /**
     * Phone number
     */
    number?: Label;
}

export namespace LoneWorkerCheckInLogsPatch {

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