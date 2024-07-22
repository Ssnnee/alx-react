import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

let count = 0;
function updateCounter() {
  count++;
  $("P#count").text(`${count} clicks on the button`);
}

let debounceUpdateCounter = _.debounce(updateCounter, 500, { leading: true });

$(function() {
  const textsArr = [
    "Holberton Dashboard",
    "Dashboard data for the students",
    "Click here to get started",
    "<p id='count'></p>",
    "Copyright - Holberton School",
  ]

  $("body").append("<img src='images/logo-white.png' id='logo' alt='Techium logo' width='200'>");

  for (let i= 0; i < 2; i++) {
    $("body").append("<p>" + textsArr[i] + "</p>");
  }

  $("body").append("<button>" + textsArr[2] + "</button>");

  $("body").append(textsArr[3]);
  $("body").append("<p>" + textsArr[4] + "</p>");

  $("button").on("click", debounceUpdateCounter);

});
