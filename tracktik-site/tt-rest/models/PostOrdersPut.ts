/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountsId } from './AccountsId';
import type { PostOrderAcknowledgementsId } from './PostOrderAcknowledgementsId';
import type { PostOrderSubjectsId } from './PostOrderSubjectsId';

export type PostOrdersPut = {
    /**
     * Subject
     */
    subject: PostOrderSubjectsId;
    /**
     * Details
     */
    details: string;
    /**
     * Account
     */
    account: AccountsId;
    /**
     * The acknowledgement statuses of the users for this post order
     */
    acknowledgements?: Array<PostOrderAcknowledgementsId>;
}