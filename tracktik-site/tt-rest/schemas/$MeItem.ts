/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MeItem = {
    properties: {
        jobTitle: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        region: {
    type: 'one-of',
    contains: [{
    type: 'RegionsId',
}, {
    type: 'RegionsItem',
}],
},
        employmentProfile: {
    type: 'one-of',
    contains: [{
    type: 'EmploymentProfilesId',
}, {
    type: 'EmploymentProfilesItem',
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
        emergencyContacts: {
    type: 'array',
    contains: {
        type: 'ContactsItem',
    },
},
        skills: {
    type: 'array',
    contains: {
        type: 'EmployeeSkillsItem',
    },
},
        notes: {
    type: 'array',
    contains: {
        type: 'NotesItem',
    },
},
        availabilities: {
    type: 'array',
    contains: {
        type: 'EmployeeAvailabilitiesItem',
    },
},
        accountAssignments: {
    type: 'array',
    contains: {
        type: 'EmployeeAccountAssignmentsItem',
    },
},
        accountBans: {
    type: 'array',
    contains: {
        type: 'EmployeeAccountBansItem',
    },
},
        address: {
    type: 'one-of',
    contains: [{
    type: 'AddressesId',
}, {
    type: 'AddressesItem',
}],
},
        tags: {
    type: 'all-of',
    contains: [{
    type: 'CSV',
}],
},
        notificationSettings: {
    type: 'one-of',
    contains: [{
    type: 'UserNotificationSettingsId',
}, {
    type: 'UserNotificationSettingsItem',
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