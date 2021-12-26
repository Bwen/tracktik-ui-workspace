<script lang="ts">
	import { getContext } from 'svelte';
    import { slide } from 'svelte/transition';
    import { faPhone, faEnvelope, faUser, faHashtag } from '@fortawesome/free-solid-svg-icons';
    import Phone from '$components/ext/Phone.svelte';
    import TextIcon from '$lib/components/ext/TextIcon.svelte';
    import type { CountryCode } from 'libphonenumber-js';
    import type { EmployeesItem } from '@rest/models/EmployeesItem';
    import type { ClientsItem } from '@rest/models/ClientsItem';
    import Address from '$components/ext/Address.svelte';
    import { getCountryByAlpha2, getSubdivisionByCode } from '$lib/js/riso';
    import {t, date, time} from '$lib/i18n';


    let profile: EmployeesItem | ClientsItem = getContext('current-profile');
    if (typeof profile.address !== 'object') {
        throw new Error('Component ProfileHeader requires an AddressesItem sub-object');
    }

    if (typeof profile.region !== 'object') {
        throw new Error('Component ProfileHeader requires a RegionsItem sub-object');
    }

    if (typeof profile.region.address !== 'object') {
        throw new Error('Component ProfileHeader requires a RegionsItem.AddressesItem sub-object');
    }

    let lastLoggedInOn = profile.lastLoggedInOn || '';
    let customId = profile.customId || '';
    let username = profile.username || '';
    let defaultCountry: CountryCode = profile.region.address.country;
    let postalCountry: CountryCode = profile.address.country;
    let addressLines: string[] = [profile.address.addressLine1, profile.address.addressLine2];
    let phone = {
        phone: profile.primaryPhone,
        defaultCountry,
        country: postalCountry
    };

    let subdivision = getSubdivisionByCode((postalCountry || defaultCountry) +'-'+ profile.address.state);
    let administrativeArea = subdivision ? subdivision.name : '';
    let country = getCountryByAlpha2(postalCountry || defaultCountry);
    let address = {
        countryName: country ? country.name : '',
        postalCountry: postalCountry || defaultCountry,
        administrativeArea,
        locality: profile.address.city,
        postalCode: profile.address.postalCode,
        addressLinesString: addressLines.join('|'),
        mapLink: {text: $t('common.map')},
    };
    
    if (profile.address.latitude && profile.address.longitude) {
        address.coord = {lat: profile.address.latitude, lng: profile.address.longitude};
    }
</script>

<div class="wrapper-header-profile">
    <div class="header-profile">
        {#if profile.avatar}<img src="{profile.avatar}" alt="Employee Avatar"  transition:slide={{duration: 500}}/>{/if}
        <div class="contact-address">
            <h2>{profile.name}</h2>
            <Address {...address} />
        </div>
        <div class="contact">
            <ul>
                <li><Phone icon={faPhone} {...phone} /></li>
                <li><TextIcon icon={faEnvelope} text={profile.email} /></li>
                {#if username}<li><TextIcon icon={faUser} text={username} /></li>{/if}
                {#if customId && customId !== 'N/A'}<li><TextIcon icon={faHashtag} text={customId} /></li>{/if}
            </ul>
        </div>
        <div class="contact-extra">
            <ul>
                <li>
                    <strong>Last Login:</strong><br />
                    {$date(Date.parse(lastLoggedInOn), {format: 'long'})}<br />
                    <sup>{$time(Date.parse(lastLoggedInOn), {format: 'long'})}</sup>
                </li>
            </ul>
        </div>
    </div>
</div>

<style lang="css">
    .wrapper-header-profile {
        background-color: var(--tcolor-bg-dark2);
        color: #CCC;
    }

    .header-profile {
        display: flex;
    }

    .header-profile :global(.wrapper-address) {
        margin-top: .5em;
    }

    .header-profile {
        padding: .75em;
    }

    .header-profile [class^="contact"] {
        margin-left: 1.5em;
    }
    
    .header-profile img {
        box-sizing: border-box;
        border: 1px solid var(--tcolor-bg-border);
        margin: 6px;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .header-profile h2 {
        margin: 0;
    }

    .header-profile ul,
    .header-profile li {
        list-style-type: none;
        margin: .35em 0;
        padding: 0;
    }
</style>