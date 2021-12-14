/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { MessageBoardPostsId } from './MessageBoardPostsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type MessageBoardPostAcknowledgementsPatch = {
    /**
     * The status of acknowledgement
     */
    status?: MessageBoardPostAcknowledgementsPatch.status;
    /**
     * The date when the employee has read the message
     */
    acknowledgedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `acknowledgedOn`
     */
    acknowledgeAt?: TimeStampNumber;
    /**
     * The employee who was read the message
     */
    employee?: EmployeesId;
    /**
     * The message concerned
     */
    message?: MessageBoardPostsId;
}

export namespace MessageBoardPostAcknowledgementsPatch {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}