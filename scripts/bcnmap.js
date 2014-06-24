$(document).ready(function() {

    // Define the thresholds according to: http://www.bcn.cat/publicacions/pdf/rfd.pdf
    var thresholds = [400, 790, 900, 1000, 1130, 1260, 1420, 1590];
    // Each threshold has a color associated.
    var colors = ['#F7FBFF', '#DEEBF7', '#C6DBEF', '#9ECAE1', '#6BAED6',
        '#4292C6', '#2171B5', '#08519C', '#08306B'];

    // Get the color associated with an RFD according to the thresholds defined.
    function getColorByRfd (rfd) {
        for (var i = 0; i < thresholds.length; i++) {
            if (rfd < thresholds[i]) {
                return colors[i];
            }
        }
        return colors[8];
    }

    // Create a map using the gmaps.js library.
    var map = new GMaps({
        el: '#map',
        lat: 41.392,
        lng: 2.15,
        zoom: 12,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: true,
        overviewMapControl: true
    });

    // Load the json file that contains the data of Barcelona's neighborhoods,
    // and draw each neighborhood on the map. The color of the map depends on
    // the RFD of the neighborhood.
    $.getJSON("data/bcnneighborhoods.json", function(data) {
        for (var i = 0; i < data.features.length; i++) {
            coordinates = data.features[i].geometry.coordinates;
            color = getColorByRfd(data.features[i].properties.RFD);
            polygon = map.drawPolygon({
                paths : coordinates,
                useGeoJSON : true,
                strokeOpacity : 1,
                strokeWeight : 2.5,
                fillColor : color,
                fillOpacity : 0.9
            });
        }
    });

});