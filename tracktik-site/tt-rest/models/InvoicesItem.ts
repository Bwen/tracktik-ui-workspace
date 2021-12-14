/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Currency } from './Currency';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { InvoiceLinesItem } from './InvoiceLinesItem';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type InvoicesItem = {
    /**
     * Client: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    client?: (ClientsId | ClientsItem);
    /**
     * Status
     */
    status?: InvoicesItem.status;
    /**
     * Document number
     */
    documentNumber?: Label;
    /**
     * Invoice date
     */
    invoiceDate?: Date;
    /**
     * This field was deprecated in favor of `invoiceDate`
     */
    date?: Date;
    /**
     * Due Date
     */
    dueDate?: Date;
    /**
     * Period Start
     */
    servicePeriodStartDate?: Date;
    /**
     * This field was deprecated in favor of `servicePeriodStartDate`
     */
    servicePeriodStart?: Date;
    /**
     * Period Start
     */
    servicePeriodEndDate?: Date;
    /**
     * This field was deprecated in favor of `servicePeriodEndDate`
     */
    servicePeriodEnd?: Date;
    /**
     * Tax Class: ID of the resource by default OR *on demand* JSON object of type [TaxClasses](#operation/getOneTaxClasses)
     */
    taxClass?: (TaxClassesId | TaxClassesItem);
    /**
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
    /**
     * Sub total
     */
    subTotal?: Currency;
    /**
     * Tax total
     */
    taxTotal?: Currency;
    /**
     * Total
     */
    total?: Currency;
    /**
     * Boolean value indicating if the invoice is distributed or not.
     */
    distributed?: Boolean;
    /**
     * Lines: *On demand*. List of JSON objects of type InvoiceLines
     */
    lines?: Array<InvoiceLinesItem>;
    /**
     * Aging
     */
    aging?: Label;
    /**
     * Approved By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    approvedBy?: (EmployeesId | EmployeesItem);
    /**
     * Approved On: *On demand*
     */
    approvedOn?: TimeStampNumber;
    /**
     * Invoice batch
     */
    invoiceBatchId?: Integer;
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

export namespace InvoicesItem {

    /**
     * Status
     */
    export enum status {
        APPROVED = 'APPROVED',
        DRAFT = 'DRAFT',
    }


}