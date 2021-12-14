/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JSON } from './JSON';
import type { Label } from './Label';
import type { ReportTemplatesId } from './ReportTemplatesId';
import type { SortIndex } from './SortIndex';

export type ReportTemplateFieldsPut = {
    /**
     * Name
     */
    label: string;
    /**
     * Field
     */
    name?: string;
    /**
     * Type
     */
    type?: ReportTemplateFieldsPut.type;
    /**
     * Required
     */
    required?: boolean;
    /**
     * Admin Only
     */
    adminOnly?: boolean;
    /**
     * Display Order Index
     */
    displayOrder?: SortIndex;
    /**
     * Extra Information
     */
    extra?: Label;
    /**
     * This field was deprecated in favor of `listItems`
     */
    list?: string;
    /**
     * List of items when the `type` is `LIST` or `LIST_MULTIPLE`
     */
    listItems?: JSON;
    /**
     * Dispatcher Field
     */
    isDispatcherField?: boolean;
    /**
     * A variable name used for creating data views
     */
    fieldTag?: Label;
    /**
     * The report template this field belongs to
     */
    reportTemplate: ReportTemplatesId;
    /**
     * Confidential
     */
    confidential?: boolean;
}

export namespace ReportTemplateFieldsPut {

    /**
     * Type
     */
    export enum type {
        TEXT = 'TEXT',
        TEXTAREA = 'TEXTAREA',
        TEXT_NUMBER = 'TEXT_NUMBER',
        TEXT_BARCODE = 'TEXT_BARCODE',
        PICTURE = 'PICTURE',
        GALLERY_PICTURE = 'GALLERY_PICTURE',
        QUALITY_PICTURE = 'QUALITY_PICTURE',
        SIGNATURE = 'SIGNATURE',
        CHECKBOX = 'CHECKBOX',
        LIST = 'LIST',
        LIST_FLAG = 'LIST_FLAG',
        LIST_SITE_LOCATION = 'LIST_SITE_LOCATION',
        LIST_MULTIPLE = 'LIST_MULTIPLE',
        DATE = 'DATE',
        TIME = 'TIME',
        DATETIME = 'DATETIME',
        SECTION = 'SECTION',
        DRAW = 'DRAW',
        DRAW_BUS = 'DRAW_BUS',
        DRAW_CAR = 'DRAW_CAR',
        DRAW_TRAILER = 'DRAW_TRAILER',
        DRAW_BODY = 'DRAW_BODY',
        DRAW_GOLF_CAR = 'DRAW_GOLF_CAR',
        LIST_EMPLOYEE = 'LIST_EMPLOYEE',
        LIST_CLIENT = 'LIST_CLIENT',
        LIST_CLIENT_RELINK = 'LIST_CLIENT_RELINK',
        LIST_PATROL_VEHICLE = 'LIST_PATROL_VEHICLE',
        LIST_RESIDENT = 'LIST_RESIDENT',
        IDCARD = 'IDCARD',
    }


}