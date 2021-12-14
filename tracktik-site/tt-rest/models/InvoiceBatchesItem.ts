/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { InvoicesItem } from './InvoicesItem';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type InvoiceBatchesItem = {
    /**
     * Region: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Batch start date
     */
    startDate?: Date;
    /**
     * Batch end date
     */
    endDate?: Date;
    /**
     * Boolean value indicating if the adhoc invoices are included ot not.
     */
    adhocsIncluded?: Boolean;
    /**
     * Invoices: *On demand*. List of JSON objects of type [Invoices](#operation/getOneInvoices)
     */
    invoices?: Array<InvoicesItem>;
    /**
     * Adhoc Invoices: *On demand*. List of JSON objects of type [Invoices](#operation/getOneInvoices)
     */
    adhocInvoices?: Array<InvoicesItem>;
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