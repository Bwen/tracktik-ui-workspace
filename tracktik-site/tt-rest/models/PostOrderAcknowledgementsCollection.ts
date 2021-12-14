/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { Integer } from './Integer';
import type { Label } from './Label';
import type { PostOrdersId } from './PostOrdersId';
import type { TimeStampNumber } from './TimeStampNumber';
import type { Uri } from './Uri';

export type PostOrderAcknowledgementsCollection = {
    /**
     * The status of acknowledgement
     */
    status?: PostOrderAcknowledgementsCollection.status;
    /**
     * The related post order
     */
    postOrder?: PostOrdersId;
    /**
     * The employee who has acknowledged the post order
     */
    employee?: EmployeesId;
    /**
     * The date & time the post order has been acknowledged
     */
    acknowledgedOn?: TimeStampNumber;
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
}

export namespace PostOrderAcknowledgementsCollection {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}