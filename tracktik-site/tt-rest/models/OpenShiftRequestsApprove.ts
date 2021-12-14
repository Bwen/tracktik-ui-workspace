/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { TextArea } from './TextArea';

export type OpenShiftRequestsApprove = {
    /**
     * Note
     */
    note?: TextArea;
    /**
     * Acknowledged from approval.
     */
    acknowledge?: Boolean;
    /**
     * Notify requesters
     */
    notify?: Boolean;
}