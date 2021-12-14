/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { DataViewCategoriesItem } from './DataViewCategoriesItem';
import type { DataViewsId } from './DataViewsId';
import type { DataViewsItem } from './DataViewsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type DataViewModularHooksItem = {
    /**
     * Name
     */
    name?: Label;
    /**
     * Type
     */
    type?: DataViewModularHooksItem.type;
    /**
     * Data View: ID of the resource by default OR *on demand* JSON object of type [DataViews](#operation/getOneDataViews)
     */
    dataView?: (DataViewsId | DataViewsItem);
    /**
     * Data View Category: ID of the resource by default OR *on demand* JSON object of type [DataViewCategories](#operation/getOneDataViewCategories)
     */
    dataViewCategory?: (DataViewCategoriesId | DataViewCategoriesItem);
    /**
     * Portal
     */
    portal?: DataViewModularHooksItem.portal;
    /**
     * Context
     */
    contextFilter?: DataViewModularHooksItem.contextFilter;
    /**
     * Context Attribute
     */
    contextFilterAttribute?: string;
    /**
     * Settings
     */
    settings?: JSON;
    /**
     * Status
     */
    status?: DataViewModularHooksItem.status;
    /**
     * Archived Date Time: *On demand*
     */
    archivedOn?: TimeStampDate;
    /**
     * User who archived the hook: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    archivedBy?: (EmployeesId | EmployeesItem);
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

export namespace DataViewModularHooksItem {

    /**
     * Type
     */
    export enum type {
        VIEW = 'VIEW',
        VIEW_CATEGORY = 'VIEW_CATEGORY',
    }

    /**
     * Portal
     */
    export enum portal {
        STAFF = 'STAFF',
        ADMIN = 'ADMIN',
        CLIENT = 'CLIENT',
    }

    /**
     * Context
     */
    export enum contextFilter {
        EMPLOYEES = 'EMPLOYEES',
        CLIENTS = 'CLIENTS',
        INVOICE_BATCH = 'INVOICE_BATCH',
        PAYROLL_PAYRUN = 'PAYROLL_PAYRUN',
        GLOBAL = 'GLOBAL',
    }

    /**
     * Status
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        ARCHIVED = 'ARCHIVED',
    }


}