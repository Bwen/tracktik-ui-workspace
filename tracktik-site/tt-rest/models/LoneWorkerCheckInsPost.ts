/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShiftsId } from './ShiftsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type LoneWorkerCheckInsPost = {
    /**
     * Created on
     */
    createdOn?: TimeStampNumber;
    /**
     * Shift
     */
    shift: ShiftsId;
}