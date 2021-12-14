/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillingAdhocItemsItem } from './BillingAdhocItemsItem';
import type { BillItemsId } from './BillItemsId';
import type { ClientsId } from './ClientsId';
import type { ContractsId } from './ContractsId';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { DispatchTasksItem } from './DispatchTasksItem';
import type { Integer } from './Integer';
import type { InvoiceLinesId } from './InvoiceLinesId';
import type { InvoiceLinesItem } from './InvoiceLinesItem';
import type { Label } from './Label';
import type { MobileScheduleOccurrenceLogsItem } from './MobileScheduleOccurrenceLogsItem';
import type { PositionsItem } from './PositionsItem';
import type { RegionsId } from './RegionsId';
import type { ShiftsItem } from './ShiftsItem';
import type { TaskPriceTiersItem } from './TaskPriceTiersItem';
import type { TaxClassesId } from './TaxClassesId';
import type { TimeStampNumber } from './TimeStampNumber';

export type BillableItemsPut = {
    /**
     * Type
     */
    type?: BillableItemsPut.type;
    /**
     * This field was deprecated in favor of `serviceModel`
     */
    classModel: string;
    /**
     * This field was deprecated in favor of `serviceModel`
     */
    classModelId: Integer;
    /**
     * Service Model
     */
    serviceModel?: {
type?: BillableItemsPut.type;
object?: (BillingAdhocItemsItem | ShiftsItem | TaskPriceTiersItem | InvoiceLinesItem | PositionsItem | MobileScheduleOccurrenceLogsItem | DispatchTasksItem);
};
    /**
     * Quantity
     */
    quantity: Decimal;
    /**
     * Rate
     */
    rate: CurrencyRate;
    /**
     * Contract
     */
    contract: ContractsId;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
    /**
     * Contract Occurrence Date
     */
    contractOccurrenceDate?: string;
    /**
     * Invoice Line
     */
    invoiceLine?: InvoiceLinesId;
    /**
     * Service Location
     */
    serviceLocation?: ClientsId;
    /**
     * This field was deprecated in favor of serviceLocation
     */
    serviceAccount?: ClientsId;
    /**
     * Service Client
     */
    clientAccount?: ClientsId;
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
     * Master Account
     */
    region: RegionsId;
    /**
     * Bill Item
     */
    billItem: BillItemsId;
    /**
     * Stat Amount
     */
    statAmount?: string;
    /**
     * Stat Type
     */
    statType?: BillableItemsPut.statType;
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
type?: BillableItemsPut.type;
object?: (BillingAdhocItemsItem | TaskPriceTiersItem | PositionsItem);
};
    /**
     * Service Date
     */
    serviceDate: Date;
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
}

export namespace BillableItemsPut {

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