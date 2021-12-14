/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { MessageBoardPostsId } from './MessageBoardPostsId';

export type MessageBoardPostRecipientsPost = {
    /**
     * The tag of recipient
     */
    tag: Label;
    /**
     * The account of recipient
     */
    messageBoardPost: MessageBoardPostsId;
}