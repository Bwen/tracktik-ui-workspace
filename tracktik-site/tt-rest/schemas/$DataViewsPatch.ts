/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DataViewsPatch = {
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
},
        status: {
    type: 'Enum',
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