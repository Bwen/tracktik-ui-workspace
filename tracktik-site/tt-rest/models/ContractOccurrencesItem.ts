/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractOccurrenceLogsId } from './ContractOccurrenceLogsId';
import type { ContractOccurrenceLogsItem } from './ContractOccurrenceLogsItem';
import type { ContractsId } from './ContractsId';
import type { ContractsItem } from './ContractsItem';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ContractOccurrencesItem = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * This field was deprecated in favor of `contract`
     */
    contractId?: Integer;
    /**
     * The contract of the occurrence: ID of the resource by default OR *on demand* JSON object of type [Contracts](#operation/getOneContracts)
     */
    contract?: (ContractsId | ContractsItem);
    /**
     * Occurrence Date
     */
    occurrenceDate?: Date;
    /**
     * This field was deprecated in favor of `log`: ID of the resource by default OR *on demand* JSON object of type [ContractOccurrenceLogs](#operation/getOneContractOccurrenceLogs)
     */
    status?: Array<ContractOccurrenceLogsItem>;
    /**
     * Occurrence Log: ID of the resource by default OR *on demand* JSON object of type [ContractOccurrenceLogs](#operation/getOneContractOccurrenceLogs)
     */
    log?: (ContractOccurrenceLogsId | ContractOccurrenceLogsItem);
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