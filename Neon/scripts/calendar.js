function hour() {
  var hrs = moment().hours();
  var am_pm = hrs >= 12 ? "PM" : "AM";

  if (hourFormat === 24) {
    if (hrs < 10) {
      if (hrs >= 2) {
        var hours_string = "0" + hrs + (language === "vi" ? " Giờ" : " Hrs");
      } else {
        var hours_string = "0" + hrs + (language === "vi" ? " Giờ" : " Hr");
      }
    } else {
      var hours_string = hrs + (language === "vi" ? " Giờ" : " Hrs");
    }
  } else {
    if (hrs === 0) {
      var hours_string = "12";
    } else if (hrs > 12) {
      var hours_string = (hrs - 12 < 10 ? "0" : "") + (hrs - 12);
    } else {
      var hours_string = (hrs < 10 ? "0" : "") + hrs;
    }
    var am_pm = hrs >= 12 ? "PM" : "AM";
    hours_string += " " + am_pm;
  }
  document.getElementById("hours").innerHTML = hours_string;
}

function toggleHourFormat() {
  hourFormat = hourFormat === 12 ? 24 : 12;
  hour();
}

if (language == "en") {
  function minute() {
    var minutes_array = [
      "00 Min",
      "01 Min",
      "02 Mins",
      "03 Mins",
      "04 Mins",
      "05 Mins",
      "06 Mins",
      "07 Mins",
      "08 Mins",
      "09 Mins",
      "10 Mins",
      "11 Mins",
      "12 Mins",
      "13 Mins",
      "14 Mins",
      "15 Mins",
      "16 Mins",
      "17 Mins",
      "18 Mins",
      "19 Mins",
      "20 Mins",
      "21 Mins",
      "22 Mins",
      "23 Mins",
      "24 Mins",
      "25 Mins",
      "26 Mins",
      "27 Mins",
      "28 Mins",
      "29 Mins",
      "30 Mins",
      "31 Mins",
      "32 Mins",
      "33 Mins",
      "34 Mins",
      "35 Mins",
      "36 Mins",
      "37 Mins",
      "38 Mins",
      "39 Mins",
      "40 Mins",
      "41 Mins",
      "42 Mins",
      "43 Mins",
      "44 Mins",
      "45 Mins",
      "46 Mins",
      "47 Mins",
      "48 Mins",
      "49 Mins",
      "50 Mins",
      "51 Mins",
      "52 Mins",
      "53 Mins",
      "54 Mins",
      "55 Mins",
      "56 Mins",
      "57 Mins",
      "58 Mins",
      "59 Mins",
    ];
    var mins = moment().minutes();
    var minutes_string = minutes_array[mins];
    document.getElementById("minutes").innerHTML = minutes_string;
  }

  function second() {
    var seconds_array = [
      "00 Sec",
      "01 Sec",
      "02 Secs",
      "03 Secs",
      "04 Secs",
      "05 Secs",
      "06 Secs",
      "07 Secs",
      "08 Secs",
      "09 Secs",
      "10 Secs",
      "11 Secs",
      "12 Secs",
      "13 Secs",
      "14 Secs",
      "15 Secs",
      "16 Secs",
      "17 Secs",
      "18 Secs",
      "19 Secs",
      "20 Secs",
      "21 Secs",
      "22 Secs",
      "23 Secs",
      "24 Secs",
      "25 Secs",
      "26 Secs",
      "27 Secs",
      "28 Secs",
      "29 Secs",
      "30 Secs",
      "31 Secs",
      "32 Secs",
      "33 Secs",
      "34 Secs",
      "35 Secs",
      "36 Secs",
      "37 Secs",
      "38 Secs",
      "39 Secs",
      "40 Secs",
      "41 Secs",
      "42 Secs",
      "43 Secs",
      "44 Secs",
      "45 Secs",
      "46 Secs",
      "47 Secs",
      "48 Secs",
      "49 Secs",
      "50 Secs",
      "51 Secs",
      "52 Secs",
      "53 Secs",
      "54 Secs",
      "55 Secs",
      "56 Secs",
      "57 Secs",
      "58 Secs",
      "59 Secs",
    ];
    var secs = moment().seconds();
    var seconds_string = seconds_array[secs];
    document.getElementById("seconds").innerHTML = seconds_string;
  }

  function calendarDate() {
    var this_weekday_name_array = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var this_date_timestamp = new Date();
    var this_weekday = this_date_timestamp.getDay();
    document.getElementById("weekday").firstChild.nodeValue =
      this_weekday_name_array[this_weekday];
  }

  function num_date() {
    var date_array = [
      "1ᔆᵗ",
      "2ᴺᵈ",
      "3ᴿᵈ",
      "4ᵀʰ",
      "5ᵀʰ",
      "6ᵀʰ",
      "7ᵀʰ",
      "8ᵀʰ",
      "9ᵀʰ",
      "10ᵀʰ",
      "11ᵀʰ",
      "12ᵀʰ",
      "13ᵀʰ",
      "14ᵀʰ",
      "15ᵀʰ",
      "16ᵀʰ",
      "17ᵀʰ",
      "18ᵀʰ",
      "19ᵀʰ",
      "20ᵀʰ",
      "21ᔆᵗ",
      "22ᴺᵈ",
      "23ᴿᵈ",
      "24ᵀʰ",
      "25ᵀʰ",
      "26ᵀʰ",
      "27ᵀʰ",
      "28ᵀʰ",
      "29ᵀʰ",
      "30ᵀʰ",
      "31ᔆᵗ",
    ];
    var date_num = moment().date() - 1;
    var date_string = date_array[date_num];
    document.getElementById("date").innerHTML = date_string;
  }

  function month() {
    var month_array = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var mon = moment().month();
    var month_string = month_array[mon];
    document.getElementById("month").innerHTML = month_string;
  }
}

