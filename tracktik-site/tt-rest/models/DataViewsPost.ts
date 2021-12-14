/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TextArea } from './TextArea';

export type DataViewsPost = {
    /**
     * This field was deprecated in favor of `widgetType`
     */
    is?: Label;
    /**
     * Widget Type
     */
    widgetType?: Label;
    /**
     * Title
     */
    title: Label;
    /**
     * Status
     */
    status: DataViewsPost.status;
    /**
     * Description
     */
    description?: TextArea;
    /**
     * GUID
     */
    uid: Label;
    /**
     * Category
     */
    category?: DataViewCategoriesId;
    /**
     * Configs
     */
    configs?: JSON;
}

export namespace DataViewsPost {

    /**
     * Status
     */
    export enum status {
        DRAFT = 'DRAFT',
        PUBLISHED = 'PUBLISHED',
        ARCHIVED = 'ARCHIVED',
    }


}