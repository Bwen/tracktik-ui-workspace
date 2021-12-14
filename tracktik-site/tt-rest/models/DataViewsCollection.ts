/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AclRule } from './AclRule';
import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TextArea } from './TextArea';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type DataViewsCollection = {
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
    name?: Label;
    /**
     * Title
     */
    title?: Label;
    /**
     * Status
     */
    status?: DataViewsCollection.status;
    /**
     * Description
     */
    description?: TextArea;
    /**
     * GUID
     */
    uid?: Label;
    /**
     * Category
     */
    category?: DataViewCategoriesId;
    /**
     * Configs
     */
    configs?: JSON;
    /**
     * Owned by
     */
    ownedBy?: EmployeesId;
    /**
     * User who wrote the note
     */
    archivedBy?: EmployeesId;
    /**
     * Access Control List
     */
    aclRule?: AclRule;
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
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}

export namespace DataViewsCollection {

    /**
     * Status
     */
    export enum status {
        DRAFT = 'DRAFT',
        PUBLISHED = 'PUBLISHED',
        ARCHIVED = 'ARCHIVED',
    }


}