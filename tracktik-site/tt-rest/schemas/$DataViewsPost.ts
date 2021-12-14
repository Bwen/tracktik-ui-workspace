/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewsPost = {
    properties: {
        is: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        widgetType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        title: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        status: {
    type: 'Enum',
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'TextArea',
}],
},
        uid: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        category: {
    type: 'all-of',
    contains: [{
    type: 'DataViewCategoriesId',
}],
},
        configs: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
},
    },
} as const;