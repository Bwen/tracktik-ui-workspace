/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractOccurrenceLogsId } from './ContractOccurrenceLogsId';
import type { ContractsId } from './ContractsId';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type ContractOccurrencesCollection = {
    /**
     * The unique identifier of the occurrence
     */
    id?: Integer;
    /**
     * This field was deprecated in favor of `contract`
     */
    contractId?: Integer;
    /**
     * The contract of the occurrence
     */
    contract?: ContractsId;
    /**
     * Occurrence Date
     */
    occurrenceDate?: Date;
    /**
     * This field was deprecated in favor of `log`
     */
    status?: Array<ContractOccurrenceLogsId>;
    /**
     * Occurrence Log
     */
    log?: ContractOccurrenceLogsId;
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