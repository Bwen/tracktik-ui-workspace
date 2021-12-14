/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MessageBoardPostsId } from './MessageBoardPostsId';
import type { Uri } from './Uri';

export type MessageBoardPostRecipientsCollection = {
    /**
     * The tag of recipient
     */
    tag?: Label;
    /**
     * The account of recipient
     */
    messageBoardPost?: MessageBoardPostsId;
    /**
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * System ID
     */
    id?: Integer;
}