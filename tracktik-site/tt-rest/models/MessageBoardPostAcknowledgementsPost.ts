/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { MessageBoardPostsId } from './MessageBoardPostsId';
import type { TimeStampNumber } from './TimeStampNumber';

export type MessageBoardPostAcknowledgementsPost = {
    /**
     * The status of acknowledgement
     */
    status: MessageBoardPostAcknowledgementsPost.status;
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
    employee: EmployeesId;
    /**
     * The message concerned
     */
    message: MessageBoardPostsId;
}

export namespace MessageBoardPostAcknowledgementsPost {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}