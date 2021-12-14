/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MessageBoardPostAcknowledgementsItem } from './MessageBoardPostAcknowledgementsItem';
import type { MessageBoardPostCategoriesId } from './MessageBoardPostCategoriesId';
import type { MessageBoardPostCategoriesItem } from './MessageBoardPostCategoriesItem';
import type { MessageBoardPostRecipientsItem } from './MessageBoardPostRecipientsItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MessageBoardPostsItem = {
    /**
     * The message we want share with the recipients
     */
    content?: TextArea;
    /**
     * The status of the message
     */
    status?: MessageBoardPostsItem.status;
    /**
     * The date we want hide the message
     */
    expireOn?: TimeStampNumber;
    /**
     * The account for this message: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * The category for this message: ID of the resource by default OR *on demand* JSON object of type [MessageBoardPostCategories](#operation/getOneMessageBoardPostCategories)
     */
    category?: (MessageBoardPostCategoriesId | MessageBoardPostCategoriesItem);
    /**
     * The list of recipients: *On demand*. List of JSON objects of type [MessageBoardPostRecipients](#operation/getOneMessageBoardPostRecipients)
     */
    recipients?: Array<MessageBoardPostRecipientsItem>;
    /**
     * The list of acknowledgement: *On demand*. List of JSON objects of type [MessageBoardPostAcknowledgements](#operation/getOneMessageBoardPostAcknowledgements)
     */
    messageBoardPostAcknowledgement?: Array<MessageBoardPostAcknowledgementsItem>;
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
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace MessageBoardPostsItem {

    /**
     * The status of the message
     */
    export enum status {
        ACTUAL = 'ACTUAL',
        DRAFT = 'DRAFT',
        COMPLETE = 'COMPLETE',
    }


}