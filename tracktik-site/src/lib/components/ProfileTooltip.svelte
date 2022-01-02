<script lang="ts">
    import type { EmployeesItem } from '@rest/models/EmployeesItem';
    import type { ClientsItem } from '@rest/models/ClientsItem';
    import Address from '$components/ext/Address.svelte';
    import Phone from '$components/ext/Phone.svelte';
    import TextIcon from '$components/ext/TextIcon.svelte';
    import { getAddressProps, getPhoneProps } from '$lib/js/utils';
    import { faPhone, faEnvelope, faUser, faHashtag } from '@fortawesome/free-solid-svg-icons';

    export let profile: EmployeesItem | ClientsItem = undefined;
    export let active = false;
    let phone;
    let customId;
    let username;
    let address;
    let prof;
    $: {
        if (profile) {
            prof = profile;
            phone = getPhoneProps(profile);
            address = getAddressProps(profile);
            customId = profile.customId || '';
            username = profile.username || '';
        }
    };

    function getContactName(prof) {
        if (!prof.company) {
            return prof.jobTitle;
        }

        return prof.firstName + ' ' + prof.lastName + ' - ' + prof.jobTitle;
    }
</script>

<div class="wrapper-profile-tooltip" class:active={active}><div class="profile-tooltip">
    {#if profile}
    <div>
        <img src="{prof.avatar}" width="125"  height="125" alt="Avatar" />
        <section>
            <header>{prof.company || prof.name}</header>
            {#if prof.jobTitle}<sup>{getContactName(prof)}</sup>{/if}
            <section>
                <Address {...address} />
                <ul>
                    <li><Phone icon={faPhone} {...phone} /></li>
                    <li><TextIcon icon={faEnvelope} text={profile.email} /></li>
                    {#if username}<li><TextIcon icon={faUser} text={username} /></li>{/if}
                    {#if customId && customId !== 'N/A'}<li><TextIcon icon={faHashtag} text={customId} /></li>{/if}
                </ul>
            </section>
        </section>
    </div>
    {/if}
</div></div>

<style lang="css">
    .wrapper-profile-tooltip {
        position: absolute;
        display: none;
        background-color: #FEFEFE;
        z-index: 999;
        font-size: .8em;
    }

    .wrapper-profile-tooltip.active {
        display: block;
    }

    .profile-tooltip > div {
        display: flex;
    }

    .profile-tooltip ul,
    .profile-tooltip ul li {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    .profile-tooltip section header {
        font-weight: bold;
        text-align: center;
    }

    .profile-tooltip section sup {
        text-align: center;
        display: block;
    }

    .profile-tooltip section > section {
        padding: .5em;
        display: flex;
        gap: 1em;
    }
</style>
