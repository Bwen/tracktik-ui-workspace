/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { ContractOccurrencesItem } from './ContractOccurrencesItem';
import type { ContractServiceModelsItem } from './ContractServiceModelsItem';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PaymentMethodsId } from './PaymentMethodsId';
import type { PaymentMethodsItem } from './PaymentMethodsItem';
import type { PositionsItem } from './PositionsItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ContractsItem = {
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Billing Recurrence
     */
    billingFrequency?: ContractsItem.billingFrequency;
    /**
     * Billing type
     */
    billingFrequencyType?: ContractsItem.billingFrequencyType;
    /**
     * Cycle reference date
     */
    billingStartDate?: Date;
    /**
     * Details: *On demand*
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
     * Payment Method: ID of the resource by default OR *on demand* JSON object of type [PaymentMethods](#operation/getOnePaymentMethods)
     */
    paymentMethod?: (PaymentMethodsId | PaymentMethodsItem);
    /**
     * Payment Terms
     */
    paymentTerms?: ContractsItem.paymentTerms;
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
    status?: ContractsItem.status;
    /**
     * This field was deprecated, Contract type is always contract
     */
    type?: ContractsItem.type;
    /**
     * This field was deprecated in favor of `serviceTypes`: *On demand*. List of JSON objects of type [ContractServiceModels](#operation/getOneContractServiceModels)
     */
    contractServiceModels?: Array<ContractServiceModelsItem>;
    /**
     * Service Types: *On demand*. List of JSON objects of type [ContractServiceModels](#operation/getOneContractServiceModels)
     */
    serviceTypes?: Array<ContractServiceModelsItem>;
    /**
     * Occurrences: *On demand*. List of JSON objects of type [ContractOccurrences](#operation/getOneContractOccurrences)
     */
    occurrences?: Array<ContractOccurrencesItem>;
    /**
     * Positions: *On demand*. List of JSON objects of type [Positions](#operation/getOnePositions)
     */
    positions?: Array<PositionsItem>;
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

export namespace ContractsItem {

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