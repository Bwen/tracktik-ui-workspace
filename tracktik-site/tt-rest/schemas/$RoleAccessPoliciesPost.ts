/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RoleAccessPoliciesPost = {
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
    isRequired: true,
},
        scenarioCode: {
    type: 'Enum',
},
    },
} as const;