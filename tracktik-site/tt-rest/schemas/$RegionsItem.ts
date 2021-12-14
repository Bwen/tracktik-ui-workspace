/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegionsItem = {
    properties: {
        customId: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
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
        primaryPhone: {
    type: 'all-of',
    contains: [{
    type: 'PhoneNumber',
}],
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        address: {
    type: 'one-of',
    contains: [{
    type: 'AddressesId',
}, {
    type: 'AddressesItem',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        parentRegion: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        prefix: {
    type: 'all-of',
    contains: [{
    type: 'Label',
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
        logo: {
    type: 'all-of',
    contains: [{
    type: 'Image',
}],
},
    },
} as const;