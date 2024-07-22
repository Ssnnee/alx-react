import $ from "jquery";

// $("body").append(`<p>Holberton Dashboard</p>`);
// $("body").append(`<p>Dashboard data for the students</p>`);
// $("body").append(`<p>Copyright - Holberton School</p>`);
$(function() {
  let paragraphsTexts = [
    "Holberton Dashboard",
    "Dashboard data for the students",
    "Copyright - Holberton School"
  ];

  for  (let i = 0; i < paragraphsTexts.length; i++) {
    $("body").append(`<p>${paragraphsTexts[i]}</p>`);
  }
});
