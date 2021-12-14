/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { Number } from './Number';
import type { TaxClassesId } from './TaxClassesId';
import type { TaxClassesItem } from './TaxClassesItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type PriceTiersItem = {
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
     * Contract: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
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