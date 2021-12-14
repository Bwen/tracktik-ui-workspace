/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { DataViewsId } from './DataViewsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type DataViewModularHooksCollection = {
    /**
     * Name
     */
    name?: Label;
    /**
     * Type
     */
    type?: DataViewModularHooksCollection.type;
    /**
     * Data View
     */
    dataView?: DataViewsId;
    /**
     * Data View Category
     */
    dataViewCategory?: DataViewCategoriesId;
    /**
     * Portal
     */
    portal?: DataViewModularHooksCollection.portal;
    /**
     * Context
     */
    contextFilter?: DataViewModularHooksCollection.contextFilter;
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
    status?: DataViewModularHooksCollection.status;
    /**
     * Archived Date Time
     */
    archivedOn?: TimeStampDate;
    /**
     * User who archived the hook
     */
    archivedBy?: EmployeesId;
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

export namespace DataViewModularHooksCollection {

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