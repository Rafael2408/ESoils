//Create a global variable to store the current pin and infobox
//var currentSelection = null;

export default function GetMap() {
    try {
        //var currentSelection = null;
        var map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'AoOD7rLpof2UOkBduy8To8wNaH_TNPTkLRIZxwzGB4XCBwO4l9DIqzT-vJ4_jn7X'
        });
        //Add a click event handler to the map
        Microsoft.Maps.Events.addHandler(map, 'click', function (e) {
            //Get the location of the mouse cursor
            var loc = e.location;
             localStorage.setItem("latitud", loc.latitude.toFixed(5));
             localStorage.setItem("longitud", loc.longitude.toFixed(5));
            console.log(localStorage.getItem("latitud"));
            console.log(localStorage.getItem("longitud"));

            //Remove the previous pin and infobox from the map if they exist
            if (currentSelection) {
                map.entities.remove(currentSelection.pin);
                currentSelection.infobox.setMap(null);
            }


            //Create a pushpin at the clicked location
            var pin = new Microsoft.Maps.Pushpin(loc);

            //Add the pushpin to the map
            map.entities.push(pin);

            //Create a request URL for the elevation service
            var requestUrl = 'https://dev.virtualearth.net/REST/v1/Elevation/List?points=' + loc.latitude + ',' + loc.longitude + '&key=AoOD7rLpof2UOkBduy8To8wNaH_TNPTkLRIZxwzGB4XCBwO4l9DIqzT-vJ4_jn7X';

            //Make an AJAX request to the elevation service
            $.ajax({
                url: requestUrl,
                dataType: 'jsonp',
                jsonp: 'jsonp',
                success: function (data) {
                    //Get the elevation value from the response
                    var elevation = data.resourceSets[0].resources[0].elevations[0];

                    //Create an infobox with the coordinates and elevation of the location
                    var infobox = new Microsoft.Maps.Infobox(loc, {
                        title: 'Selected Location',
                        description: 'Latitude: ' + loc.latitude.toFixed(4) + '<br>Longitude: ' + loc.longitude.toFixed(4) +
                            '<br>Elevation: ' + elevation.toFixed(5) + ' meters'
                    });

                    localStorage.setItem("altura", elevation);
                    console.log(localStorage.getItem("altura"));

                    //Add the infobox to the map
                    infobox.setMap(map);

                    //Save the current pin and infobox in the global variable
                    currentSelection = { pin: pin, infobox: infobox };
                }
            });
        });
    } catch (error) {
        console.log("error on ------", error)
    }
}
