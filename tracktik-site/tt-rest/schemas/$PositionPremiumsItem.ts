/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PositionPremiumsItem = {
    properties: {
        status: {
    type: 'Enum',
},
        type: {
    type: 'Enum',
},
        code: {
    type: 'string',
},
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        amount: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        rate: {
    type: 'all-of',
    contains: [{
    type: 'Decimal',
}],
},
        isOvertime: {
    type: 'string',
},
        payCode: {
    type: 'one-of',
    contains: [{
    type: 'PayrollCodesId',
}, {
    type: 'PayrollCodesItem',
}],
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