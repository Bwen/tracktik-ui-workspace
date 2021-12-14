/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { ClientsId } from './ClientsId';
import type { ContractsId } from './ContractsId';
import type { Currency } from './Currency';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type CreditMemosCollection = {
    /**
     * Client
     */
    client?: ClientsId;
    /**
     * Status
     */
    status?: CreditMemosCollection.status;
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
     * Aging
     */
    aging?: Label;
    /**
     * Approved By
     */
    approvedBy?: EmployeesId;
    /**
     * Approved On
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
     * Object URI
     */
    uri?: Uri;
    /**
     * Resource Type
     */
    resourceType?: Label;
    /**
     * Created By
     */
    createdBy?: EmployeesId;
    /**
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}

export namespace CreditMemosCollection {

    /**
     * Status
     */
    export enum status {
        APPROVED = 'APPROVED',
        DRAFT = 'DRAFT',
    }


}