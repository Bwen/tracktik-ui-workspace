/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionSkillsPost = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
}],
    isRequired: true,
},
        skill: {
    type: 'all-of',
    contains: [{
    type: 'SkillsId',
}],
    isRequired: true,
},
        type: {
    type: 'Enum',
    isRequired: true,
},
        comments: {
    type: 'string',
},
    },
} as const;