/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LeaveTypesId } from './LeaveTypesId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';

export type LeaveRequestsPut = {
    /**
     * Leave Request Reason
     */
    reason?: TextArea;
    /**
     * The first date when the employee is not available
     */
    startedOn: TimeStampDate;
    /**
     * The last date when the employee is not available
     */
    endedOn: TimeStampDate;
    /**
     * Leave Type
     */
    leaveType: LeaveTypesId;
}