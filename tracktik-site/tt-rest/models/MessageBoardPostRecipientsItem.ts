/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MessageBoardPostsId } from './MessageBoardPostsId';
import type { MessageBoardPostsItem } from './MessageBoardPostsItem';
import type { Uri } from './Uri';

export type MessageBoardPostRecipientsItem = {
    /**
     * The tag of recipient
     */
    tag?: Label;
    /**
     * The account of recipient: ID of the resource by default OR *on demand* JSON object of type [MessageBoardPosts](#operation/getOneMessageBoardPosts)
     */
    messageBoardPost?: (MessageBoardPostsId | MessageBoardPostsItem);
    /**
     * Object URI: *On demand*
     */
    uri?: Uri;
    /**
     * Resource Type: *On demand*
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
}