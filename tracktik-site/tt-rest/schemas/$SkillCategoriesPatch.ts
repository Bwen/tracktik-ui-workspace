/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SkillCategoriesPatch = {
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
},
        description: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;