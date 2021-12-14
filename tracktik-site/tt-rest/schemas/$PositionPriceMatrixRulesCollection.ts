/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPriceMatrixRulesCollection = {
    properties: {
        position: {
    type: 'all-of',
    contains: [{
    type: 'PositionsId',
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
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
}],
},
        createdOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampDate',
}],
},
        updatedBy: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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