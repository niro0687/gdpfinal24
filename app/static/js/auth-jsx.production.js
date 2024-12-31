"use strict";

var authDOM = document.querySelector("#auth-form");
var auth = ReactDOM.createRoot(authDOM);
var authMe = document.querySelector("#auth-me");
function Auth() {
  var successAuth = function successAuth(val) {
    authMe.click();
  };
  var token = function token() {
    var tokenDOM = document.querySelector("form.fake-form input").value;
    var value = {
      csrfmiddlewaretoken: tokenDOM
    };
    return value;
  };
  var checkResponse = function checkResponse(data) {
    if (data.authentified) {
      return 'authenticated';
    } else if (data.user_does_not_exists) {
      return 'userDoesNotExists';
    } else {
      return 'wrongPassword';
    }
  };
  var getLink = function getLink() {
    return '/sign_up/null/';
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(XAuth, {
    idLabel: 'Votre email',
    url: '/login/',
    token: token,
    registerURL: getLink(),
    successAuthFunc: successAuth,
    checkResponse: checkResponse,
    registerText: "Vous n'avez pas encore du compte? Créer",
    lostPasswordText: "J'ai oublié mon mots de passe.",
    lostPasswordURL: "/password_init/"
  }, "Authentification"));
}
auth.render(/*#__PURE__*/React.createElement(Auth, null));
