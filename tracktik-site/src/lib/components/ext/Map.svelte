<script type="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faMapPin } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
	let apiKey: string = import.meta.env.VITE_HERETECH_KEY || '';

	type Coord = {
		lng: number;
		lat: number;
		draggable?: boolean;
        data?: any;
	};

	let map;
	let mapMarkup;
	function onWindowResize() {
		map.getViewPort().resize();
	}

	export let defaultLayer: 'satellite' | 'normal' | undefined = undefined;
	export let markers: Coord[] = [];
	export let address: string = '';
	export let profileId: number = undefined;

	let hasDraggableMarker = false;
	onMount(() => {
        let H = window.H;
        let platform = new H.service.Platform({ apikey: apiKey });
        let defaultLayers = platform.createDefaultLayers();
        let dlayer = defaultLayers.raster.normal.map;
        if ('satellite' === defaultLayer) {
            dlayer = defaultLayers.raster.satellite.map;
        }

		try {
			map = new H.Map(mapMarkup, dlayer, {
				zoom: 10,
				center: { lng: 13.4, lat: 52.51 },
				pixelRatio: window.devicePixelRatio || 1
			});

			const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
			const ui = H.ui.UI.createDefault(map, defaultLayers);

			let svgMarker = new H.map.Icon(document.getElementById('mapMarkerSVG').outerHTML, {size: {h: 28, w: 16}});
			for (let i = 0; i < markers.length; i++) {
				let coord = { lat: markers[i].lat, lng: markers[i].lng };
				let marker = new H.map.Marker(coord, {data: markers[i].data, icon: svgMarker, volatility: true });
				if (markers[i].draggable) {
					marker.draggable = true;
                    hasDraggableMarker = true;
				}
				map.addObject(marker);
				map.setCenter(markers[i]);
				map.setZoom(15);
			}

            if (hasDraggableMarker) enableMarkerDragging(map, behavior);
		} catch (err) {
			console.warn(err);
		}
	});

    function onLocChange(lat: number, lng: number, data) {
        dispatch('marker-loc-change', {
            lat,
            lng,
            ...data,
        });
    }

    function enableMarkerDragging(map, behavior) {
        map.addEventListener('dragstart', function (ev) {
            var target = ev.target, pointer = ev.currentPointer;
            if (target instanceof H.map.Marker) {
                var targetPosition = map.geoToScreen(target.getGeometry());
                target['offset'] = new H.math.Point(
                    pointer.viewportX - targetPosition.x,
                    pointer.viewportY - targetPosition.y
                );
                behavior.disable();
            }
        }, false);

        map.addEventListener('dragend', function (ev) {
            var target = ev.target;
            if (target instanceof H.map.Marker) {
                behavior.enable();
            }
        }, false);

        map.addEventListener('drag', function (ev) {
            var target = ev.target, pointer = ev.currentPointer;
            if (target instanceof H.map.Marker) {
                target.setGeometry(
                    map.screenToGeo(
                        pointer.viewportX - target['offset'].x,
                        pointer.viewportY - target['offset'].y
                    )
                );

				onLocChange(target.b.lat, target.b.lng, target.getData());
            }
        }, false);
    }
</script>

<svelte:window on:resize={onWindowResize} />

<div class="wrapper-map">
	<Fa icon={faMapPin} color="red" id="mapMarkerSVG" />
	<slot name="header" />
	<div class="address">{address}</div>
	<div class="map" bind:this={mapMarkup} />
	<slot name="footer" />
</div>

<style lang="css">
	:global(#mapMarkerSVG) {
		display: none;
	}

	.wrapper-map .map {
		width: 600px;
		height: 300px;
	}
</style>
