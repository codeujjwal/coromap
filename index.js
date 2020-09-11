function updatemap() {
  fetch("https://www.trackcorona.live/api/provinces")
    .then((response) => response.json())
    .then((rsp) => {
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.confirmed;

        if (cases > 5000) {
          color = "rgb(255, 0, 0)";
        } else if (cases > 1000) {
          color = "rgb(0, 0, 255)";
        } else {
          color = "rgb(0, 255, 0)";
        }

        new mapboxgl.Marker({
          draggable: false,
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

updatemap();

function data() {
  fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then((rsp) => {
      document.getElementById("ac").innerHTML =
        rsp.Countries[76].TotalConfirmed - rsp.Countries[76].TotalRecovered;
      document.getElementById("itc").innerHTML =
        rsp.Countries[76].TotalConfirmed;
      document.getElementById("itd").innerHTML = rsp.Countries[76].TotalDeaths;
      document.getElementById("itr").innerHTML =
        rsp.Countries[76].TotalRecovered;
    });
}

data();
