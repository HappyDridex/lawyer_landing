// yandex maps
const INITIAL_LOCATION = {
    center: [55.790853, 37.775104],
    zoom: 15,
    controls: ["routePanelControl"],
};

ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", INITIAL_LOCATION);

    const control = myMap.controls.get("routePanelControl");

    control.routePanel.state.set({
        type: "masstransit",
        fromEnabled: true,
        from: "",
        toEnabled: false,
        to: "Москва, ул. Первомайская, д.12А",
    });

    control.options.set({
        autofocus: false,
    });

    control.routePanel.options.set({
        allowSwitch: false,
        reverseGeocoding: false,
        types: { masstransit: true, pedestrian: true, taxi: true },
    });

    const placemark = new ymaps.Placemark(
        [55.790853, 37.775104],
        {
            balloonContent:
                '<img style="object-fit: cover; width: 200px; height: 200px; margin-top: 10px" src="./assets/images/location-image.png" />',
            iconContent: "Адвокат Теуважева Е.Х.",
        },
        {
            preset: "islands#yellowStretchyIcon",
            balloonCloseButton: true,
            hideIconOnBalloonOpen: true,
        }
    );

    myMap.geoObjects.add(placemark);
}
