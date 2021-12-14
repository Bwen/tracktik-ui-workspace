/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Label } from './Label';
import type { ReportsId } from './ReportsId';
import type { ReportTemplateFieldsId } from './ReportTemplateFieldsId';

export type ReportFieldsPut = {
    /**
     * Report
     */
    report?: ReportsId;
    /**
     * Field
     */
    templateField?: ReportTemplateFieldsId;
    /**
     * Value
     */
    value?: Label;
    /**
     * Archived
     */
    archived?: Boolean;
}