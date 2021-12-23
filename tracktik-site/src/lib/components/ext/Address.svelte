<script lang="ts">
    import Map from '$components/ext/Map.svelte';
    import Link from '$components/ext/Link.svelte';
    import Modal from '$components/ext/Modal.svelte';
    import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
    import Input from '$components/ext/form/Input.svelte';
	import Accordion from '$components/ext/Accordion.svelte';
    
    // FIXME: Conumdrum here, in dev vs prod, does not import the same way...
    import { formatAddress } from 'localized-address-format';
    //const { formatAddress } = formatAddressPkg;

    export let mapLink: {text: string;} | undefined = undefined;
    export let countryName = '';
    export let postalCountry = '';
    export let administrativeArea = '';
    export let locality = '';
    export let postalCode = '';
    export let organization = '';
    export let name = '';
    export let addressLinesString = '';
    export let coord: {lat: number; lng: number} | undefined = undefined;

    let address = formatAddress({
        postalCountry,
        administrativeArea,
        locality,
        postalCode,
        organization,
        name,
        addressLines: addressLinesString.split('|'),
    });

    let mapModal;
    function onMapLinkClick() {
        mapModal.open();
    }
    
    let lat: number = 0;
    let lng: number = 0;
    let markers = [];
    if (coord) {
        markers.push({...coord, draggable: true, data: {name: 'marker-address'}});
        lat = coord.lat;
        lng = coord.lng;
    }

    function onMarkerLocChange(event) {
        if ('marker-address' === event.detail.name) {
            lat = event.detail.lat;
            lng = event.detail.lng;
        }
    }

    const accordionItems = [
        {style: 'info', label: 'Map Usage Tips', content: 'bob'}
    ];
</script>

<div class="wrapper-address">
    <address>{address.join("\n")}&nbsp;
{countryName} {#if mapLink}<Link on:link-click={onMapLinkClick} icon={faMapMarked}>{mapLink.text}</Link>{/if}</address>
</div>

{#if mapLink}
<Modal bind:this={mapModal}>
    <Map markers={markers} address={address.join("\n")} on:marker-loc-change={onMarkerLocChange}>
        <div slot="header" class="map-header">
            <Accordion items={accordionItems} />
            <Input name="lat" value={lat} />
            <Input name="lng" value={lng} />
        </div>
        <div slot="footer" class="map-footer">
            test
        </div>
    </Map>
</Modal>
{/if}

<style lang="css">
    .wrapper-address address {
        white-space: pre;
    }

    .wrapper-address :global(.wrapper-link) {
        font-size: .8em;
    }
    
    :global(.wrapper-map .map-footer),
    :global(.wrapper-map .map-header) {
        padding: .5em;
    }

    :global(.wrapper-map .map-header) {
        text-align: center;
    }

    :global(.wrapper-map .map-footer) {
        text-align: right;
    }

    .wrapper-address :global(a) {
        float: right;
    }

</style>