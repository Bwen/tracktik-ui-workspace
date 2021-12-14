/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { PostOrdersId } from './PostOrdersId';

export type PostOrderAcknowledgementsPost = {
    /**
     * The status of acknowledgement
     */
    status: PostOrderAcknowledgementsPost.status;
    /**
     * The related post order
     */
    postOrder: PostOrdersId;
    /**
     * The employee who has acknowledged the post order
     */
    employee: EmployeesId;
}

export namespace PostOrderAcknowledgementsPost {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}