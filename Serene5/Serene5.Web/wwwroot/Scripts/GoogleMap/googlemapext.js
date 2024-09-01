(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
    ({ key: "AIzaSyB5piiPLeT0EvMXGyTmc9uqkL0L1Zkej-M", v: "beta" });

let map;
let marker = [];
let infoWindow;

async function initMap() {
    // Request needed libraries.
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary("marker"),
        google.maps.importLibrary("places"),
    ]);
    const myLatlng = { lat: -25.363, lng: 131.044 };

    // Initialize the map.
    map = new google.maps.Map(document.getElementById("map"), {
        center: myLatlng,
        zoom: 13,
        mapId: "4504f8b37365c3d0",
        mapTypeControl: false,
    });

    const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();

    placeAutocomplete.id = "place-autocomplete-input";

    const card = document.getElementById("place-autocomplete-card");

    card.appendChild(placeAutocomplete);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
    // Create the marker and infowindow
    marker = new google.maps.marker.AdvancedMarkerElement({
        map,
    });
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
    });

    new google.maps.Marker({
        position: myLatlng,
        map: map
    });
    infoWindow.open(map);
    // Add the gmp-placeselect listener, and display the results on the map.
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),

        );
        infoWindow.open(map);
         map.addListener("click", (e) => {
             //marker.setPosition =  setPosition(myLatlng.lat, myLatlng.lng);
         	//placeMarkerAndPanTo(e.latLng, map);
         });


        document.getElementById('p-lat').innerText = 'Latitude: ' + mapsMouseEvent.latLng.toJSON().lat;
        document.getElementById('p-lng').innerText = 'Longitude: ' + mapsMouseEvent.latLng.toJSON().lng;
    });

    placeAutocomplete.addEventListener("gmp-placeselect", async ({ place }) => {
        await place.fetchFields({
            fields: ["displayName", "formattedAddress", "location"],
        });
        // If the place has a geometry, then present it on a map.
        if (place.viewport) {
            map.fitBounds(place.viewport);
        }
        else {
            map.setCenter(place.location);
            map.setZoom(17);
        }

        let content =
            '<div id="infowindow-content">' +
            '<span id="place-displayname" class="title">' +
            place.displayName +
            "</span><br />" +
            '<span id="place-address">' +
            place.formattedAddress +
            "</span>" +
            "</div>";

        updateInfoWindow(content, place.location);
        marker.position = place.location;
    });

}
function placeMarkerAndPanTo(latLng, map) {
    new google.maps.marker.AdvancedMarkerElement({
        position: latLng,
        map: map,
    });
    map.panTo(latLng);
}


function hideMarkers() {
    setMapOnAll(null);
}


function deleteMarkers() {
    hideMarkers();
    markers = [];
}
// Helper function to create an info window.
function updateInfoWindow(content, center) {
    infoWindow.setContent(content);
    infoWindow.setPosition(center);
    infoWindow.open({
        map,
        anchor: marker,
        shouldFocus: false,
    });
}

initMap();