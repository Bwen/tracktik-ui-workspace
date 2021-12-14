/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillItemsId } from './BillItemsId';
import type { ClientsId } from './ClientsId';
import type { ContractsId } from './ContractsId';
import type { Currency } from './Currency';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type BillingAdhocItemsCollection = {
    /**
     * Status of adhoc item, processed or not
     */
    status?: BillingAdhocItemsCollection.status;
    /**
     * Price
     */
    price?: Currency;
    /**
     * Quantity
     */
    quantity?: Decimal;
    /**
     * Service Date
     */
    serviceDate?: Date;
    /**
     * Description
     */
    description?: TextArea;
    /**
     * Account
     */
    account?: ClientsId;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Bill Item
     */
    billItem?: BillItemsId;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
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

export namespace BillingAdhocItemsCollection {

    /**
     * Status of adhoc item, processed or not
     */
    export enum status {
        NOT_PROCESSED = 'NOT_PROCESSED',
        PROCESSED = 'PROCESSED',
    }


}