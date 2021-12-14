/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionSkillsItem = {
    properties: {
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        skill: {
    type: 'one-of',
    contains: [{
    type: 'SkillsId',
}, {
    type: 'SkillsItem',
}],
},
        type: {
    type: 'Enum',
},
        comments: {
    type: 'string',
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;