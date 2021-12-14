/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionSkillsPatch = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
},
        skill: {
    type: 'all-of',
    contains: [{
    type: 'SkillsId',
}],
},
        type: {
    type: 'Enum',
},
        comments: {
    type: 'string',
},
    },
} as const;