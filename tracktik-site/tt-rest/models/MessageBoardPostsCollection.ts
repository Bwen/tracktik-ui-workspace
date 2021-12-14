/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { MessageBoardPostCategoriesId } from './MessageBoardPostCategoriesId';
import type { TextArea } from './TextArea';
import type { TimeStampDate } from './TimeStampDate';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type MessageBoardPostsCollection = {
    /**
     * The message we want share with the recipients
     */
    content?: TextArea;
    /**
     * The status of the message
     */
    status?: MessageBoardPostsCollection.status;
    /**
     * The date we want hide the message
     */
    expireOn?: TimeStampNumber;
    /**
     * The account for this message
     */
    account?: AccountsId;
    /**
     * The category for this message
     */
    category?: MessageBoardPostCategoriesId;
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

export namespace MessageBoardPostsCollection {

    /**
     * The status of the message
     */
    export enum status {
        ACTUAL = 'ACTUAL',
        DRAFT = 'DRAFT',
        COMPLETE = 'COMPLETE',
    }


}