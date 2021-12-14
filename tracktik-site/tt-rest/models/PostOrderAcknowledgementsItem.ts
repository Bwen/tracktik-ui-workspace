/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { EmployeesItem } from './EmployeesItem';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PostOrdersId } from './PostOrdersId';
import type { PostOrdersItem } from './PostOrdersItem';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type PostOrderAcknowledgementsItem = {
    /**
     * The status of acknowledgement
     */
    status?: PostOrderAcknowledgementsItem.status;
    /**
     * The related post order: ID of the resource by default OR *on demand* JSON object of type [PostOrders](#operation/getOnePostOrders)
     */
    postOrder?: (PostOrdersId | PostOrdersItem);
    /**
     * The employee who has acknowledged the post order: ID of the resource by default OR *on demand* JSON object of type [Employees](#operation/getOneEmployees)
     */
    employee?: (EmployeesId | EmployeesItem);
    /**
     * The date & time the post order has been acknowledged
     */
    acknowledgedOn?: TimeStampNumber;
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
}

export namespace PostOrderAcknowledgementsItem {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}