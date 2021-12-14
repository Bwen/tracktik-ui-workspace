/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TextArea } from './TextArea';
import type { Uri } from './Uri';

export type MessageBoardPostCategoriesCollection = {
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