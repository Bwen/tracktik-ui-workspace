/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type LoneWorkerPhoneCallsPut = {
    /**
     * From
     */
    fromNumber?: Label;
    /**
     * To
     */
    toNumber?: Label;
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
}