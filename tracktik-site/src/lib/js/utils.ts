import type { MenuItem } from '$lib/@types/MenuItem.type';
import { getCountryByAlpha2, getSubdivisionByCode } from '$lib/js/riso';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import type { CountryCode } from 'libphonenumber-js';

export function filterMenuItemsBySession(items: MenuItem[], session: any): MenuItem[] {
    let permissions = session.auth.permissions;
    let modules = session.portal.modules;

    // If admin or superuser we skip the permissions & modules check
    //if (permissions.indexOf('admin:*') !== -1 || permissions.indexOf('superuser:*') !== -1) {
    //    return;
    //}

    return filterMenuItems(items, permissions, modules);
}

function filterMenuItems(items: MenuItem[], permissions: any, modules: any): MenuItem[] {
    for (let i=0; i < items.length; i++) {
        let item = items[i];
        if (Object.hasOwnProperty.call(item, 'acl')) {
            if (permissions.indexOf(item.acl) === -1) {
                items.splice(i, 1);
            } else {
                delete items[i].acl;
            }
        } 

        if (Object.hasOwnProperty.call(item, 'module') && modules) {
            if (modules.indexOf(item.module) === -1) {
                items.splice(i, 1);
            } else {
                delete items[i].module;
            }
        }

        if (Object.hasOwnProperty.call(item, 'subItems')) {
            item['subItems'] = filterMenuItems(item['subItems'], permissions, modules);
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

export function getRegionOptions(regions) {
    const hqId = getHeadquarterId(regions);
    const parentRegions = getRegionsByParentId(regions, ['0', '1', hqId]);
    const regionOptions = [];
    for (let i=0; i < parentRegions.length; i++) {
        const parentRegion = parentRegions[i];
        regionOptions.push({
            value: parentRegions[i].id,
            text: parentRegions[i].name,
        });

        if (['0', '1', hqId].indexOf(parentRegion.id) !== -1) {
            continue;
        }

        fetchSubRegions(regionOptions, parentRegion.id, regions, 1);
    }

    return regionOptions;
}

function fetchSubRegions(regionOptions, regionId: string, regions, indent=1): number {
    const subRegions = getRegionsByParentId(regions, [regionId]);
    for (let j=0; j < subRegions.length; j++) {
        const subRegion = subRegions[j];
        regionOptions.push({
            value: subRegion.id,
            text: subRegion.name,
            icon: faCaretRight,
            indent,
            parentValue: regionId,
        });

        indent = fetchSubRegions(regionOptions, subRegion.id, regions, ++indent);
    }

    return --indent;
}

function getHeadquarterId(regions: []): string {
    for (let i=0; i < regions.length; i++) {
        if (['0', '1'].indexOf(regions[i].parentId) !== -1) {
            return regions[i].id;
        }
    }

    return '0';
}

function getRegionsByParentId(regions: [], ids: string[]): any[] {
    let filteredRegions = [];
    for (let i=0; i < regions.length; i++) {
        if (ids.indexOf(regions[i].parentId) !== -1) {
            filteredRegions.push(regions[i]);
        }
    }

    return filteredRegions;
}

export function getPhoneProps(profile) {
    let defaultCountry: CountryCode = profile.region.address.country;
    let postalCountry: CountryCode = profile.address.country;
    return {
        phone: profile.primaryPhone,
        defaultCountry,
        country: postalCountry
    };
}

export function getAddressProps(profile) {
    const addressLines: string[] = [profile.address.addressLine1, profile.address.addressLine2];
    const defaultCountry = profile.region.address.country;
    const postalCountry = profile.address.country;
    const subdivision = getSubdivisionByCode((postalCountry || defaultCountry) +'-'+ profile.address.state);
    const administrativeArea = subdivision ? subdivision.name : '';
    const country = getCountryByAlpha2(postalCountry || defaultCountry);
    return {
        countryName: country ? country.name : '',
        postalCountry: postalCountry || defaultCountry,
        administrativeArea,
        locality: profile.address.city,
        postalCode: profile.address.postalCode,
        addressLinesString: addressLines.join('|'),
    };
}

export function showProfileToolTip(event, entries, cellClass, tooltipSelector) {
    let tooltipProfile = null;
    const td = event.detail.target;
    const tr = event.detail.row;
    if (td.classList.contains(cellClass)) {
        const tdRect = td.getBoundingClientRect();
        const id = tr.id.replace('row-', '');
        const entry = entries.find(entry => id == entry.id);
        if (!entry) {
            return tooltipProfile;
        }

        tooltipProfile = entry;
        if (entry.account) {
            tooltipProfile = entry.account;
        }

        let tooltipMarkup = document.querySelector(tooltipSelector);
        const top = (tdRect.top + window.scrollY) - 50;
        const left = (tdRect.left + window.scrollX + tdRect.width + 10);
        tooltipMarkup.style.top = top + 'px';
        tooltipMarkup.style.left = left + 'px';
    }

    return tooltipProfile;
}