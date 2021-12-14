/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EmployeesCollection = {
    properties: {
        jobTitle: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        region: {
    type: 'all-of',
    contains: [{
    type: 'RegionsId',
}],
},
        employmentProfile: {
    type: 'all-of',
    contains: [{
    type: 'EmploymentProfilesCollection',
}],
},
        gender: {
    type: 'Enum',
},
        age: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        birthday: {
    type: 'all-of',
    contains: [{
    type: 'Date',
}],
},
        ageGroup: {
    type: 'string',
},
        address: {
    type: 'all-of',
    contains: [{
    type: 'AddressesCollection',
}],
},
        tags: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
},
        notificationSettings: {
    type: 'all-of',
    contains: [{
    type: 'UserNotificationSettingsCollection',
}],
},
        language: {
    type: 'Enum',
},
        id: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        customId: {
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
        name: {
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
        username: {
    type: 'string',
},
        email: {
    type: 'all-of',
    contains: [{
    type: 'Email',
}],
},
        status: {
    type: 'Enum',
},
        lastLoggedInOn: {
    type: 'all-of',
    contains: [{
    type: 'TimeStampNumber',
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