const baseUrl2 = "https://localhost:6969/api/timesheet";
// $('#main').toggleClass(localStorage.toggled);

// function darkLight() {
//   /*DARK CLASS*/
//   if (localStorage.toggled != 'dark') {
//     $('#main, p').toggleClass('dark', true);
//     localStorage.toggled = "dark";

//   } else {
//     $('#main, p').toggleClass('dark', false);
//     localStorage.toggled = "light";
//   }
// }

// /*Add 'checked' property to input if background == dark*/
// if ($('main').hasClass('dark')) {
//    $( '#checkBox' ).prop( "checked", true )
// } else {
//   $( '#checkBox' ).prop( "checked", false )
// }

// $("#main").toggleClass(localStorage.toggled);

// function darkLight() {
//   /*DARK CLASS*/
//   if (localStorage.toggled != "dark") {
//     $("#main, p").toggleClass("dark", true);
//     localStorage.toggled = "dark";
//   } else {
//     $("#main, p").toggleClass("dark", false);
//     localStorage.toggled = "";
//   }
// }

// function getUser() {

//   const allUsersApiUrl = baseUrl;
//   fetch(allUsersApiUrl).then(function(response) {
//       return response.json();
//   }).then(function(json) {
//       userList = json;
//       json.forEach((user) => {
//           //console.log(user);
//           //console.log(user);
//           if(user.username == searchID && user.password == searchPass) {
//           }
//       });

//   }).catch(function(error) {
//       console.log(error);
//   });
// }

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

// // Dark Mode LOCAL Storage
// $('#main').toggleClass(localStorage.toggled);

// function darkLight() {
//   /*DARK CLASS*/
//   if (localStorage.toggled != 'dark') {
//     $('#main, p').toggleClass('dark', true);
//     localStorage.toggled = "dark";

//   } else {
//     $('#main, p').toggleClass('dark', false);
//     localStorage.toggled = "";
//   }
// }

// /*Add 'checked' property to input if background == dark*/
// if ($('main').hasClass('dark')) {
//    $( '#checkBox' ).prop( "checked", true )
// } else {
//   $( '#checkBox' ).prop( "checked", false )
// }

// Dark Mode SESSION Storage
$("#body").toggleClass(sessionStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (sessionStorage.toggled != "dark") {
    $("#body, p").toggleClass("dark", true);
    sessionStorage.toggled = "dark";
  } else {
    $("#body, p").toggleClass("dark", false);
    sessionStorage.toggled = "";
  }
}

/*Add 'checked' property to input if background == dark*/
if ($("#body").hasClass("dark")) {
  $("#checkBox").prop("checked", true);
} else {
  $("#checkBox").prop("checked", false);
}
