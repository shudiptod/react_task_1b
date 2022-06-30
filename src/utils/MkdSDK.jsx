export default function MkdSDK() {
  this._baseurl = "https://reacttask.mkdlabs.com";
  this._project_id = "reacttask";
  this._secret = "5fchxn5m8hbo6jcxiq3xddofodoacskye";
  this._table = "";
  this._custom = "";
  this._method = "";

  const raw = this._project_id + ":" + this._secret;
  let base64Encode = btoa(raw);

  this.login = async function (email, password, role) {

    const loginResponse = await fetch('https://reacttask.mkdlabs.com/v2/api/lambda/login', {
      "method": 'POST',
      "headers": {
        "Content-Type": "application/json",
        "X-project": "cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ=="
      },
      "body": JSON.stringify(
        {
          "email": email,
          "password": password,
          "role": role
        }
      ),
      "redirect": "follow"
    });
    const response = await loginResponse.json();
    window.localStorage.setItem("token", response.token);
    return response;

  };

  this.getHeader = function () {
    return {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "X-project": base64Encode,
    };
  };

  this.baseUrl = function () {
    return this._baseurl;
  };

  this.check = async function (role, token) {

    const checkResponse = await fetch('https://reacttask.mkdlabs.com/v2/api/lambda/check', {
      "method": 'POST',
      "headers": {
        "Content-Type": "application/json",
        "x-project": "cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ==",
        "Authorization": `Bearer ${token}`
      },
      "body": JSON.stringify(
        {
          role: role
        }
      )
    });
    return checkResponse.json();
  };

  return this;
}
