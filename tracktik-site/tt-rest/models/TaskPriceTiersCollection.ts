/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { ContractsId } from './ContractsId';
import type { CurrencyRate } from './CurrencyRate';
import type { Date } from './Date';
import type { Decimal } from './Decimal';
import type { EmployeesId } from './EmployeesId';
import type { HolidayGroupsId } from './HolidayGroupsId';
import type { Integer } from './Integer';
import type { JSON } from './JSON';
import type { Label } from './Label';
import type { Number } from './Number';
import type { Percentage } from './Percentage';
import type { TaxClassesId } from './TaxClassesId';
import type { TextArea } from './TextArea';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type TaskPriceTiersCollection = {
    /**
     * Custom ID
     */
    customId?: string;
    /**
     * Name
     */
    name?: string;
    /**
     * Contract
     */
    contract?: ContractsId;
    /**
     * Tax Class
     */
    taxClass?: TaxClassesId;
    /**
     * Charge type
     */
    chargeType?: TaskPriceTiersCollection.chargeType;
    /**
     * Service model
     */
    serviceModel?: TaskPriceTiersCollection.serviceModel;
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
     * Account
     */
    account?: AccountsId;
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
    holiday?: TaskPriceTiersCollection.holiday;
    /**
     * Holiday Group
     */
    holidayGroup?: HolidayGroupsId;
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

export namespace TaskPriceTiersCollection {

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