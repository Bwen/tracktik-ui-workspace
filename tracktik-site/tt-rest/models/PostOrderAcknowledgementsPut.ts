/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { PostOrdersId } from './PostOrdersId';

export type PostOrderAcknowledgementsPut = {
    /**
     * The status of acknowledgement
     */
    status: PostOrderAcknowledgementsPut.status;
    /**
     * The related post order
     */
    postOrder: PostOrdersId;
    /**
     * The employee who has acknowledged the post order
     */
    employee: EmployeesId;
}

export namespace PostOrderAcknowledgementsPut {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}