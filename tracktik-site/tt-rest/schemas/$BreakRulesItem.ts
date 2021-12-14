/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BreakRulesItem = {
    properties: {
        name: {
    type: 'string',
},
        status: {
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
        effectiveDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        conditions: {
    type: 'array',
    contains: {
        type: 'BreakRuleConditionsItem',
    },
},
        positions: {
    type: 'array',
    contains: {
        type: 'PositionsItem',
    },
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
        createdBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        updatedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
    },
} as const;