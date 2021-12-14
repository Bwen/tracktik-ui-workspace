/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SkillsPatch = {
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
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
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
    },
} as const;