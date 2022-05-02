const baseUrl2 = "https://localhost:6969/api/timesheet";
// $('#main').toggleClass(localStorage.toggled);


function submitLog() {
  const postTimeSheetApiUrl = baseUrl2;

  var id = JSON.parse(sessionStorage.user);

  console.log(id);

  const sendLog = {
    StartTime: document.getElementById("start-time").value,
    EndTime: document.getElementById("end-time").value,
    Description: document.getElementById("description").value,
    Lunch: "true",
    UserID: id,
  };
  console.log(sendLog);

  fetch(postTimeSheetApiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendLog),
  }).then((response) => {
    //mySong = sendSong;
    // populateList();
    // blankFields();
  });
}

function butthole() {
  var id = JSON.parse(sessionStorage.user);

  console.log(id);
}

// Clock In and Out button LOCAL Storage
$("#ClockInAndOut").toggleClass(localStorage.toggled);
//var buttonstate=0;
function ClockInOut(element) {
  //buttonstate= 1 - buttonstate;
  var blabel, bcolor;
  if (localStorage.toggled != "In") {
    //If they are clocked in it is green
    blabel = "Clocked In";
    bcolor = "green";
    $("#ClockInAndOut").toggleClass("In", true);
    localStorage.toggled = "In";
  } else {
    //If they are clocked out it is red
    blabel = "Clocked Out";
    bcolor = "red";
    $("#ClockInAndOut").toggleClass("In", false);
    localStorage.toggled = "";
  }
  var child = element.firstChild;
  child.style.color = bcolor;
  child.innerHTML = blabel;
}



// Dark Mode SESSION Storage
$("#employeeBody, #sidebar").toggleClass(sessionStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (sessionStorage.toggled != "dark") {
    $("#employeeBody, #sidebar, p").toggleClass("dark", true);
    sessionStorage.toggled = "dark";
  } else {
    $("#employeeBody, #sidebar, p").toggleClass("dark", false);
    sessionStorage.toggled = "";
  }
}

/*Add 'checked' property to input if background == dark*/
if ($("#employeeBody").hasClass("dark")) {
  $("#checkBox").prop("checked", true);
} else {
  $("#checkBox").prop("checked", false);
}