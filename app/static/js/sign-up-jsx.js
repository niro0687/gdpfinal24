
const testDOM = document.querySelector('#test .init-container');
const test = ReactDOM.createRoot(testDOM);
const auth = document.querySelector("#auth-me");

const PAGE_TOKEN = document.querySelector("form.token input").value;

function SignUp ({}) {

    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        p1: '',
        p2: '',
        email_error: false,
        email_error_message: '',
        username_error: false,
        username_error_message: ''
    })

    const handleFirstNameChange = (val) => {
        setValues((prev) => {
            return {...prev, firstName: val}
        })
    }
    const handleLastNameChange = (val) => {
        setValues((prev) => {
            return {...prev, lastName: val}
        })
    }

    const handleEmailChange = (val) => {
        setValues((prev) => {
            return {...prev, 
                email: val,
                email_error: false,
            }
        })
    }

    const handleUsernameChange = (val) => {
        setValues((prev) => {
            return {...prev, 
                username: val, 
                username_error: false
            }
        })
    }

    const handleP1Change = (val) => {
        setValues((prev) => {
            return {...prev, p1: val}
        })
    }

    const handleP2Change = (val) => {
        setValues((prev) => {
            return {...prev, p2: val}
        })
    }

    const [load, setLoad] = React.useState(false);

    const disabled = React.useMemo(() => {
        if (
            (values.firstName.trim().length > 1) &&
            (values.lastName.trim().length > 1) &&
            (__.testEmail(values.email)) &&
            (__.testUsername(values.username)) &&
            (values.p1.length > 7) &&
            (values.p2.length > 7) &&
            (values.p1 == values.p2)
        ) {
            return false;
        }
        return true;
    }, [values]);

    const request = async function () {
        let to_send = {
            firstName: values.firstName,
            lastName: values.lastName,
            password1: values.p1,
            password2: values.p2,
            email: values.email,
            username: values.username,
            csrfmiddlewaretoken: PAGE_TOKEN,
        }
        let url = '';

        let form = __.getFormData(to_send)

        let req = await __.layoutRequest.post(url, form, 'json');

        if (req.isSuccess) {
            if (req.data.username_error) {
                setLoad(false);
                setValues((prev) => {
                    return {...prev, 
                        username_error: true,
                        username_error_message : req.data.message,
                    }
                })
            } else if (req.data.email_error) {
                setLoad(false);
                setValues((prev) => {
                    return {...prev, 
                        email_error: true,
                        email_error_message : req.data.message,
                    }
                })
            } else {
                setLoad(false);
                auth.click();
            }
        }
    }

    const create = () => {
        setLoad(true);
        request();
    }
    
    return <React.Fragment>

        <div className="one-form">
            <XField
                style={{
                    width: '90%',
                    marginBottom: '20px'
                }}
                onChange={handleFirstNameChange}
                value={values.firstName}
                center={true}
                >Nom</XField>
                
            <XField
                style={{
                    width: '90%',
                    marginBottom: '20px'
                }}
                onChange={handleLastNameChange}
                value={values.lastName}
                center={true}
                >Prénom</XField>

            <XField
                style={{
                    width: '90%',
                    marginBottom: '20px'
                }}
                onChange={handleEmailChange}
                value={values.email}
                center={true}
                >Email</XField>
            { values.email_error ? 
                <p className='x-text-danger xmale20 xfosi12 xfowebo xmato5 xmabo10'>{ values.email_error_message }</p> : null }
        </div>

        <div className="second-field">
            <XField
                style={{
                    width: '90%',
                    marginBottom: '20px',
                }}
                onChange={handleUsernameChange}
                value={values.username}
                center={true}
                >Nom d'utilisateur (eg: exemple123)</XField>
            { values.username_error ?
                <p className='x-text-danger xmale20 xfosi12 xfowebo xmato5 xmabo10'>{ values.username_error_message }</p> : null }
            <XField
                style={{
                    width: '90%',
                    marginBottom: '20px'
                }}
                type='password'
                value={values.p1}
                onChange={handleP1Change}
                center={true}
                >Mots de passe</XField>

            <XField
                style={{
                    width: '90%',
                    marginBottom: '20px'
                }}
                type='password'
                value={values.p2}
                onChange={handleP2Change}
                center={true}
                >Confirmez le mots de passe</XField>

            <XButtonLoadable
                style={{
                    width: '90%',
                    marginBottom: '20px'
                }}
                load={load}
                onClickFunc={create}
                disabled={disabled}
                center={true}
                >Créer mon compte</XButtonLoadable>
        </div>

    </React.Fragment>
}


test.render(<SignUp />)