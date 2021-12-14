/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrderAcknowledgementsItem = {
    properties: {
        status: {
    type: 'Enum',
},
        postOrder: {
    type: 'one-of',
    contains: [{
    type: 'PostOrdersId',
}, {
    type: 'PostOrdersItem',
}],
},
        employee: {
    type: 'one-of',
    contains: [{
    type: 'EmployeesId',
}, {
    type: 'EmployeesItem',
}],
},
        acknowledgedOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
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