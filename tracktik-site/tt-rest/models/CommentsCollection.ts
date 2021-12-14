/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { TimeStampDate } from './TimeStampDate';

export type CommentsCollection = {
    /**
     * Comment
     */
    comment?: string;
    /**
     * The type depends on the entity
     */
    type?: CommentsCollection.type;
    /**
     * System ID
     */
    id?: Integer;
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

export namespace CommentsCollection {

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