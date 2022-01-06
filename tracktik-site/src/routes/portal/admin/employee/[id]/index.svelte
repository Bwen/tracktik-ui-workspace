<script lang="ts">
    import type { EmployeesItem } from '@rest/models/EmployeesItem';
    import type { ClientsItem } from '@rest/models/ClientsItem';
	import { fade } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { t } from '$lib/i18n';
    import SideBarContent from '$components/SideBarContent.svelte';
    import AccountAssignment from '$components/AccountAssignment.svelte';

    let sideBarItems = [
        {
            label: $t('page.employee.content-menu.related'),
            links: [
                {text: $t('page.employee.content-menu.assigned-sites')},
                {text: $t('page.employee.content-menu.notes-by-employee')},
                {text: $t('page.employee.content-menu.site-bans')},
                {text: $t('page.employee.content-menu.history')},
            ]
        },
        {
            label: $t('page.employee.content-menu.extra-info'),
            links: [
                {text: $t('page.employee.content-menu.emergency')},
                {text: $t('page.employee.content-menu.notes-on-employee')},
                {text: $t('page.employee.content-menu.documents')},
                {text: $t('page.employee.content-menu.availabilities')},
            ]
        }
    ];

    const profile: EmployeesItem | ClientsItem = getContext('current-profile');
</script>

<section class="wrapper-content">
    <SideBarContent items={sideBarItems} />
    <div transition:fade={{duration: 300}}><div class="content">
        <AccountAssignment relationId={profile.id} />
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
