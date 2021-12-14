/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Date } from './Date';
import type { EmploymentTerminationReasonsId } from './EmploymentTerminationReasonsId';
import type { TextArea } from './TextArea';

export type EmployeesTerminate = {
    /**
     * Termination Date
     */
    date: Date;
    /**
     * Termination Reason
     */
    reason: EmploymentTerminationReasonsId;
    /**
     * Comment (can be required depending on the selected reason)
     */
    comment?: TextArea;
    /**
     * Send Notification
     */
    sendNotification: Boolean;
}