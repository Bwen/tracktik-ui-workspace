<script lang="ts">
    import type { EmployeesItem } from '@rest/models/EmployeesItem';
    import type { ClientsItem } from '@rest/models/ClientsItem';
	import { fade, blur } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { t } from '$lib/i18n';
    import ContentSideBar from '$lib/components/ContentSideBar.svelte';
    import AccountAssignment from '$components/AccountAssignment.svelte';

    let sideBarItems = [
        {
            label: $t('page.employee.content-menu.related'),
            links: [
                {id: 'employee-assigned-sites', text: $t('page.employee.content-menu.assigned-sites')},
                {id: 'employee-notes-by-employee', text: $t('page.employee.content-menu.notes-by-employee')},
                {id: 'employee-site-bans', text: $t('page.employee.content-menu.site-bans')},
                {id: 'employee-history', text: $t('page.employee.content-menu.history')},
            ]
        },
        {
            label: $t('page.employee.content-menu.extra-info'),
            links: [
                {id: 'employee-emergency', text: $t('page.employee.content-menu.emergency')},
                {id: 'employee-notes-on-employee', text: $t('page.employee.content-menu.notes-on-employee')},
                {id: 'employee-documents', text: $t('page.employee.content-menu.documents')},
                {id: 'employee-availabilities', text: $t('page.employee.content-menu.availabilities')},
            ]
        }
    ];

    let itemSelected = 'employee-assigned-sites';
    const profile: EmployeesItem | ClientsItem = getContext('current-profile');
    function onItenClick(event) {
        itemSelected = event.detail.id;
    }
</script>

<section class="wrapper-content">
    <ContentSideBar items={sideBarItems} itemSelected={itemSelected} on:item-click={onItenClick} />
    <div transition:fade={{duration: 300}}><div class="content">
        {#if 'employee-assigned-sites' === itemSelected}
        <div transition:blur={{duration: 300}}><AccountAssignment relationId={profile.id} /></div>
        {/if}
    </div></div>
</section>

<style lang="scss">
    .wrapper-content {
        display: flex;

        > div {
            width: 100%;
        }
    }
</style>
