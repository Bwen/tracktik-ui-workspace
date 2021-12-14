/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { AccountsItem } from './AccountsItem';
import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { FilesItem } from './FilesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PostOrderAcknowledgementsItem } from './PostOrderAcknowledgementsItem';
import type { PostOrderSubjectsId } from './PostOrderSubjectsId';
import type { PostOrderSubjectsItem } from './PostOrderSubjectsItem';
import type { TimeStampDate } from './TimeStampDate';
import type { Uri } from './Uri';

export type PostOrdersItem = {
    /**
     * Subject: ID of the resource by default OR *on demand* JSON object of type PostOrderSubjects
     */
    subject?: (PostOrderSubjectsId | PostOrderSubjectsItem);
    /**
     * Details
     */
    details?: string;
    /**
     * Account: ID of the resource by default OR *on demand* JSON object of type [Accounts](#operation/getOneAccounts)
     */
    account?: (AccountsId | AccountsItem);
    /**
     * Version Number
     */
    version?: Integer;
    /**
     * The acknowledgement statuses of the users for this post order: *On demand*. List of JSON objects of type [PostOrderAcknowledgements](#operation/getOnePostOrderAcknowledgements)
     */
    acknowledgements?: Array<PostOrderAcknowledgementsItem>;
    /**
     * Attachments: *On demand*. List of JSON objects of type Files
     */
    attachments?: Array<FilesItem>;
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