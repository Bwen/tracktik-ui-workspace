/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillItemsId } from './BillItemsId';
import type { BillItemsItem } from './BillItemsItem';
import type { ClientsId } from './ClientsId';
import type { ClientsItem } from './ClientsItem';
import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Currency } from './Currency';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type BillingAdhocItemsItem = {
    /**
     * Status of adhoc item, processed or not
     */
    status?: BillingAdhocItemsItem.status;
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
     * Account: ID of the resource by default OR *on demand* JSON object of type [Clients](#operation/getOneClients)
     */
    account?: (ClientsId | ClientsItem);
    /**
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
    /**
     * Bill Item: ID of the resource by default OR *on demand* JSON object of type [BillItems](#operation/getOneBillItems)
     */
    billItem?: (BillItemsId | BillItemsItem);
    /**
     * Tax Class: ID of the resource by default OR *on demand* JSON object of type [TaxClasses](#operation/getOneTaxClasses)
     */
    taxClass?: (TaxClassesId | TaxClassesItem);
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

export namespace BillingAdhocItemsItem {

    /**
     * Status of adhoc item, processed or not
     */
    export enum status {
        NOT_PROCESSED = 'NOT_PROCESSED',
        PROCESSED = 'PROCESSED',
    }


}