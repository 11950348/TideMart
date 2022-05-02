const baseUrl = "https://localhost:6969/api/users";
const baseUrl3 = "https://localhost:6969/api/timesheet";

function deleteFunction(id) {
  const deleteUserApiUrl = baseUrl + "/" + id;
  fetch(deleteUserApiUrl, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    //populateList();
  });
}

function addLog(variable) {
  var postLogApiUrl = baseUrl3;

  const sendLog = {
    StartTime: variable.startTime,
    EndTime: variable.endTime,
    Description: variable.description,
    Lunch: "true",
    UserID: variable.userID,
  };

  fetch(postLogApiUrl, {
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

function deleteFunction2(id) {
  const deleteUserApiUrl2 = baseUrl3 + "/" + id;
  fetch(deleteUserApiUrl2, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    //populateList();
  });
}

function submitLog2() {
  const postTimeSheetApiUrl2 = baseUrl3;

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

  fetch(postTimeSheetApiUrl2, {
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

function putDepartment(rowdata) {
  baseUrl55 = 'https://localhost:6969/api/Department';
  id = rowdata.userID;
  const sendUser = {
    DepartmentName: rowdata.departmentName, //document.getElementById("title").value,
  };

  fetch(baseUrl55, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendUser),
  }).then((response) => {
    //mySong = sendSong;
    // populateList();
    // blankFields();
  });
}

function deleteDepartment(id) {
  const deleteDepartmentApiUrl2 = 'https://localhost:6969/api/Department' + "/" + id;
  fetch(deleteDepartmentApiUrl2, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    //populateList();
  });
}

function updateDepartment(rowdata) {
  const baseUrl56 = 'https://localhost:6969/api/Department';
  id = rowdata.userID;
  const sendUser = {
    DepartmentID: rowdata.departmentID,
    DepartmentName: rowdata.departmentName,
  };

  fetch(baseUrl56, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendUser),
  }).then((response) => {
    //mySong = sendSong;
    // populateList();
    // blankFields();
  });
}

function putUser(rowdata) {
  id = rowdata.userID;
  const sendUser = {
    UserID: rowdata.userID,
    Password: rowdata.password, //document.getElementById("title").value,
    //SSN: rowdata.ssn, //document.getElementById("title").value,
    FirstName: rowdata.firstName, //document.getElementById("title").value,
    MiddleName: "rowdata.middleName", //document.getElementById("title").value,
    LastName: rowdata.lastName, //document.getElementById("title").value,
    Email: rowdata.email, //document.getElementById("title").value,
    StartDate: "2022-04-30T23:58:19.861Z", //document.getElementById("title").value,
    Salary: rowdata.salary, //document.getElementById("title").value,
    ShiftStart: "2022-04-30T23:58:19.861Z", //document.getElementById("title").value,
    Birthday: "2022-04-30T23:58:19.861Z", //document.getElementById("title").value,
    Phone: rowdata.phone, //document.getElementById("title").value,
    URL: rowdata.url, //document.getElementById("title").value,
    Admin: rowdata.admin, //document.getElementById("title").value,
    Username: rowdata.username, //document.getElementById("title").value,
    DepartmentID: rowdata.departmentID, //document.getElementById("title").value,
  };

  fetch(baseUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendUser),
  }).then((response) => {
    //mySong = sendSong;
    // populateList();
    // blankFields();
  });
}

function putLog(rowdata) {
  //var id = JSON.parse(sessionStorage.user);
  const baseUrl35 = 'https://localhost:6969/api/Timesheet';

  const sendOtherUser = {
    TimesheetID: rowdata.timesheetID,
    StartTime: rowdata.startTime,
    EndTime: rowdata.endTime,
    Description: rowdata.description,
    Lunch: "true",
    UserID: rowdata.userID,
  };

  fetch(baseUrl35, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendOtherUser),
  }).then((response) => {
    //mySong = sendSong;
    // populateList();
    // blankFields();
  });
}

function postUser(rowdata) {
  const postUserApiUrl = baseUrl;
  const sendUser = {
    Password: rowdata.password, //document.getElementById("title").value,
    SSN: rowdata.ssn, //document.getElementById("title").value,
    FirstName: rowdata.firstName, //document.getElementById("title").value,
    MiddleName: "rowdata.middleName", //document.getElementById("title").value,
    LastName: rowdata.lastName, //document.getElementById("title").value,
    Email: rowdata.email, //document.getElementById("title").value,
    StartDate: "2022-04-30T23:58:19.861Z", //document.getElementById("title").value,
    Salary: rowdata.salary, //document.getElementById("title").value,
    ShiftStart: "2022-04-30T23:58:19.861Z", //document.getElementById("title").value,
    Birthday: "2022-04-30T23:58:19.861Z", //document.getElementById("title").value,
    Phone: rowdata.phone, //document.getElementById("title").value,
    URL: rowdata.url, //document.getElementById("title").value,
    Admin: rowdata.admin, //document.getElementById("title").value,
    Username: rowdata.username, //document.getElementById("title").value,
    DepartmentID: rowdata.departmentID, //document.getElementById("title").value,
  };
  console.log(sendUser);
  fetch(postUserApiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendUser),
  }).then((response) => {
    //mySong = sendSong;
    // populateList();
    // blankFields();
  });
}

