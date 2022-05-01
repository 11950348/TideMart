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

$("#main").toggleClass(localStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (localStorage.toggled != "dark") {
    $("#main, p").toggleClass("dark", true);
    localStorage.toggled = "dark";
  } else {
    $("#main, p").toggleClass("dark", false);
    localStorage.toggled = "";
  }
}

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

/*Add 'checked' property to input if background == dark*/
if ($("main").hasClass("dark")) {
  $("#checkBox").prop("checked", true);
} else {
  $("#checkBox").prop("checked", false);
}
