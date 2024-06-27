function calendarDate() {
  var this_date_name_array = new Array(
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
    "31ᔆᵗ"
  );

  if (Lang == "en") {
    var this_weekday_name_array = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var this_month_name_array = [
      "01",
      "02",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
  }

  if (Lang == "vi") {
    var this_weekday_name_array = [
      "Chủ nhật",
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
    ];

    var this_month_name_array = [
      "01",
      "02",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
  }

  var this_date_timestamp = new Date();

  var this_weekday = this_date_timestamp.getDay();

  var this_date = this_date_timestamp.getDate();

  var this_month = this_date_timestamp.getMonth();

  var this_year = this_date_timestamp.getYear();

  if (this_year < 1000) this_year += 1900;

  if (this_year == 101) this_year = 2001;

  document.getElementById("weekday").firstChild.nodeValue =
    this_weekday_name_array[this_weekday];

  document.getElementById("date").firstChild.nodeValue =
    this_date_name_array[this_date] + " · ";

  document.getElementById("month").firstChild.nodeValue =
    this_month_name_array[this_month] + " · ";

  document.getElementById("year").firstChild.nodeValue = this_year;
}
