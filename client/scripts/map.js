var fieldList = ["ID", "FirstName", "LastName", "Major", "City"];
//const baseUrl = "https://alumni-video-series.herokuapp.com/api/person";

function handleOnLoad() {
  const peopleUrl = baseUrl;
  console.log(peopleUrl);

  fetch(peopleUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      displayTable(json);
      initMap(json);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function initMap(json) {
  const uOfA = { lat: 33.214, lng: -87.5391 };
  //draw map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: uOfA,
  });
  //put marker on Tuscaloosa
  const marker = new google.maps.Marker({
    position: uOfA,
    map: map,
    title: "University of Alabama",
  });

  //put marker for each person
  json.forEach((person) => {
    var address = { lat: person.lat, lng: person.lng };
    var name = person.firstName + " " + person.lastName;
    console.log("made it here with name " + name);
    var marker = new google.maps.Marker({
      map: map,
      position: address,
      title: name,
    });
  });
}
