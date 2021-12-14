/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { TimeStampDate } from './TimeStampDate';

export type RevenueProcessorOccurrencesPost = {
    /**
     * Process Start Date
     */
    startedOn: TimeStampDate;
    /**
     * Process End Date
     */
    endedOn: TimeStampDate;
    /**
     * Site
     */
    site?: ClientsId;
    /**
     * Triggered by
     */
    triggeredFrom: RevenueProcessorOccurrencesPost.triggeredFrom;
}

export namespace RevenueProcessorOccurrencesPost {

    /**
     * Triggered by
     */
    export enum triggeredFrom {
        TTC = 'TTC',
        TT_FLOW = 'TT-FLOW',
    }


}