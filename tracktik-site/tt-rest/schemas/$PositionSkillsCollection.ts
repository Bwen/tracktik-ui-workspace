/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionSkillsCollection = {
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
    },
} as const;