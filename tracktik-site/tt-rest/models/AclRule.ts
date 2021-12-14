/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AclRuleItem } from './AclRuleItem';

export type AclRule = {
    grant?: Record<string, AclRuleItem>;
    deny?: Record<string, AclRuleItem>;
}