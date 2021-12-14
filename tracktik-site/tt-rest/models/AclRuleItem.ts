/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AclRuleItemPermission } from './AclRuleItemPermission';
import type { AclRuleItemSource } from './AclRuleItemSource';

export type AclRuleItem = {
    permission: AclRuleItemPermission;
    source: AclRuleItemSource;
}