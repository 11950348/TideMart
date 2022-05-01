const baseUrl = "https://localhost:6969/api/users";

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

function putUser(rowdata) {
  id = rowdata.userID;
  const sendUser = {
    UserID: rowdata.userID,
    Password: rowdata.password, //document.getElementById("title").value,
    //SSN: rowdata.ssn, //document.getElementById("title").value,
    FirstName: rowdata.firstName, //document.getElementById("title").value,
    MiddleName: 'rowdata.middleName', //document.getElementById("title").value,
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

function postUser(rowdata) {
  const postUserApiUrl = baseUrl;
  const sendUser = {
    Password: rowdata.password, //document.getElementById("title").value,
    SSN: rowdata.ssn, //document.getElementById("title").value,
    FirstName: rowdata.firstName, //document.getElementById("title").value,
    MiddleName: 'rowdata.middleName', //document.getElementById("title").value,
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
        text: "excel",
        name: "excel",
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
