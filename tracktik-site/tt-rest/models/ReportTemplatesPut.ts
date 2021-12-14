/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { ReportsId } from './ReportsId';
import type { ReportTemplateFieldsId } from './ReportTemplateFieldsId';

export type ReportTemplatesPut = {
    /**
     * Report name
     */
    name: string;
    /**
     * Information / Instructions
     */
    details?: string;
    /**
     * A variable name used for creating data views
     */
    tag?: Label;
    /**
     * Fields
     */
    reportFields?: Array<ReportTemplateFieldsId>;
    /**
     * Admin Only
     */
    adminOnly?: boolean;
    /**
     * Reports
     */
    reports?: Array<ReportsId>;
}