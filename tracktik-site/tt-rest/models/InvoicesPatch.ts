/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientsId } from './ClientsId';
import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { InvoiceLinesId } from './InvoiceLinesId';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';

export type InvoicesPatch = {
    /**
     * Client
     */
    client?: ClientsId;
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
     * Tax Class
     */
    taxClass?: TaxClassesId;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Lines
     */
    lines?: Array<InvoiceLinesId>;
}