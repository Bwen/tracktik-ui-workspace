/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataViewCategoriesId } from './DataViewCategoriesId';
import type { DataViewsId } from './DataViewsId';
import type { JSON } from './JSON';
import type { Label } from './Label';

export type DataViewModularHooksPut = {
    /**
     * Name
     */
    name: Label;
    /**
     * Type
     */
    type: DataViewModularHooksPut.type;
    /**
     * Data View
     */
    dataView: DataViewsId;
    /**
     * Data View Category
     */
    dataViewCategory: DataViewCategoriesId;
    /**
     * Portal
     */
    portal: DataViewModularHooksPut.portal;
    /**
     * Context
     */
    contextFilter: DataViewModularHooksPut.contextFilter;
    /**
     * Context Attribute
     */
    contextFilterAttribute?: string;
    /**
     * Settings
     */
    settings: JSON;
    /**
     * Status
     */
    status: DataViewModularHooksPut.status;
}

export namespace DataViewModularHooksPut {

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