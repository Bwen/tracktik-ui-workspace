/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MessageBoardPostsItem } from './MessageBoardPostsItem';
import type { TextArea } from './TextArea';
import type { Uri } from './Uri';

export type MessageBoardPostCategoriesItem = {
    /**
     * The name of category
     */
    name?: Label;
    /**
     * The details of category
     */
    details?: TextArea;
    /**
     * This field was deprecated in favor of `name`
     */
    description?: Label;
    /**
     * The tag of category
     */
    tag?: Label;
    /**
     * The list of the messages with this category: *On demand*. List of JSON objects of type [MessageBoardPosts](#operation/getOneMessageBoardPosts)
     */
    messages?: Array<MessageBoardPostsItem>;
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