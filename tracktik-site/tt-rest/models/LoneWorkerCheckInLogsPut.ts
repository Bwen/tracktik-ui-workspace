/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type LoneWorkerCheckInLogsPut = {
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Method used to check-in
     */
    checkInMethod?: LoneWorkerCheckInLogsPut.checkInMethod;
    /**
     * Phone number
     */
    number?: Label;
}

export namespace LoneWorkerCheckInLogsPut {

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