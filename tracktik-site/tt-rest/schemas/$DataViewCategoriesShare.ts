/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewCategoriesShare = {
    properties: {
        aclRule: {
    type: 'all-of',
    contains: [{
    type: 'AclRule',
}],
},
        notify: {
    type: 'all-of',
    contains: [{
    type: 'Boolean',
}],
},
        message: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
    },
} as const;