
const authDOM = document.querySelector("#auth-form");
const auth = ReactDOM.createRoot(authDOM);
const authMe = document.querySelector("#auth-me");

function Auth () {
    const successAuth = function(val) {
        authMe.click();
    }
    const token = function() {
        let tokenDOM = document.querySelector("form.fake-form input").value;
        let value = {
            csrfmiddlewaretoken: tokenDOM,
        }
        return value;
    }

    const checkResponse = function(data) {
        if (data.authentified) {
            return 'authenticated'
        } else if (data.user_does_not_exists) {
            return 'userDoesNotExists'
        } else {
            return 'wrongPassword'
        }
    }

    const getLink = function () {
        return '/sign_up/null/';
    }

    return <React.Fragment>
        <XAuth
            idLabel={'Votre email'}
            url={'/login/'}
            token={token}
            registerURL={ getLink() }
            successAuthFunc={successAuth}
            checkResponse={checkResponse}
            registerText={"Vous n'avez pas encore du compte? Créer"}
            lostPasswordText={"J'ai oublié mon mots de passe."}
            lostPasswordURL={"/password_init/"}
            >Authentification</XAuth>
    </React.Fragment>
}

auth.render(<Auth />)