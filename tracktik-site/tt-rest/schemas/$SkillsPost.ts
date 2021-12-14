/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SkillsPost = {
    properties: {
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        category: {
    type: 'all-of',
    contains: [{
    type: 'SkillCategoriesId',
}],
    isRequired: true,
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        dateLabel: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        label1: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        label2: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        label3: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
    },
} as const;