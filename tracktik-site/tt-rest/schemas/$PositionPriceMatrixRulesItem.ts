/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPriceMatrixRulesItem = {
    properties: {
        position: {
    type: 'one-of',
    contains: [{
    type: 'PositionsId',
}, {
    type: 'PositionsItem',
}],
},
        days: {
    type: 'Enum',
},
        startTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        endTime: {
    type: 'all-of',
    contains: [{
    type: 'Time',
}],
},
        price: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
}],
},
        isPercentage: {
    type: 'all-of',
    contains: [{
    type: 'Currency',
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