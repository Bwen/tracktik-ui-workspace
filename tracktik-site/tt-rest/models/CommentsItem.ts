/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { TimeStampDate } from './TimeStampDate';

export type CommentsItem = {
    /**
     * Comment
     */
    comment?: string;
    /**
     * The type depends on the entity
     */
    type?: CommentsItem.type;
    /**
     * System ID
     */
    id?: Integer;
    /**
     * Created By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    createdBy?: (EmployeesId | EmployeesItem);
    /**
     * Created On: *On demand*
     */
    createdOn?: TimeStampDate;
    /**
     * Last Updated By: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    updatedBy?: (EmployeesId | EmployeesItem);
    /**
     * Last Updated On: *On demand*
     */
    updatedOn?: TimeStampDate;
}

export namespace CommentsItem {

    /**
     * The type depends on the entity
     */
    export enum type {
        COMMENT = 'COMMENT',
        LOG = 'LOG',
        BILLING_NOTE = 'BILLING_NOTE',
        AUTO_APPROVED = 'AUTO_APPROVED',
    }


}