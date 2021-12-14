/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Boolean } from './Boolean';
import type { Date } from './Date';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { RegionsId } from './RegionsId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type InvoiceBatchesCollection = {
    /**
     * Region
     */
    region?: RegionsId;
    /**
     * Batch start date
     */
    startDate?: Date;
    /**
     * Batch end date
     */
    endDate?: Date;
    /**
     * Boolean value indicating if the adhoc invoices are included ot not.
     */
    adhocsIncluded?: Boolean;
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