/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressesCollection } from './AddressesCollection';
import type { Boolean } from './Boolean';
import type { ClientsId } from './ClientsId';
import type { CSV } from './CSV';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PhoneNumber } from './PhoneNumber';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';
import type { Uri } from './Uri';

export type ClientBillingSettingsCollection = {
    /**
     * Use main account address for billing
     */
    useMainAddress?: Boolean;
    /**
     * Custom billing address
     */
    billingAddress?: AddressesCollection;
    /**
     * Distribute by mail
     */
    distributeByMail?: Boolean;
    /**
     * Distribute by email
     */
    distributeByEmail?: Boolean;
    /**
     * Invoice email list
     */
    emailList?: CSV;
    /**
     * Distribute by fax
     */
    distributeByFax?: Boolean;
    /**
     * Fax number
     */
    faxNumber?: PhoneNumber;
    /**
     * Client
     */
    client?: ClientsId;
    /**
     * Tax class
     */
    taxClass?: TaxClassesId;
    /**
     * Payment term
     */
    paymentTerm?: ClientBillingSettingsCollection.paymentTerm;
    /**
     * Tax exempt
     */
    taxExempt?: Boolean;
    /**
     * Tax exempt code
     */
    taxExemptCode?: Label;
    /**
     * Distribution note
     */
    distributionNote?: TextArea;
    /**
     * Invoice permanent memo
     */
    invoicePermanentMemo?: TextArea;
    /**
     * Invoice attention of
     */
    invoiceAttentionOf?: Label;
    /**
     * Flag for review
     */
    flagForReview?: Boolean;
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
}

export namespace ClientBillingSettingsCollection {

    /**
     * Payment term
     */
    export enum paymentTerm {
        DUE_UPON_RECEIPT = 'DUE_UPON_RECEIPT',
        _7_DAYS = '7_DAYS',
        _10_DAYS = '10_DAYS',
        _14_DAYS = '14_DAYS',
        _15_DAYS = '15_DAYS',
        _20_DAYS = '20_DAYS',
        _30_DAYS = '30_DAYS',
        _40_DAYS = '40_DAYS',
        _45_DAYS = '45_DAYS',
        _60_DAYS = '60_DAYS',
        _90_DAYS = '90_DAYS',
        _120_DAYS = '120_DAYS',
    }


}