/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportsId } from './ReportsId';
import type { ReportsItem } from './ReportsItem';
import type { ReportTemplateFieldsId } from './ReportTemplateFieldsId';
import type { ReportTemplateFieldsItem } from './ReportTemplateFieldsItem';
import type { Uri } from './Uri';

export type ReportFieldsItem = {
    /**
     * Read-only field tag defined on the ReportTemplateField
     */
    fieldTag?: Label;
    /**
     * Report: ID of the resource by default OR *on demand* JSON object of type [Reports](#operation/getOneReports)
     */
    report?: (ReportsId | ReportsItem);
    /**
     * Field: ID of the resource by default OR *on demand* JSON object of type [ReportTemplateFields](#operation/getOneReportTemplateFields)
     */
    templateField?: (ReportTemplateFieldsId | ReportTemplateFieldsItem);
    /**
     * Value
     */
    value?: Label;
    /**
     * To fetch the value label when using TQL: *On demand*
     */
    valueLabel?: Label;
    /**
     * Archived
     */
    archived?: Boolean;
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