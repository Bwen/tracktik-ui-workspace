/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmployeesId } from './EmployeesId';
import type { PostOrdersId } from './PostOrdersId';

export type PostOrderAcknowledgementsPatch = {
    /**
     * The status of acknowledgement
     */
    status?: PostOrderAcknowledgementsPatch.status;
    /**
     * The related post order
     */
    postOrder?: PostOrdersId;
    /**
     * The employee who has acknowledged the post order
     */
    employee?: EmployeesId;
}

export namespace PostOrderAcknowledgementsPatch {

    /**
     * The status of acknowledgement
     */
    export enum status {
        NEW = 'NEW',
        ACKNOWLEDGED = 'ACKNOWLEDGED',
        HIDDEN = 'HIDDEN',
    }


}