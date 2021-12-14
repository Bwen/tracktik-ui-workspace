/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewCategoriesPost = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        iconClass: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        parentCategory: {
    type: 'all-of',
    contains: [{
    type: 'DataViewCategoriesId',
}],
},
        options: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;