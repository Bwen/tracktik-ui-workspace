/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AclRule = {
    properties: {
        grant: {
    type: 'dictionary',
    contains: {
        type: 'AclRuleItem',
    },
},
        deny: {
    type: 'dictionary',
    contains: {
        type: 'AclRuleItem',
    },
},
    },
} as const;