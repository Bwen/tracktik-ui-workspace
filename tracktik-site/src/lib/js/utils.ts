import type { Link } from '@types/Link.type';

export function filterItemsBySession(items: any, session: any): Link[] {
    let permissions = session.auth.permissions;
    let modules = session.portal.modules;

    // If admin or superuser we skip the permissions & modules check
    //if (permissions.indexOf('admin:*') !== -1 || permissions.indexOf('superuser:*') !== -1) {
    //    return;
    //}

    for (let i=0; i < items.length; i++) {
        let item = items[i];
        if (Object.hasOwnProperty.call(item, 'acl')) {
            if (permissions.indexOf(item.acl) === -1) {
                items.splice(i, 1);
            } else {
                delete items[i].acl;
            }
        } 

        if (Object.hasOwnProperty.call(item, 'module')) {
            if (modules.indexOf(item.module) === -1) {
                items.splice(i, 1);
            } else {
                delete items[i].module;
            }
        }
    }

    return items;
}


export function replaceMarkers(raw: string, item: any) {
    if (typeof raw !== 'string') {
        return raw;
    }

    let results = [...raw.matchAll(/\{([a-z\.]+)\}/ig)];
    if (results.length) {
        for (let i=0; i < results.length; i++) {
            raw = raw.replace(results[i][0], getItemValue(results[i][1], item));
        }
    }

    return raw;
}

export function getItemValue(key: string, item: any) {
    if (Object.hasOwnProperty.call(item, key)) {
        return item[key];
    }

    let value = '';
    if (key.indexOf(',') !== -1) {
        let parts = key.split(',');
        for (let i=0; i < parts.length; i++) {
            value += ' ' + getItemValue(parts[i], item);
        }
    } else if (key.indexOf('.') !== -1) {
        value = item;
        let parts = key.split('.');
        for (let i=0; i < parts.length; i++) {
            let part = parts[i].trim();
            if (Object.hasOwnProperty.call(value, part)) {
                value = value[part];
            }
        }
    }

    return value;
}