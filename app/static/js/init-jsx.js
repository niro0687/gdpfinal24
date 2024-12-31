
const testDOM = document.querySelector('#test .init-container');
const test = ReactDOM.createRoot(testDOM);

const PAGE_TOKEN = document.querySelector('form input').value;


function PasswordInit ({}) {
    const [load, setLoad] = React.useState(false);

    const [newPass, setNewPass] = React.useState('');
    const [confirmPass, setConfirmPass] = React.useState('');

    const request = async function () {
        let to_send = {
            csrfmiddlewaretoken: PAGE_TOKEN,
        }

        let form = __.getFormData(to_send);

        let req = await __.layoutReqeust.post('', form, 'json');
        
        if (req.isSuccess) {
            alert(req.data);
            setLoad(false);
        } else {
            alert('error');
            setLoad(false);
        }
        
    }


    const handleNewChanged = (val) => {
        setNewPass(val);
    }

    const handleConfirmChanged = (val) => {
        setConfirmPass(val);
    } 

    const disabled = React.useMemo(() => {
        if (newPass.length >= 8 && confirmPass.length >= 8) {
            if (newPass == confirmPass) {
                return false;
            }
            return true;
        }
        return true;
    }, [newPass, confirmPass]);

    const initPass = function (e) {
        setLoad(true);
        request();
    }
    
    return <React.Fragment>
        <div className="message">
            <h2>Bonjour Nandrina</h2>
            <p className='xmato10 xfosi12 xlihe4'>Nous avons remarqué que vous n'avez pas encore initialiser votre mots de passe dans ce platform.
                Ce comportement passe lors que la premiere fois vous tentez d'authentifier votre compte sur 
                <strong> Gestion de projet</strong>.
            </p>

            <p className='xmato10 xfosi12 xlihe4'>Vous pouvez utiliser la même mots de passe que le CRM ou bien de créer à nouveau.</p>

            <p className='xmato10 xfosi12 xlihe4'>Il est bien important de notez que vous n'avons pas pu identifier votre mots de passe de votre compte sur CRM,
                c'est pourquoi que nous avons forcement demmandé l'initialisation de votre mots de passe sur ce platforme.
            </p>
        </div>
        <div className="form">
            <XField
                type='password'
                style={{
                    width: '90%'
                }}
                value={newPass}
                onChange={handleNewChanged}
                icon={'fa fa-lock'}
                center={true}
                >Nouveau mots de passe</XField>

            <XField
                type='password'
                style={{
                    width: '90%',
                    marginTop: '20px'
                }}
                value={confirmPass}
                onChange={handleConfirmChanged}
                icon={'fa fa-lock'}
                center={true}
                >Confirmer mots de passe</XField>

            <p className='x-text-info xmato15 xmale20 xfosi13 xlihe5 xfowebo'>Le mots de passe doit être 8 caracteres mininum</p>
            
            <XButtonLoadable
                style={{
                    width: '90%',
                    marginTop: '20px'
                }}
                disabled={disabled}
                load={load}
                onClickFunc={initPass}
                center={true}
                >Initialiser et authentifier</XButtonLoadable>
        </div>
    </React.Fragment>
}

test.render(<PasswordInit />)