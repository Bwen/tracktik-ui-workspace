/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SkillCategoriesPost = {
    properties: {
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;