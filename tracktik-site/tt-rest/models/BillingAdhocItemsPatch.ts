/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillItemsId } from './BillItemsId';
import type { ClientsId } from './ClientsId';
import type { ContractsId } from './ContractsId';
import type { Currency } from './Currency';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';

export type BillingAdhocItemsPatch = {
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
}