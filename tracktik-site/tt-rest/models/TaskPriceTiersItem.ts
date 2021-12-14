/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { HolidayGroupsItem } from './HolidayGroupsItem';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { Number } from './Number';
import type { Percentage } from './Percentage';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { TextArea } from './TextArea';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type TaskPriceTiersItem = {
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Name
     */
    name?: string;
    /**
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
    /**
     * Tax Class: ID of the resource by default OR *on demand* JSON object of type [TaxClasses](#operation/getOneTaxClasses)
     */
    taxClass?: (TaxClassesId | TaxClassesItem);
    /**
     * Charge type
     */
    chargeType?: TaskPriceTiersItem.chargeType;
    /**
     * Service model
     */
    serviceModel?: TaskPriceTiersItem.serviceModel;
    /**
     * The rate depends on the charge type
     */
    rate?: CurrencyRate;
    /**
     * The rate matrix is showed when chargeType is MATRIX
     */
    rateMatrix?: JSON;
    /**
     * Instructions
     */
    instructions?: TextArea;
    /**
     * Effective date
     */
    effectiveDate?: Date;
    /**
     * Valid until date
     */
    validUntilDate?: Date;
    /**
     * Cancellation Threshold
     */
    cancellationThresholdInMinutes?: Number;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Discount (%)
     */
    discount?: Percentage;
    /**
     * Fuel Surcharge (%)
     */
    fuelSurcharge?: Percentage;
    /**
     * Holiday Rate Type
     */
    holiday?: TaskPriceTiersItem.holiday;
    /**
     * Holiday Group: ID of the resource by default OR *on demand* JSON object of type [HolidayGroups](#operation/getOneHolidayGroups)
     */
    holidayGroup?: (HolidayGroupsId | HolidayGroupsItem);
    /**
     * Holiday multiplier
     */
    holidayMultiplier?: Decimal;
    /**
     * Holiday hourly rate
     */
    holidayRate?: CurrencyRate;
    /**
     * Holiday Flat Rate
     */
    holidayFlatRate?: CurrencyRate;
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

export namespace TaskPriceTiersItem {

    /**
     * Charge type
     */
    export enum chargeType {
        CONTRACTED = 'CONTRACTED',
        ACTUAL = 'ACTUAL',
        MATRIX = 'MATRIX',
        FLATRATE = 'FLATRATE',
        PREPAID = 'PREPAID',
    }

    /**
     * Service model
     */
    export enum serviceModel {
        CONTRACT_PATROL_SERVICE_MODEL = 'CONTRACT_PATROL_SERVICE_MODEL',
        CONTRACT_PATROL_VISITS_SERVICE_MODEL = 'CONTRACT_PATROL_VISITS_SERVICE_MODEL',
        DISPATCH_SERVICE_MODEL = 'DISPATCH_SERVICE_MODEL',
    }

    /**
     * Holiday Rate Type
     */
    export enum holiday {
        REGULAR = 'REGULAR',
        RATE = 'RATE',
        MULTIPLIER = 'MULTIPLIER',
        FLAT = 'FLAT',
    }


}