$(document).ready(function () {
  var columnDefs = [
    {
      data: "userID",
      title: "ID",
      type: "readonly",
    },
    {
      data: "firstName",
      title: "First",
    },
    {
      data: "lastName",
      title: "Last",
    },
    {
      data: "username",
      title: "Username",
    },
    {
      data: "departmentID",
      title: "Dept",
    },
    {
      data: "email",
      title: "Email Address",
    },
    {
      data: "phone",
      title: "Phone #",
    },
    {
      data: "salary",
      title: "Salary",
    },
    {
      data: "admin",
      title: "Admin",
    },
    {
      data: "url",
      title: "Url",
    },
    {
      data: "startDate",
      title: "Start date",
      type: "datetime-local",
    },
    {
      data: "birthday",
      title: "Birthday",
    },
    {
      data: "password",
      title: "Password",
    },
    {
      data: "ssn",
      title: "SSN",
    },
  ];

  var myTable;

  var url_ws_mock_get = "./mock_svc_load.json";
  var url_ws_mock_ok = "./mock_svc_ok.json";
  if (location.href.startsWith("file://")) {
    // local URL's are not allowed
    url_ws_mock_get = "https://localhost:6969/api/users";
    url_ws_mock_delete = "https://localhost:6969/api/users";
    url_ws_mock_ok =
      "https://luca-vercelli.github.io/DataTable-AltEditor/example/03_ajax_objects/mock_svc_ok.json";
  }

  myTable = $("#example").DataTable({
    sPaginationType: "full_numbers",
    ajax: {
      url: url_ws_mock_get,
      // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
      dataSrc: "",
    },
    columns: columnDefs,
    dom: "Bfrtip", // Needs button container
    select: "single",
    responsive: true,
    altEditor: true, // Enable altEditor
    buttons: [
      {
        text: "Add",
        name: "add", // do not change name
      },
      {
        extend: "selected", // Bind to Selected row
        text: "Edit",
        name: "edit", // do not change name
      },
      {
        extend: "selected", // Bind to Selected row
        text: "Delete",
        name: "delete", // do not change name
      },
      {
        text: "Refresh",
        name: "refresh", // do not change name
      },
      {
        extend: "copy",
        text: "copy",
        name: "copy",
      },
      {
        extend: "csv",
        text: "csv",
        name: "csv",
      },
      {
        extend: "excel",
        text: "excel",
        name: "excel",
      },
      {
        extend: "pdf",
        text: "pdf",
        name: "pdf",
      },
    ],
    onAddRow: function (datatable, rowdata, success, error) {
      //console.log(rowdata)
      postUser(rowdata);
      $.ajax({
        // a tipycal url would be / with type='PUT'
        url: url_ws_mock_get,
        type: "GET",
        data: rowdata,
        success: success,
        error: error,
      });
    },
    onDeleteRow: function (datatable, rowdata, success, error) {
      deleteFunction(rowdata[0].userID);
      $.ajax({
        // a tipycal url would be /{id} with type='DELETE'
        url: url_ws_mock_get,
        type: "GET",
        data: rowdata,
        success: success,
        error: error,
      });
    },
    onEditRow: function (datatable, rowdata, success, error) {
      putUser(rowdata);
      $.ajax({
        // a tipycal url would be /{id} with type='POST'
        url: url_ws_mock_ok,
        type: "GET",
        data: rowdata,
        success: success,
        error: error,
      });
    },
  });
});

