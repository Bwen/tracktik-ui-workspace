/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PaymentMethodsId } from './PaymentMethodsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ContractsCollection = {
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Billing Recurrence
     */
    billingFrequency?: ContractsCollection.billingFrequency;
    /**
     * Billing type
     */
    billingFrequencyType?: ContractsCollection.billingFrequencyType;
    /**
     * Cycle reference date
     */
    billingStartDate?: Date;
    /**
     * Details
     */
    details?: Label;
    /**
     * Semi-Monthly first day
     */
    semiMonthlyFirstReferenceDay?: Integer;
    /**
     * Semi-Monthly second day
     */
    semiMonthlySecondReferenceDay?: Integer;
    /**
     * Invoice date adjustment
     */
    invoiceDayToAdd?: Integer;
    /**
     * Name
     */
    name?: string;
    /**
     * Payment Method
     */
    paymentMethod?: PaymentMethodsId;
    /**
     * Payment Terms
     */
    paymentTerms?: ContractsCollection.paymentTerms;
    /**
     * External contract ID that references this contract in another system
     */
    externalId?: Label;
    /**
     * Purchase Order Number
     */
    proposalNumber?: Label;
    /**
     * Estimated Per Period Revenue used for projections
     */
    estimatedPerPeriodRevenue?: Label;
    /**
     * If this field value is in the past the Contract is not ACTIVE
     */
    serviceEndDate?: Date;
    /**
     * Service Start Date
     */
    serviceStartDate?: Date;
    /**
     * This field was deprecated in favor of `serviceEndDate`
     */
    status?: ContractsCollection.status;
    /**
     * This field was deprecated, Contract type is always contract
     */
    type?: ContractsCollection.type;
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
     * Created Date Time
     */
    createdOn?: TimeStampNumber;
    /**
     * Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Updated Date Time
     */
    updatedOn?: TimeStampNumber;
}

export namespace ContractsCollection {

    /**
     * Billing Recurrence
     */
    export enum billingFrequency {
        BI_WEEKLY = 'BI_WEEKLY',
        MONTHLY = 'MONTHLY',
        WEEKLY = 'WEEKLY',
        QUARTERLY = 'QUARTERLY',
        YEARLY = 'YEARLY',
        SEMI_MONTHLY = 'SEMI_MONTHLY',
        ADHOC = 'ADHOC',
        TEN_DAYS = 'TEN_DAYS',
    }

    /**
     * Billing type
     */
    export enum billingFrequencyType {
        ON_END = 'ON_END',
        ON_START = 'ON_START',
    }

    /**
     * Payment Terms
     */
    export enum paymentTerms {
        DAYS_0 = 'DAYS_0',
        DAYS_7 = 'DAYS_7',
        DAYS_10 = 'DAYS_10',
        DAYS_14 = 'DAYS_14',
        DAYS_15 = 'DAYS_15',
        DAYS_20 = 'DAYS_20',
        DAYS_30 = 'DAYS_30',
        DAYS_40 = 'DAYS_40',
        DAYS_45 = 'DAYS_45',
        DAYS_60 = 'DAYS_60',
        DAYS_90 = 'DAYS_90',
        DAYS_120 = 'DAYS_120',
    }

    /**
     * This field was deprecated in favor of `serviceEndDate`
     */
    export enum status {
        DRAFT = 'DRAFT',
        ACTIVE = 'ACTIVE',
        CANCELLED = 'CANCELLED',
        NOT_RENEWED = 'NOT_RENEWED',
    }

    /**
     * This field was deprecated, Contract type is always contract
     */
    export enum type {
        PROPOSAL = 'PROPOSAL',
        CONTRACT = 'CONTRACT',
    }


}