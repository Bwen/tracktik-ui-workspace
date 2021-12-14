/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AclRuleItem = {
    properties: {
        permission: {
    type: 'AclRuleItemPermission',
    isRequired: true,
},
        source: {
    type: 'AclRuleItemSource',
    isRequired: true,
},
    },
} as const;