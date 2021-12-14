/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TextArea } from './TextArea';

export type ShiftsApprove = {
    /**
     * Hours approved. If empty value is calculated by the system
     */
    approvedHours?: number;
    /**
     * Hours to be payed. If empty value is calculated by the system
     */
    payableHours?: number;
    /**
     * Hours to be billed. If empty value is calculated by the system
     */
    billableHours?: number;
    /**
     * Optional note for approval
     */
    note?: TextArea;
}