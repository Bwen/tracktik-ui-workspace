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
    import type { ZonesItem } from '@rest/models/ZonesItem';
    import Address from '$components/ext/Address.svelte';
    import { getAddressProps, getPhoneProps } from '$lib/js/utils';
    import {t, date, time} from '$lib/i18n';
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    const profile: EmployeesItem | ClientsItem | ZonesItem = getContext('current-profile');
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

    export let actionItems: LinkType[] = [];
    function onActionClick(event) {
        if (!event.detail.hyperlink.id) {
            return;
        }

        dispatch('action-click', {hyperlink: event.detail.hyperlink});
    }
</script>

<div class="wrapper-header-profile" class:minimized>
    <div class="header-profile">
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
    {#if actionItems.length}
    <div class="profile-actions">
        <ul>
            {#each actionItems as item}
            <li><Link {...item} on:link-click={onActionClick} /></li>
            {/each}
        </ul>
    </div>
    {/if}
    <div class="minimize"><Link {...minimizeProps} on:link-click={toggleMinimize} /></div>
</div>

<style lang="scss">
    .wrapper-header-profile {
        position: relative;
        overflow: hidden;

        &:not(.minimized) .minimize {
            font-size: 2em;
            position: absolute;
            right: 0;
            margin: .25em .5em;
            top: 0;
        }

        li {
            white-space: nowrap;
        }

        .header-profile {
            display: flex;
            padding: .75em;

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
    }

    .profile-actions {
        padding: 0 .75em 1em .75em;

        ul, li {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            gap: .5em;
            margin-left: 135px;

            li {
                :global(a) {
                    font-size: .75em;
                    display: block;
                    padding: .5em;
                }
            }
        }
    }

    .wrapper-header-profile.minimized {
        display: flex;
        align-items: center;

        .minimize {
            display: flex;
            margin-left: auto;
            
            :global(a) {
                margin: .75em;
            }
        }

        .profile-actions {
            padding: 0;

            ul { 
                gap: 4px;
                //flex-direction: column;
                flex-wrap: wrap;
                align-items: center;
                margin: 0;
                margin-top: 4px;
                height: 50px;
            }
            
            li {

                :global(a) {
                    padding: .25em 1em;
                    margin: 0;
                    font-size: .6em;
                    text-align: center;
                }
            }
        }

        .header-profile {
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
    }
</style>