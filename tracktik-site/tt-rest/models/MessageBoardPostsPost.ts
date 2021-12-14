/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { MessageBoardPostAcknowledgementsId } from './MessageBoardPostAcknowledgementsId';
import type { MessageBoardPostCategoriesId } from './MessageBoardPostCategoriesId';
import type { MessageBoardPostRecipientsId } from './MessageBoardPostRecipientsId';
import type { TextArea } from './TextArea';
import type { TimeStampNumber } from './TimeStampNumber';

export type MessageBoardPostsPost = {
    /**
     * The message we want share with the recipients
     */
    content: TextArea;
    /**
     * The status of the message
     */
    status: MessageBoardPostsPost.status;
    /**
     * The date we want hide the message
     */
    expireOn: TimeStampNumber;
    /**
     * The account for this message
     */
    account: AccountsId;
    /**
     * The category for this message
     */
    category: MessageBoardPostCategoriesId;
    /**
     * The list of recipients
     */
    recipients?: Array<MessageBoardPostRecipientsId>;
    /**
     * The list of acknowledgement
     */
    messageBoardPostAcknowledgement?: Array<MessageBoardPostAcknowledgementsId>;
}

export namespace MessageBoardPostsPost {

    /**
     * The status of the message
     */
    export enum status {
        ACTUAL = 'ACTUAL',
        DRAFT = 'DRAFT',
        COMPLETE = 'COMPLETE',
    }


}