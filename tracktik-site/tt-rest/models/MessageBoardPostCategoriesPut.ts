/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { MessageBoardPostsId } from './MessageBoardPostsId';
import type { TextArea } from './TextArea';

export type MessageBoardPostCategoriesPut = {
    /**
     * The name of category
     */
    name: Label;
    /**
     * The details of category
     */
    details: TextArea;
    /**
     * This field was deprecated in favor of `name`
     */
    description: Label;
    /**
     * The tag of category
     */
    tag: Label;
    /**
     * The list of the messages with this category
     */
    messages?: Array<MessageBoardPostsId>;
}