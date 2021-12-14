/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MessageBoardPostsId } from './MessageBoardPostsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MessageBoardPostAcknowledgementsCollection = {
    /**
     * The status of acknowledgement
     */
    status?: MessageBoardPostAcknowledgementsCollection.status;
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
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}

export namespace MessageBoardPostAcknowledgementsCollection {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}