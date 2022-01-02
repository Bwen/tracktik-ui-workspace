<script lang="ts">
	import { getContext } from 'svelte';
    import { fade } from 'svelte/transition';
    import type { Link as LinkType } from '$lib/@types/Link.type';
    import { faArrowUp, faArrowDown, faPhone, faEnvelope, faUser, faHashtag } from '@fortawesome/free-solid-svg-icons';
    import { pref } from '$lib/stores/cache';
    import Phone from '$components/ext/Phone.svelte';
    import Link from '$components/ext/Link.svelte';
    import TextIcon from '$lib/components/ext/TextIcon.svelte';
    import type { EmployeesItem } from '@rest/models/EmployeesItem';
    import type { ClientsItem } from '@rest/models/ClientsItem';
    import Address from '$components/ext/Address.svelte';
    import { getAddressProps, getPhoneProps } from '$lib/js/utils';
    import {t, date, time} from '$lib/i18n';

    const profile: EmployeesItem | ClientsItem = getContext('current-profile');
    if (typeof profile.address !== 'object') {
        throw new Error('Component ProfileHeader requires an AddressesItem sub-object');
    }

    if (typeof profile.region !== 'object') {
        throw new Error('Component ProfileHeader requires a RegionsItem sub-object');
    }

    if (typeof profile.region.address !== 'object') {
        throw new Error('Component ProfileHeader requires a RegionsItem.AddressesItem sub-object');
    }

    const lastLoggedInOn = profile.lastLoggedInOn || '';
    const customId = profile.customId || '';
    const username = profile.username || '';
    const phone = getPhoneProps(profile);
    const address = getAddressProps(profile);
    address.mapLink = {text: $t('common.map')};

    function getContactName(prof) {
        if (!prof.company) {
            return prof.jobTitle;
        }

        return prof.firstName + ' ' + prof.lastName + ' - ' + prof.jobTitle;
    }

    let minimized = $pref.state.profileHeader ?? false;
    let minimizeProps: LinkType = {
        icon: minimized ? faArrowUp : faArrowDown, 
        icon_hover: minimized ? faArrowDown : faArrowUp
    };

    function toggleMinimize(event) {
        minimized = !minimized;
        $pref.state.profileHeader = minimized;
        minimizeProps.icon = minimized ? faArrowUp : faArrowDown;
        minimizeProps.icon_hover = minimized ? faArrowDown : faArrowUp;
    }

</script>

<div class="wrapper-header-profile">
    <div class="header-profile" class:minimized>
        <div class="minimize"><Link {...minimizeProps} on:link-click={toggleMinimize}/></div>
        {#if profile.avatar}<img src="{profile.avatar}" alt="Avatar"  transition:fade={{duration: 250}}/>{/if}
        <div class="contact-address">
            <h2>{profile.company || profile.name}</h2>
            {#if profile.jobTitle}<sup>{getContactName(profile)}</sup>{/if}
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
        {#if lastLoggedInOn}
        <div class="contact-extra">
            <ul>
                <li><strong>Last Login:</strong></li>
                <li>{$date(Date.parse(lastLoggedInOn), {format: 'long'})}</li>
                <li><sup>{$time(Date.parse(lastLoggedInOn), {format: 'long'})}</sup></li>
            </ul>
        </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .header-profile {
        position: relative;
        display: flex;
        padding: .75em;

        .minimize {
            font-size: 1.5em;
            position: absolute;
            right: 0;
            margin: 0 .5em;
        }

        :global(.wrapper-address) {
            margin-top: .5em;
        }

        [class^="contact"] {
            margin-left: 1.5em;
        }
        
        img {
            box-sizing: border-box;
            margin: 6px;
            width: 100px;
            height: 100px;
            display: inline-block;
        }

        h2 {
            margin: 0;
        }

        ul, li {
            list-style-type: none;
            margin: .35em 0;
            padding: 0;
        }
    }

    .header-profile.minimized {
        font-size: .8em;
        padding: .25em .5em;

        img {
            width: 35px;
            height: 35px;
            margin: 5px 0;
        }

        [class^="contact"] {
            margin-left: 1em;
        }
        
        li {
            display: none;
            margin: .15em 0;
        }

        li:nth-child(1), li:nth-child(2) {
            display: initial;
        }

        :global(.wrapper-address) {
            display: none;
        }

        .contact-extra ul {
            display: flex;
            flex-flow: row;
            gap: .5em;
        }

        .contact-extra ul li {
            display: initial;
        }
    }
</style>