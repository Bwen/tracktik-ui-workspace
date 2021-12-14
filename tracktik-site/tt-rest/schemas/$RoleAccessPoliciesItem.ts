/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RoleAccessPoliciesItem = {
    properties: {
        authorization: {
    type: 'Enum',
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        role: {
    type: 'one-of',
    contains: [{
    type: 'RolesId',
}, {
    type: 'RolesItem',
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