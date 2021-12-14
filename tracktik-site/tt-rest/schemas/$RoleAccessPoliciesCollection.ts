/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RoleAccessPoliciesCollection = {
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
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        uri: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        resourceType: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
    },
} as const;