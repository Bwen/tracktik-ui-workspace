/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AclRule } from './AclRule';
import type { Boolean } from './Boolean';
import type { TextArea } from './TextArea';

export type DataViewCategoriesShare = {
    /**
     * Access Control List
     */
    aclRule?: AclRule;
    /**
     * Whether to notify all users receiving access to the resource. A list of user ids can also be provided for greater control of who receives this notification.
     */
    notify?: Boolean;
    /**
     * Message
     */
    message?: TextArea;
}