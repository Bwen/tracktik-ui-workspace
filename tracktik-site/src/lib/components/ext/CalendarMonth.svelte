<script lang="ts">
    import type { SelectOptions } from '$lib/@types/form.type';
    import { getMonthWeeks } from '$lib/js/calendar';
    import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
    import {createEventDispatcher} from "svelte";
    import Select from './form/Select.svelte';
    import Link from './Link.svelte';
	import { t, json } from '$lib/i18n';

    const dispatch = createEventDispatcher();
    
    export let name = "";
    export let isPicker = false;
    export let targetDate = new Date();

    // For some reason when you start from login to the calender we get 42 entries... So err.. splice it?
    let dayNames: string[] = $json('common.calendar.short.days').splice(0, 7);
    const monthNames: string[] = $json('common.calendar.short.months').splice(0, 12);
    let currentMonth;
    let currentYear;
    let weeks = [];
    let monthDropdown;
    let yearDropdown;
    $: {
        targetDate.setUTCHours(0);
        targetDate.setUTCMinutes(0);
        targetDate.setUTCSeconds(0);
        targetDate.setUTCMilliseconds(0);
        weeks = getMonthWeeks(targetDate);
        currentMonth = targetDate.getMonth();
        currentYear = targetDate.getFullYear();
    }

    function getDateValue(day) {
        if (!day) return '';
        
        let tmpDate = new Date(targetDate);
        tmpDate.setDate(day);
        return tmpDate.toISOString();
    }

    function onDecreaseMonth() {
        let month = targetDate.getMonth() - 1;
        if (month >= 0) {
            targetDate = new Date(targetDate.setMonth(month));
            dispatch('change-month', targetDate);
        } else {
            targetDate.setFullYear(targetDate.getFullYear() - 1);
            targetDate.setMonth(11);
            dispatch('change-year', targetDate);
        }

        yearDropdown.setValue(targetDate.getFullYear());
        monthDropdown.setValue(targetDate.getMonth());
        targetDate = targetDate;
    }

    function onIncreaseMonth() {
        let month = targetDate.getMonth() + 1;
        if (month <= 11) {
            targetDate.setMonth(month);
            dispatch('change-month', targetDate);
        } else {
            targetDate.setFullYear(targetDate.getFullYear() + 1);
            targetDate.setMonth(0);
            dispatch('change-year', targetDate);
        }

        yearDropdown.setValue(targetDate.getFullYear());
        monthDropdown.setValue(targetDate.getMonth());
        targetDate = targetDate;
    }

    function getYearOptions(): SelectOptions[] {
        let yearOptions = [];
        const yearStart = targetDate.getFullYear() - 3;
        const yearEnd = targetDate.getFullYear() + 2;
        for (let i=yearStart; i <= yearEnd; i++) {
            yearOptions.push({
                value: i,
                text: i,
            });
        }
        return yearOptions;
    }

    function getMonthOptions(): SelectOptions[] {
        let monthOptions = [];
        for (let i=0; i < monthNames.length; i++) {
            monthOptions.push({
                value: i,
                text: monthNames[i],
            });
        }
        return monthOptions;
    }

    function onMonthChange(event) {
        targetDate.setMonth(event.detail);
        targetDate = targetDate;
    }

    function onYearChange(event) {
        targetDate.setFullYear(event.detail);
        targetDate = targetDate;
    }

</script>

<div class="wrapper-calendar">
    {#if isPicker}<input type="hidden" name={name} />{/if}
<table class="calender-month">
    <thead>
        <tr class="nav">
            <th><Link icon={faAngleLeft} on:link-click={onDecreaseMonth} /></th>
            <th colspan="5">
                <Select options={getMonthOptions()} bind:this={monthDropdown} on:input={onMonthChange} value={currentMonth} />
                <Select options={getYearOptions()} bind:this={yearDropdown} on:input={onYearChange} value={currentYear} />
            </th>
            <th><Link icon={faAngleRight} on:link-click={onIncreaseMonth} /></th>
        </tr>
        <tr class="days-header">
        {#each dayNames as day}
            <th>{day}</th>
        {/each}
        </tr>
    </thead>
    <tbody>
    {#each weeks as days}
        <tr>
        {#each days as day}
            <td data-date={getDateValue(day)}>{day ? day : ''}</td>
        {/each}
        </tr>
    {/each}
    </tbody>
</table></div>

<style lang="css">
    .wrapper-calendar th {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

</style>