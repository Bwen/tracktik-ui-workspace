/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AclRule } from './AclRule';
import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { DataViewCategoriesItem } from './DataViewCategoriesItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TextArea } from './TextArea';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type DataViewsItem = {
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
    status?: DataViewsItem.status;
    /**
     * Description
     */
    description?: TextArea;
    /**
     * GUID
     */
    uid?: Label;
    /**
     * Category: ID of the resource by default OR *on demand* JSON object of type [DataViewCategories](#operation/getOneDataViewCategories)
     */
    category?: (DataViewCategoriesId | DataViewCategoriesItem);
    /**
     * Configs
     */
    configs?: JSON;
    /**
     * Owned by: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    ownedBy?: (EmployeesId | EmployeesItem);
    /**
     * User who wrote the note: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    archivedBy?: (EmployeesId | EmployeesItem);
    /**
     * Access Control List: *On demand*
     */
    aclRule?: AclRule;
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
     * Created Date Time: *On demand*
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}

export namespace DataViewsItem {

    /**
     * Status
     */
    export enum status {
        DRAFT = 'DRAFT',
        PUBLISHED = 'PUBLISHED',
        ARCHIVED = 'ARCHIVED',
    }


}