if (language == "vi") {
  function minute() {
    var minutes_array = [
      "00 Phút",
      "01 Phút",
      "02 Phút",
      "03 Phút",
      "04 Phút",
      "05 Phút",
      "06 Phút",
      "07 Phút",
      "08 Phút",
      "09 Phút",
      "10 Phút",
      "11 Phút",
      "12 Phút",
      "13 Phút",
      "14 Phút",
      "15 Phút",
      "16 Phút",
      "17 Phút",
      "18 Phút",
      "19 Phút",
      "20 Phút",
      "21 Phút",
      "22 Phút",
      "23 Phút",
      "24 Phút",
      "25 Phút",
      "26 Phút",
      "27 Phút",
      "28 Phút",
      "29 Phút",
      "30 Phút",
      "31 Phút",
      "32 Phút",
      "33 Phút",
      "34 Phút",
      "35 Phút",
      "36 Phút",
      "37 Phút",
      "38 Phút",
      "39 Phút",
      "40 Phút",
      "41 Phút",
      "42 Phút",
      "43 Phút",
      "44 Phút",
      "45 Phút",
      "46 Phút",
      "47 Phút",
      "48 Phút",
      "49 Phút",
      "50 Phút",
      "51 Phút",
      "52 Phút",
      "53 Phút",
      "54 Phút",
      "55 Phút",
      "56 Phút",
      "57 Phút",
      "58 Phút",
      "59 Phút",
    ];
    var mins = moment().minutes();
    var minutes_string = minutes_array[mins];
    document.getElementById("minutes").innerHTML = minutes_string;
  }

  function second() {
    var seconds_array = [
      "00 Giây",
      "01 Giây",
      "02 Giây",
      "03 Giây",
      "04 Giây",
      "05 Giây",
      "06 Giây",
      "07 Giây",
      "08 Giây",
      "09 Giây",
      "10 Giây",
      "11 Giây",
      "12 Giây",
      "13 Giây",
      "14 Giây",
      "15 Giây",
      "16 Giây",
      "17 Giây",
      "18 Giây",
      "19 Giây",
      "20 Giây",
      "21 Giây",
      "22 Giây",
      "23 Giây",
      "24 Giây",
      "25 Giây",
      "26 Giây",
      "27 Giây",
      "28 Giây",
      "29 Giây",
      "30 Giây",
      "31 Giây",
      "32 Giây",
      "33 Giây",
      "34 Giây",
      "35 Giây",
      "36 Giây",
      "37 Giây",
      "38 Giây",
      "39 Giây",
      "40 Giây",
      "41 Giây",
      "42 Giây",
      "43 Giây",
      "44 Giây",
      "45 Giây",
      "46 Giây",
      "47 Giây",
      "48 Giây",
      "49 Giây",
      "50 Giây",
      "51 Giây",
      "52 Giây",
      "53 Giây",
      "54 Giây",
      "55 Giây",
      "56 Giây",
      "57 Giây",
      "58 Giây",
      "59 Giây",
    ];
    var secs = moment().seconds();
    var seconds_string = seconds_array[secs];
    document.getElementById("seconds").innerHTML = seconds_string;
  }

  function calendarDate() {
    var this_weekday_name_array = [
      "Chủ nhật",
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
    ];
    var this_date_timestamp = new Date();
    var this_weekday = this_date_timestamp.getDay();
    document.getElementById("weekday").firstChild.nodeValue =
      this_weekday_name_array[this_weekday];
  }

  function num_date() {
    var date_array = [
      "Ngày 01",
      "Ngày 02",
      "Ngày 03",
      "Ngày 04",
      "Ngày 05",
      "Ngày 06",
      "Ngày 07",
      "Ngày 08",
      "Ngày 09",
      "Ngày 10",
      "Ngày 11",
      "Ngày 12",
      "Ngày 13",
      "Ngày 14",
      "Ngày 15",
      "Ngày 16",
      "Ngày 17",
      "Ngày 18",
      "Ngày 19",
      "Ngày 20",
      "Ngày 21",
      "Ngày 22",
      "Ngày 23",
      "Ngày 24",
      "Ngày 25",
      "Ngày 26",
      "Ngày 27",
      "Ngày 28",
      "Ngày 29",
      "Ngày 30",
      "Ngày 31",
    ];
    var date_num = moment().date() - 1;
    var date_string = date_array[date_num];
    document.getElementById("date").innerHTML = date_string;
  }

  function month() {
    var month_array = [
      "Tháng 01",
      "Tháng 02",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ];
    var mon = moment().month();
    var month_string = month_array[mon];
    document.getElementById("month").innerHTML = month_string;
  }
}

function ticker() {
  var i = moment().seconds();
  var x = i * 6;
  document.getElementById("circle").style.WebkitTransform =
    "rotate(" + x + "deg)";
}

hour();
minute();
second();
month();
num_date();

setInterval(function () {
  hour();
  minute();
  second();
  month();
  num_date();
  ticker();
}, 1000);
