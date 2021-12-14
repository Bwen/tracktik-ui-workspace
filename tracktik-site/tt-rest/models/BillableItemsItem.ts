/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillingAdhocItemsItem } from './BillingAdhocItemsItem';
import type { BillItemsId } from './BillItemsId';
import type { BillItemsItem } from './BillItemsItem';
import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Currency } from './Currency';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { DispatchTasksItem } from './DispatchTasksItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { InvoiceLinesId } from './InvoiceLinesId';
import type { InvoiceLinesItem } from './InvoiceLinesItem';
import type { InvoicesId } from './InvoicesId';
import type { InvoicesItem } from './InvoicesItem';
import type { Label } from './Label';
import type { MobileScheduleOccurrenceLogsItem } from './MobileScheduleOccurrenceLogsItem';
import type { PositionsItem } from './PositionsItem';
import type { RegionsId } from './RegionsId';
import type { RegionsItem } from './RegionsItem';
import type { ShiftsItem } from './ShiftsItem';
import type { TaskPriceTiersItem } from './TaskPriceTiersItem';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type BillableItemsItem = {
    /**
     * Type
     */
    type?: BillableItemsItem.type;
    /**
     * This field was deprecated in favor of `serviceModel`: *On demand*
     */
    classModel?: string;
    /**
     * This field was deprecated in favor of `serviceModel`: *On demand*
     */
    classModelId?: Integer;
    /**
     * Service Model
     */
    serviceModel?: {
type?: BillableItemsItem.type;
object?: (BillingAdhocItemsItem | ShiftsItem | TaskPriceTiersItem | InvoiceLinesItem | PositionsItem | MobileScheduleOccurrenceLogsItem | DispatchTasksItem);
};
    /**
     * Quantity
     */
    quantity?: Decimal;
    /**
     * Rate
     */
    rate?: CurrencyRate;
    /**
     * Price
     */
    price?: Currency;
    /**
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
    /**
     * Tax Class: ID of the resource by default OR *on demand* JSON object of type [TaxClasses](#operation/getOneTaxClasses)
     */
    taxClass?: (TaxClassesId | TaxClassesItem);
    /**
     * Contract Occurrence Date: *On demand*
     */
    contractOccurrenceDate?: string;
    /**
     * Invoice: ID of the resource by default OR *on demand* JSON object of type [Invoices](#operation/getOneInvoices)
     */
    invoice?: (InvoicesId | InvoicesItem);
    /**
     * Invoice Line: ID of the resource by default OR *on demand* JSON object of type InvoiceLines
     */
    invoiceLine?: (InvoiceLinesId | InvoiceLinesItem);
    /**
     * Service Location: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    serviceLocation?: (ClientsId | ClientsItem);
    /**
     * This field was deprecated in favor of serviceLocation: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    serviceAccount?: (ClientsId | ClientsItem);
    /**
     * Service Client: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    clientAccount?: (ClientsId | ClientsItem);
    /**
     * Post Date Time
     */
    postedOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `postedOn`
     */
    postDateTime?: TimeStampNumber;
    /**
     * Post Batch Custom
     */
    postBatchCustom?: Integer;
    /**
     * Memo
     */
    memo?: string;
    /**
     * Master Account: ID of the resource by default OR *on demand* JSON object of type [Regions](#operation/getOneRegions)
     */
    region?: (RegionsId | RegionsItem);
    /**
     * Bill Item: ID of the resource by default OR *on demand* JSON object of type [BillItems](#operation/getOneBillItems)
     */
    billItem?: (BillItemsId | BillItemsItem);
    /**
     * Stat Amount
     */
    statAmount?: string;
    /**
     * Stat Type
     */
    statType?: BillableItemsItem.statType;
    /**
     * This field was deprecated in favor of `priceTierModelObject`
     */
    priceTierModel?: string;
    /**
     * This field was deprecated in favor of `priceTierModelObject`
     */
    priceTierId?: Integer;
    /**
     * Price tier model object
     */
    priceTierModelObject?: {
type?: BillableItemsItem.type;
object?: (BillingAdhocItemsItem | TaskPriceTiersItem | PositionsItem);
};
    /**
     * Service Date
     */
    serviceDate?: Date;
    /**
     * Service time (Unix timestamp)
     */
    servicedOn?: TimeStampNumber;
    /**
     * Group Key. Used for grouping into invoices
     */
    groupKey?: string;
    /**
     * billing_notes
     */
    billingNotes?: Label;
    /**
     * Sub Type
     */
    subType?: Label;
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

export namespace BillableItemsItem {

    /**
     * Type
     */
    export enum type {
        REVENUE = 'REVENUE',
        EXPENSE = 'EXPENSE',
    }

    /**
     * Stat Type
     */
    export enum statType {
        QTY = 'QTY',
        PREPAID = 'PREPAID',
        MIN = 'MIN',
        HOURS = 'HOURS',
        _ = '%',
    }


}