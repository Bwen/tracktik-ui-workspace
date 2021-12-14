/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Number } from './Number';
import type { TaxClassesId } from './TaxClassesId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type PriceTiersCollection = {
    /**
     * Name
     */
    name?: string;
    /**
     * Custom identifier
     */
    customId?: string;
    /**
     * Instructions
     */
    instructions?: string;
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
     * Contract
     */
    contract?: ContractsId;
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