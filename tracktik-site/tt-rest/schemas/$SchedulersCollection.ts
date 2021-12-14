/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SchedulersCollection = {
    properties: {
        label: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        repeat: {
    type: 'Enum',
},
        startDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'TimeZone',
}],
},
        every: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        weekDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        monthDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        yearDay: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
},
        status: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        lastPerform: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        nextPerform: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        graceValueBefore: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        graceUnitBefore: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        graceValueAfter: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        graceUnitAfter: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        createUserId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        updateUserId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        createTime: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
},
        updateTime: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
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
    type: 'TimeStampNumber',
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
    type: 'TimeStampNumber',
}],
},
    },
} as const;