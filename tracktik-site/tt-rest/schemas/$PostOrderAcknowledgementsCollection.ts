/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostOrderAcknowledgementsCollection = {
    properties: {
        status: {
    type: 'Enum',
},
        postOrder: {
    type: 'all-of',
    contains: [{
    type: 'PostOrdersId',
}],
},
        employee: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesId',
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