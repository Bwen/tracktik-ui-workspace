/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportsId } from './ReportsId';
import type { ReportTemplateFieldsId } from './ReportTemplateFieldsId';
import type { Uri } from './Uri';

export type ReportFieldsCollection = {
    /**
     * Read-only field tag defined on the ReportTemplateField
     */
    fieldTag?: Label;
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
     * To fetch the value label when using TQL
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
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
}