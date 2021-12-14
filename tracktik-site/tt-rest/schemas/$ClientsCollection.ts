/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ClientsCollection = {
    properties: {
        name: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        company: {
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
        parentClient: {
    type: 'all-of',
    contains: [{
    type: 'ClientsId',
}],
},
        firstName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        lastName: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        jobTitle: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        primaryPhone: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        secondaryPhone: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        type: {
    type: 'Enum',
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        status: {
    type: 'Enum',
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesCollection',
}],
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        faxNumber: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        website: {
    type: 'all-of',
    contains: [{
    type: 'Uri',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        tags: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
},
        salesRepresentative: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesCollection',
}],
},
        accountRepresentative: {
    type: 'all-of',
    contains: [{
    type: 'EmployeesCollection',
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
        avatar: {
    type: 'all-of',
    contains: [{
    type: 'Image',
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