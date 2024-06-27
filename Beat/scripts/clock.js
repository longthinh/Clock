function updateClock() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  if (Clock == "24") {
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  }
  if (Clock == "12") {
    if (currentHours <= 2) {
      currentHours = (currentHours < 10 ? "0" : "") + currentHours;
    }
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    timeOfDay = currentHours < 12 ? "AM" : "PM";
    currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
    currentHours = currentHours == 0 ? 12 : currentHours;
    document.getElementById("ampm").innerHTML = " " + timeOfDay;
  }

  // if (Clock == "12") {
  //   currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  //   currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  //   currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  //   timeOfDay = currentHours < 12 ? "AM" : "PM";
  //   currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
  //   currentHours = currentHours == 0 ? 12 : currentHours;
  //   document.getElementById("ampm").innerHTML = " " + timeOfDay;
  // }

  var currentTimeString = currentHours + ":" + currentMinutes;

  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
