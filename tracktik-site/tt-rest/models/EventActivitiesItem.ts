/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { TimeStampNumber } from './TimeStampNumber';

export type EventActivitiesItem = {
    /**
     * User: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    user?: (EmployeesId | EmployeesItem);
    /**
     * Type
     */
    type?: string;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Timestamp (Unix)
     */
    createdOn?: TimeStampNumber;
    /**
     * This field was deprecated in favor of `createdOn`
     */
    timeStamp?: TimeStampNumber;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Updated Date Time: *On demand*
     */
    updatedOn?: TimeStampNumber;
}