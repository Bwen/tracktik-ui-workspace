/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OvertimeRulesCollection = {
    properties: {
        name: {
    type: 'string',
},
        periodLength: {
    type: 'Enum',
},
        ruleType: {
    type: 'Enum',
},
        rules: {
    type: 'all-of',
    contains: [{
    type: 'JSON',
}],
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