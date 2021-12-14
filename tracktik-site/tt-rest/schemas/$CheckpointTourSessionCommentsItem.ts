/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CheckpointTourSessionCommentsItem = {
    properties: {
        session: {
    type: 'one-of',
    contains: [{
    type: 'CheckpointTourSessionsId',
}, {
    type: 'CheckpointTourSessionsItem',
}],
},
        content: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        pictures: {
    type: 'array',
    contains: {
        type: 'FilesItem',
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