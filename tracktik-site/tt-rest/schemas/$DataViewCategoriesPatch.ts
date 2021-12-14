/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewCategoriesPatch = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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