$(document).ready(function () {
  var columnDefs = [
    {
      data: "timesheetID",
      title: "ID",
      type: "readonly",
    },
    {
      data: "startTime",
      title: "Start Time",
    },
    {
      data: "endTime",
      title: "End Time",
    },
    {
      data: "description",
      title: "Description",
    },
    {
      data: "userID",
      title: "UserID.",
    },
  ];

  var myTable;

  var url_ws_mock_get = "./mock_svc_load.json";
  var url_ws_mock_ok = "./mock_svc_ok.json";
  if (location.href.startsWith("file://")) {
    // local URL's are not allowed
    url_ws_mock_get = "https://localhost:6969/api/timesheet";
    url_ws_mock_ok =
      "https://luca-vercelli.github.io/DataTable-AltEditor/example/03_ajax_objects/mock_svc_ok.json";
  }

  myTable = $("#example2").DataTable({
    sPaginationType: "full_numbers",
    ajax: {
      url: url_ws_mock_get,
      // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
      dataSrc: "",
    },
    columns: columnDefs,
    dom: "Bfrtip", // Needs button container
    select: "single",
    responsive: true,
    altEditor: true, // Enable altEditor
    buttons: [
      {
        text: "Add",
        name: "add", // do not change name
      },
      {
        extend: "selected", // Bind to Selected row
        text: "Edit",
        name: "edit", // do not change name
      },
      {
        extend: "selected", // Bind to Selected row
        text: "Delete",
        name: "delete", // do not change name
      },
      {
        text: "Refresh",
        name: "refresh", // do not change name
      },
      {
        extend: "copy",
        text: "copy",
        name: "copy",
      },
      {
        extend: "csv",
        text: "csv",
        name: "csv",
      },
      {
        extend: "excel",
        text: "excel",
        name: "excel",
      },
      {
        extend: "pdf",
        text: "pdf",
        name: "pdf",
      },
    ],
    onAddRow: function (datatable, rowdata, success, error) {
      addTheShit(rowdata);
      $.ajax({
        // a tipycal url would be / with type='PUT'
        url: url_ws_mock_ok,
        type: "GET",
        data: rowdata,
        success: success,
        error: error,
      });
    },
    onDeleteRow: function (datatable, rowdata, success, error) {
      deleteFunction2(rowdata[0].timesheetID);
      $.ajax({
        // a tipycal url would be /{id} with type='DELETE'
        url: url_ws_mock_ok,
        type: "GET",
        data: rowdata,
        success: success,
        error: error,
      });
    },
    onEditRow: function (datatable, rowdata, success, error) {
      putLog(rowdata);
      $.ajax({
        // a tipycal url would be /{id} with type='POST'
        url: url_ws_mock_ok,
        type: "GET",
        data: rowdata,
        success: success,
        error: error,
      });
    },
  });
});

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
$("#body, #sidebar").toggleClass(sessionStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (sessionStorage.toggled != "dark") {
    $("#body, #sidebar, p").toggleClass("dark", true);
    sessionStorage.toggled = "dark";
  } else {
    $("#body, #sidebar, p").toggleClass("dark", false);
    sessionStorage.toggled = "";
  }
}

/*Add 'checked' property to input if background == dark*/
if ($("#body").hasClass("dark")) {
  $("#checkBox").prop("checked", true);
} else {
  $("#checkBox").prop("checked", false);
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

$(document).ready(function() {

  var columnDefs = [
      {
      data: "departmentID",
      title: "Dept ID",
      type: "readonly"
      },
      {
      data: "departmentName",
      title: "Name"
      },
  ];

  var myTable;

  var url_ws_mock_get = './mock_svc_load.json';
  var url_ws_mock_ok = './mock_svc_ok.json';
  if (location.href.startsWith("file://")) {
      // local URL's are not allowed
      url_ws_mock_get = 'https://localhost:6969/api/Department';
      url_ws_mock_ok = 'https://luca-vercelli.github.io/DataTable-AltEditor/example/03_ajax_objects/mock_svc_ok.json';
  }

  myTable = $('#example3').DataTable({
      "sPaginationType": "full_numbers",
      ajax: {
          url : url_ws_mock_get,
          // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
          dataSrc : ''
      },
      columns: columnDefs,
      dom: 'Bfrtip',        // Needs button container
      select: 'single',
      responsive: true,
      altEditor: true,     // Enable altEditor
      buttons: [
          {
              text: 'Add',
              name: 'add'        // do not change name
          },
          {
              extend: 'selected', // Bind to Selected row
              text: 'Edit',
              name: 'edit'        // do not change name
          },
          {
              extend: 'selected', // Bind to Selected row
              text: 'Delete',
              name: 'delete'      // do not change name
          },
          {
              text: 'Refresh',
              name: 'refresh'      // do not change name
          },
          {
            extend: "copy",
            text: "copy",
            name: "copy",
          },
          {
            extend: "csv",
            text: "csv",
            name: "csv",
          },
          {
            extend: "excel",
            text: "excel",
            name: "excel",
          },
          {
            extend: "pdf",
            text: "pdf",
            name: "pdf",
          },
      ],
      onAddRow: function(datatable, rowdata, success, error) {
        putDepartment(rowdata);
          $.ajax({
              // a tipycal url would be / with type='PUT'
              url: url_ws_mock_ok,
              type: 'GET',
              data: rowdata,
              success: success,
              error: error
          });
      },
      onDeleteRow: function(datatable, rowdata, success, error) {
        deleteDepartment(rowdata[0].departmentID);
          $.ajax({
              // a tipycal url would be /{id} with type='DELETE'
              url: url_ws_mock_ok,
              type: 'GET',
              data: rowdata,
              success: success,
              error: error
          });
      },
      onEditRow: function(datatable, rowdata, success, error) {
        updateDepartment(rowdata);
          $.ajax({
              // a tipycal url would be /{id} with type='POST'
              url: url_ws_mock_ok,
              type: 'GET',
              data: rowdata,
              success: success,
              error: error
          });
      }
  });


});

