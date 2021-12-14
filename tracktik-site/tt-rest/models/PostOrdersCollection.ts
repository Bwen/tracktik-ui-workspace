/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PostOrderSubjectsId } from './PostOrderSubjectsId';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PostOrdersCollection = {
    /**
     * Subject
     */
    subject?: PostOrderSubjectsId;
    /**
     * Details
     */
    details?: string;
    /**
     * Account
     */
    account?: AccountsId;
    /**
     * Version Number
     */
    version?: Integer;
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
     * Created On
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By
     */
    updatedBy?: EmployeesId;
    /**
     * Last Updated On
     */
    updatedOn?: TimeStampDate;
}