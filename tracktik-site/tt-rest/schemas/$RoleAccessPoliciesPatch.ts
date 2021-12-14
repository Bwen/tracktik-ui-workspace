/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RoleAccessPoliciesPatch = {
    properties: {
        authorization: {
    type: 'Enum',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        role: {
    type: 'all-of',
    contains: [{
    type: 'RolesId',
}],
},
        scenarioCode: {
    type: 'Enum',
},
    },
} as const;