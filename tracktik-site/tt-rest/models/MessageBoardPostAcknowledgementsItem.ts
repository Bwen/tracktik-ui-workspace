/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MessageBoardPostsId } from './MessageBoardPostsId';
import type { MessageBoardPostsItem } from './MessageBoardPostsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MessageBoardPostAcknowledgementsItem = {
    /**
     * The status of acknowledgement
     */
    status?: MessageBoardPostAcknowledgementsItem.status;
    /**
     * The date when the employee has read the message
     */
    acknowledgedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `acknowledgedOn`
     */
    acknowledgeAt?: TimeStampNumber;
    /**
     * The employee who was read the message: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * The message concerned: ID of the resource by default OR *on demand* JSON object of type [MessageBoardPosts](#operation/getOneMessageBoardPosts)
     */
    message?: (MessageBoardPostsId | MessageBoardPostsItem);
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
}

export namespace MessageBoardPostAcknowledgementsItem {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}