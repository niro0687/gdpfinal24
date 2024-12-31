

const auth_me = document.querySelector('#auth-me');
const lostDOM = document.querySelector(".lost-password");
const lost = ReactDOM.createRoot(lostDOM);
const TOKEN = document.querySelector('form.fake-form input').value;




function authMe() {
    auth_me.click();
}

function LostPassword({ }) {
    const [step, setStep] = React.useState(1);
    const [step1Values, setStep1Values] = React.useState({
        email: '',
        email_not_found: false,
        load: false,
    })

    const [step2Values, setStep2Values] = React.useState({
        code: '',
        wrong_code: false,
        load: false,
    })

    const [step3Values, setStep3Values] = React.useState({
        p1: '',
        p2: '',
        load: false,
    })


    const handleEmail = (val) => {
        setStep1Values((recent) => {
            return {
                ...recent,
                email: val,
                email_not_found: false,
            }
        })
    }

    const handleCode = (val) => {
        setStep2Values((recent) => {
            return {
                ...recent,
                code: val,
                wrong_code: false,
            }
        })
    }

    const handleP1 = (val) => {
        setStep3Values((recent) => {
            return {
                ...recent,
                p1: val,
            }
        })
    }

    const handleP2 = (val) => {
        setStep3Values((recent) => {
            return {
                ...recent,
                p2: val,
            }
        })
    }


    const disabledContinue = React.useMemo(() => {
        if (__.testEmail(step1Values.email)) {
            return false;
        }
        return true;
    }, [step1Values]);


    const disabledCode = React.useMemo(() => {
        if (step2Values.code.length == 6) {
            return false;
        }
        return true;
    }, [step2Values]);


    const requestChange = async function () {
        let url = '/change_recovery_password/';

        let data = {
            email: step1Values.email,
            p1: step3Values.p1,
            p2: step3Values.p2,
            code: step2Values.code,
            csrfmiddlewaretoken: TOKEN,
        }

        let form = __.getFormData(data);

        let req = await __.layoutRequest.post(url, form, 'json');

        if (req.isSuccess) {
            if (req.data.success && req.data.auth) {
                authMe();
            } else {
                __.xAlert('Oups!', 'Il y a un erreur non identifié', 'danger');
            }
        } else {
            __.xAlert('Connection erreur', "Verifier votre connection.", 'danger');
        }
    }

    const change = () => {
        setStep3Values((rec) => {
            return { ...rec, load: true }
        });

        requestChange();
    }

    const disabledPassword = React.useMemo(() => {
        if (step3Values.p1.length >= 8 &&
            step3Values.p2.length >= 8 &&
            step3Values.p1 == step3Values.p2
        ) {
            return false;
        }
        return true;
    }, [step3Values]);


    const requestGetCode = async function () {
        let url = '/get_recovery_code/';

        let data = {
            email: step1Values.email,
            csrfmiddlewaretoken: TOKEN,
        }

        let form = __.getFormData(data);

        let req = await __.layoutRequest.post(url, form, 'json');

        if (req.isSuccess) {
            if (req.data.email_not_found) {
                setStep1Values((recent) => {
                    return {
                        ...recent,
                        load: false,
                        email_not_found: true,
                    }
                })
            } else {
                setStep(2);
                setStep1Values((recent) => {
                    return { ...recent, load: false }
                })
            }
        } else {
            __.xAlert('Connection erreur', "Verifier votre connection.", 'danger');
            setStep1Values((recent) => {
                return { ...recent, load: false }
            })
        }
    }

    const requestCheck = async function () {
        let url = '/check_code/';

        let data = {
            email: step1Values.email,
            code: step2Values.code,
            csrfmiddlewaretoken: TOKEN,
        }

        let form = __.getFormData(data);

        let req = await __.layoutRequest.post(url, form, 'json');

        if (req.isSuccess) {
            if (req.data.wrong_code) {
                setStep2Values((recent) => {
                    return {
                        ...recent,
                        load: false,
                        wrong_code: true,
                    }
                })
            } else {
                setStep(3);
                setStep2Values((recent) => {
                    return { ...recent, load: false }
                });
            }
        } else {
            __.xAlert('Connection erreur', "Verifier votre connection.", 'danger');
            setStep2Values((recent) => {
                return { ...recent, load: false }
            });
        }
    }

    const getCode = () => {
        setStep1Values((recent) => {
            return { ...recent, load: true }
        })

        requestGetCode();
    }

    const check = () => {
        setStep2Values((recent) => {
            return { ...recent, load: true }
        })

        requestCheck();
    }

    const backtoone = () => {
        setStep(1);
    }



    const getContent = React.useMemo(() => {
        if (step == 1) {
            return <React.Fragment>
                <p className='xmato20 x-text-info xtealce xfosi15 xfowebo'>Etape 1</p>
                <p className='xmato10 xmabo20 x-low-emphasis xtealce xfosi12 xfowebo'>Pour réinitialiser votre mots de passe, veuillez entrez d'abords votre adresse email</p>
                <XField
                    style={{
                        with: '90%'
                    }}
                    center={true}
                    value={step1Values.email}
                    onChange={handleEmail}
                >Adresse email</XField>
                {step1Values.email_not_found ? <p className='xfosi13 xmato7 x-text-danger xfowebo xmale30'>Email non trouvé</p> : null}

                <div className="xdifl xwi90per x-center xpato30 xjucoflen">
                    <XButtonLoadable
                        br={30}
                        load={step1Values.load}
                        disabled={disabledContinue}
                        onClickFunc={getCode}
                    >Continuer</XButtonLoadable>
                </div>

            </React.Fragment>

        } else if (step == 2) {
            return <React.Fragment>
                <p className='xmato20 x-text-info xtealce xfosi15 xfowebo'>Etape 2</p>
                <p className='xmato10 xmabo20 x-low-emphasis xtealce xfosi12 xfowebo'>Nous avons envoyé une code de reinitialisation de mots de passe par email à <strong>{step1Values.email}</strong>. <br />
                    Verifier votre boîte receiption et entrez le code en bas</p>
                <XField
                    style={{
                        with: '90%'
                    }}
                    type='number'
                    center={true}
                    value={step2Values.code}
                    onChange={handleCode}
                >Code</XField>
                {step2Values.wrong_code ? <p className='xfosi13 xmato7 x-text-danger xfowebo xmale30'>Code erreur, veuillez ré-essayez</p> : null}

                <div className="xdifl xwi90per x-center xpato30 xjucoflen x-pointer">
                    <div className="back-to-1 x-child-center xwi150 xhe44 xbora30 xmari15" onClick={backtoone}>
                        <p className='xfosi12 xfowebo'>Retour à l'etape 1</p>
                    </div>

                    <XButtonLoadable
                        br={30}
                        load={step2Values.load}
                        disabled={disabledCode}
                        onClickFunc={check}
                    >Continuer</XButtonLoadable>
                </div>

            </React.Fragment>
        } else if (step == 3) {
            return <React.Fragment>
                <p className='xmato20 x-text-info xtealce xfosi15 xfowebo'>Etape final</p>
                <p className='xmato10 xmabo20 x-low-emphasis xtealce xfosi12 xfowebo'>Créer un nouveau mots de passe. Votre mots de passe doit être 8 caractères mininum.</p>

                <XField
                    style={{
                        with: '90%'
                    }}
                    type='password'
                    center={true}
                    value={step3Values.p1}
                    onChange={handleP1}
                >Nouveau mots de passe</XField>

                <XField
                    style={{
                        with: '90%',
                        marginTop: '20px'
                    }}
                    type='password'
                    center={true}
                    value={step3Values.p2}
                    onChange={handleP2}
                >Confimer le mots de passe</XField>

                <div className="xdifl xwi90per x-center xpato30 xjucoflen x-pointer">
                    <XButtonLoadable
                        br={30}
                        style={{
                            width: '200px'
                        }}
                        load={step3Values.load}
                        disabled={disabledPassword}
                        onClickFunc={change}
                    >Changer et authentifier</XButtonLoadable>
                </div>

            </React.Fragment>
        }
    });


    return <React.Fragment>
        <h3 className='xtealce'>Reinitialisation de mots de passe</h3>
        {getContent}

        <div className="x-child-center xmato40">
            <a href="/login/" className='xfosi12 xfowebo x-text-info x-pointer'>Annuler et retourner vers la page d'authentification</a>
        </div>

    </React.Fragment>
}

lost.render(<LostPassword />);