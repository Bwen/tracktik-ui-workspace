/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';

export type LoneWorkerPhoneCallsPatch = {
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