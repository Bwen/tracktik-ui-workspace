/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SchedulersPut = {
    properties: {
        label: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        repeat: {
    type: 'Enum',
    isRequired: true,
},
        startDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
    isRequired: true,
},
        endDateTime: {
    type: 'all-of',
    contains: [{
    type: 'DateTime',
}],
    isRequired: true,
},
        timeZone: {
    type: 'all-of',
    contains: [{
    type: 'TimeZone',
}],
    isRequired: true,
},
        every: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        weekDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        monthDay: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        yearDay: {
    type: 'all-of',
    contains: [{
    type: 'Label',
}],
    isRequired: true,
},
        status: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        lastPerform: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        nextPerform: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        graceValueBefore: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        graceUnitBefore: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        graceValueAfter: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        graceUnitAfter: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        createUserId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        updateUserId: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        createTime: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
        updateTime: {
    type: 'all-of',
    contains: [{
    type: 'Integer',
}],
    isRequired: true,
},
    },
} as const;