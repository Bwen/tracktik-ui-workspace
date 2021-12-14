/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { ReportsItem } from './ReportsItem';
import type { ReportTemplateFieldsItem } from './ReportTemplateFieldsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type ReportFlagTemplatesItem = {
    /**
     * Report name
     */
    name?: string;
    /**
     * Information / Instructions
     */
    details?: string;
    /**
     * A variable name used for creating data views
     */
    tag?: Label;
    /**
     * Fields: *On demand*. List of JSON objects of type [ReportTemplateFields](#operation/getOneReportTemplateFields)
     */
    reportFields?: Array<ReportTemplateFieldsItem>;
    /**
     * Admin Only
     */
    adminOnly?: boolean;
    /**
     * Reports: *On demand*. List of JSON objects of type [Reports](#operation/getOneReports)
     */
    reports?: Array<ReportsItem>;
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
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}