/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccountsCollection = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        type: {
    type: 'Enum',
},
        subType: {
    type: 'Enum',
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesCollection',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        status: {
    type: 'Enum',
},
        dispatchSla: {
    type: 'all-of',
    contains: [{
    type: 'DispatchSlasId',
}],
},
        closedDate: {
    type: 'all-of',
    contains: [{
    type: 'Date',
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
        avatar: {
    type: 'all-of',
    contains: [{
    type: 'Image',
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