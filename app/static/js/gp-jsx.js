

const reload_me = document.querySelector('#reload-me');


const homeDOM = document.querySelector("#home");
const inboxDOM = document.querySelector("#inbox");
const mytasksDOM = document.querySelector("#my-tasks");
const myWorkspaceDOM = document.querySelector("#my-workspace");
const addNewProjectDOM = document.querySelector("#add-new-project-box .container-add-project");
const sectionGlobalTaskDOM = document.querySelector("#add-new-global-task #section-global-task");
const searchDOM = document.querySelector(".search-bar");
const profileDOM = document.querySelector("#profile");
const projectListDOM = document.querySelector("#place-here-all-project");
const projectVisualisationDOM = document.querySelector("#project-visualisation");
const profilepicDOM = document.querySelector(".user-option-box #my-pic");
const profileOnHeaderDOM = document.querySelector(".user-option #profile-on-header");
const mynoteDOM = document.querySelector("#my-note");
const allTaskOtpionDOM = document.querySelector("#all-task-option");
const allTaskVisualDOM = document.querySelector("#all-task-visual");
const taskManagerDOM = document.querySelector("#my-space");
const myFinanceDOM = document.querySelector("#my-finance .main-finance");
const notificationDOM = document.querySelector(".notif-box .all-notif-list");
const settingDOM = document.querySelector("#settings-box .its-container .profils");
const inviteToJoinDOM = document.querySelector("#invite-to-join-pro");
const invoicePaperDOM = document.querySelector('.invoice-paper');
const rapportDOM = document.querySelector("#reporting");
const objectifDOM = document.querySelector("#goal");
const portfolioDOM = document.querySelector("#portfolio");
const mainPageLoadDOM = document.querySelector("#main-page-load");

const changePasswordFormDOM = document.querySelector('.change-password-box');
const changePasswordForm = ReactDOM.createRoot(changePasswordFormDOM);



const home = ReactDOM.createRoot(homeDOM);
const inbox = ReactDOM.createRoot(inboxDOM);
const mytasks = ReactDOM.createRoot(mytasksDOM);
const addproject = ReactDOM.createRoot(addNewProjectDOM);
const sectionGlobalTask = ReactDOM.createRoot(sectionGlobalTaskDOM);
const search = ReactDOM.createRoot(searchDOM);
const profile = ReactDOM.createRoot(profileDOM);
const myWorkspace = ReactDOM.createRoot(myWorkspaceDOM);
const projectList = ReactDOM.createRoot(projectListDOM);
const profilepic = ReactDOM.createRoot(profilepicDOM);
const profileOnHeader = ReactDOM.createRoot(profileOnHeaderDOM);
const mynote = ReactDOM.createRoot(mynoteDOM);
const taskManager = ReactDOM.createRoot(taskManagerDOM);
const myFinance = ReactDOM.createRoot(myFinanceDOM);
const notification = ReactDOM.createRoot(notificationDOM);
const setting = ReactDOM.createRoot(settingDOM);
const inviteToJoin = ReactDOM.createRoot(inviteToJoinDOM);
const invoicePaper = ReactDOM.createRoot(invoicePaperDOM);
const rapport = ReactDOM.createRoot(rapportDOM);
const objectif = ReactDOM.createRoot(objectifDOM);
const portfolio = ReactDOM.createRoot(portfolioDOM);
const mainPageLoad = ReactDOM.createRoot(mainPageLoadDOM);


mainPageLoad.render(<XLoading 
	w={100}
	color={'white'}
/>);

const COLOR = ["#0095FF", "#FF8600", "#00FF78", "#70C6FF", "#CF0069", "#7700FF", "#617CFF", "#FF3000", "#2B848C", "#E3DB00", "#FF0074"];



const preparation = document.querySelector("#preparation");



const createNoteBoxDOM = document.querySelector("#create-new-note-box");
const editNoteBoxDOM = document.querySelector("#edit-note-box");
const detailedFileDOM = document.querySelector("#detailed-file");

var ALL_CREATE_NOTE_BOX = [];
var ALL_CREATE_NOTE_BOX_ID = [];

var ALL_EDIT_NOTE_BOX = [];
var ALL_EDIT_NOTE_BOX_ID = [];

var NOTE_FAKE_ID = 1;



const ALL_FILE_OPENED_ID = [];

const ALL_FILE_OPENED = [];


const fileMessageDOM = document.querySelector('.visual-file-message');
const containerFileMessageDOM = fileMessageDOM.querySelector('.container-visual-message-file');
const closeMessageFileDOM = fileMessageDOM.querySelector('.close-file-message-visual');

const containerFileMessage = ReactDOM.createRoot(containerFileMessageDOM);

$(closeMessageFileDOM).on('click', function(e) {
    fileMessageDOM.style.display = 'none';
})


class InvoiceData {
	constructor () {
		this.file = null;
	}

	setFile (file) {
		this.file = file;
	}
}

var INVOICE_DATA = new InvoiceData();


function VisualFileMessage ({data}) {
    
    const content = React.useMemo(() => {
        if (data.image) {
            return <img src={data.image} />
        } else if (data.video) {
            return <video src={data.video} controls></video>
        }
    });

    return content;
}




function ChangePasswordForm ({}) {
    const [values, setValues] = React.useState({
        old_pass: '',
        new_pass: '',
        confirm_pass: '',
        wrong_pass: false
    });
    const [load, setLoad] = React.useState(false);

    const handleChangeOldPassword = (val) => {
        setValues((prev) => {
            return {...prev, 
				old_pass: val,
				wrong_pass: false,
			}
        })
    }

    const handleChangeNewPassword = (val) => {
        setValues((prev) => {
            return {...prev, new_pass: val}
        })
    }

    const handleChangeConfirmPassword = (val) => {
        setValues((prev) => {
            return {...prev, confirm_pass: val}
        })
    }

    const disabled = React.useMemo(() => {
        if (values.old_pass.length > 7 && values.new_pass.length > 7 && values.confirm_pass.length > 7) {
            if (values.new_pass == values.confirm_pass) {
                return false;
            }
            return true;
        }

        return true;
    }, [values]);

    const requestChange = async function () {
        let url = '/change_password/';
        
        let send = {
            old_pass: values.old_pass,
            new_pass: values.new_pass,
            confirm_pass: values.confirm_pass,
			csrfmiddlewaretoken: PAGE_TOKEN,
        }

        let form = __.getFormData(send);

        let req = await __.layoutRequest.post(url, form, 'json');

        if (req.isSuccess) {
            if (req.data.wrong_password) {
                setValues((prev) => {
					return {...prev, wrong_pass: true}
				})
				setLoad(false);
            } else {
                reload_me.click();
            }
        } else {
			setLoad(false);
            __.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
        }
        
    }


    const change = () => {
        setLoad(true);
        requestChange();
    }

	const cancel = () => {
		closeChangePasswordBox();
	}

    return <div className="container-change-pass x-shadow">
        <h2 className='xtealce'>Changer le mots de passe</h2>
        <p className="xfosi12 xtealce xmato10 xmabo40">Vous pouvez changer votre mots de passe à tout moment</p>

        <XField
            style={{
                width: '90%',
                marginTop: '10px'
            }}
            value={values.old_pass}
            onChange={handleChangeOldPassword}
            icon='fa fa-lock'
            center={true}
            type='password'
            >Ancien mots de passe</XField>

		{ values.wrong_pass ? 
        <p className='xfosi12 xfowebo x-text-danger xmato10 xmale20'>Mots de passe incorrect</p> : null }

        <XField
            style={{
                width: '90%',
                marginTop: '10px'
            }}
            value={values.new_pass}
            onChange={handleChangeNewPassword}
            icon='fa fa-lock'
            center={true}
            type='password'
            >Nouveau mots de passe</XField>
        
        <XField
            style={{
                width: '90%',
                marginTop: '10px'
            }}
            value={values.confirm_pass}
            icon='fa fa-lock'
            onChange={handleChangeConfirmPassword}
            center={true}
            type='password'
            >Confirmer le mots de passe</XField>

        <div className='xdigr xmato30 change-pass-confirm'>
            <div className='x-child-center x-pointer' onClick={cancel}>
                <p className='xfosi12 x-low-emphasis xfowebo'>Annuler le changement</p>
            </div>
            <XButtonLoadable
                style={{
                    width: '150px',
                }}
                load={load}
                disabled={disabled}
                onClickFunc={change}
                br={30}
                >Valider</XButtonLoadable>
        </div>
    </div>
}


function PortefeuilleForm ({projetsExistants, user}) { 

    const [selectedProjects, setSelectedProjects] = React.useState([]);
    const [load, setLoad] = React.useState(false);
	const [portefeuilles, setPortefeuilles] = React.useState([]);

	let socket = null;

	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/portfolio/' + user.id + '/'
		)
		socket.onopen = function(e) {}
		socket.onclose = function (e) {}
		socket.onmessage = function (e) {
			let response = JSON.parse(e.data);

			if (Array.isArray(response)) {
				setPortefeuilles(response)
			} else {
				setPortefeuilles((prev) => {
					return [...prev, response];
				})
			}
		}
		return () => socket.close()
	}, []);


	const handleProjectClick = (pro) => {
	    if (selectedProjects.some(u => u.id === pro.id)) {
	      setSelectedProjects(selectedProjects.filter(u => u.id !== pro.id));
	    } else {
	      setSelectedProjects([...selectedProjects, pro]);
	    }
	};
  
    const [nom, setNom] = React.useState('');
    const [description, setDescription] = React.useState('');
  
    const request = async function () {
        
        let url = '/create_new_portfolio/';

		let form_data = new FormData();
        let to_send = {
            title: nom,
            description: description,
			csrfmiddlewaretoken: PAGE_TOKEN,
            projects_ids: Array(selectedProjects.map((u) => u.id)),
        }
		Object.entries(to_send).forEach(([key, val]) => {
			form_data.append(key, val);
		});

		let req = await __.layoutRequest.post(url, form_data, 'json');

		if (req.isSuccess) {
			setDescription('');
			setNom('');
			setLoad(false);
			setSelectedProjects([]);
			setPortefeuilles((prev) => {
				return [...prev, req.data];
			})
		} else {
			__.xAlert('Connection erreur', 'Verifier votre connection et re-éssayer plus tard.', 'danger');
			setLoad(false);
		}

    };

    const disabled = React.useMemo(() => {
        if (selectedProjects.length > 0 && nom.trim().length != 0 && description.trim().length != 0) {
            return false;
        }
        return true;
    }, [selectedProjects, nom, description]);


    const create = () => {
        setLoad(true);
        request();
    }
    return (
    <div className="por-container">
        <h2 className="por-title xmato20 xmabo20 xtealce">Portefeuille</h2>
        <div className="por-container-block xdigr">
            
            <div className='por-form'>
                <p className="xfosi20 xfowebo xmale20 xmabo5">Nouvel portefeuille</p>
                <p className="x-low-emphasis xfosi12 xmale20 xfowebo xmabo20">Créer une nouvelle portefeuille</p>
                <XField
                    style={{
                        width: '90%',
                    }}
                    value={nom}
                    onChange={(val) => setNom(val)}
                    center={true}
                    >Nom du portefeuille</XField>

                <XTextarea
                    style={{
                        width: '90%',
                    }}
                    className={'xmato15 xmabo15'}
                    value={description}
                    onChange={(val) => setDescription(val)}
                    center={true}
                >Description</XTextarea>
                

                <p className="project-asc xmale20 xmabo10 xfosi15 xfowebo">Project associés:</p>
                
                
                { projetsExistants.map((pro) => (
                    <div 
                        className="xdifl xwi86per xalitce xmale20 xpato10 xpabo10 xpale10 xmato5 x-pointer" 
                        key={pro.id}
                        onClick={() => handleProjectClick(pro)}
			            style={{
			              borderRadius: "10px",
			              marginRight: "20px",
			              backgroundColor: selectedProjects.some(u => u.id === pro.id) ? '#3E93FF' : 'white',
			            }}
                    >
                        <XUserProfilePicture
                            name={pro.name}
                            fontSize={12}
                            imageURL={pro.photo}
                            width={40}
                            ></XUserProfilePicture>
                        <div>
                            <p className='xfosi12 xfowebo xmale10'>{ pro.name }</p>
                            <p className="x-low-emphasis xmale10 xfosi9 xmato3">Crée par { pro.admin.lastName } { pro.admin.firstName }</p>
                        </div>
                    </div>
                ))}
                
                    
                
                <XButtonLoadable
                    style={{
                        width: '90%',
                        marginTop: '15px',
                    }}
                    onClickFunc={create}
                    load={load}
                    disabled={disabled}
                    center={true}
                    >Créer</XButtonLoadable>
            </div>

            <div className="all-port-exists">
                <p className="xfosi20 xtealce xfowebo">Portefeuilles existants</p>

				{ portefeuilles.map((port) => (
					<div className="each-portfolio xpa20 xbora10 x-shadow xwi88per x-center xmato20" key={port.id}>
						<p className="xfosi20 xfowebo">{ port.title }</p>
						<p className="x-low-emphasis xmato10 xfosi13">{ port.description }</p>
						<p className="xfosi17 xfowebo xmato20">Projet associés</p>
						
						<div className="port-table-title xdigr xalitce xmato10">
							<div>
								<p>Nom du projet</p>
							</div>
							<div>
								<p>Administrateur</p>
							</div>
							<div>
								<p>Status</p>
							</div>

							<div>
								<p>Progression</p>
							</div>
						</div>
						
						{ port.projects.map((pro)=> (
							<div className="each-project-asc xmato15 xdigr xalitce" key={pro.id}>
								<div className="pro-profile xdifl xalitce">
									<XUserProfilePicture
										name={pro.name}
										imageURL={pro.photo}
										fontSize={13}
										width={45}
									></XUserProfilePicture>
									<p className='xfosi12 xfowebo xmale10'>{ pro.name }</p>
								</div>

								<div className="pro-profile xdifl xalitce">
									<XUserProfilePicture
										name={pro.admin.lastName}
										imageURL={pro.admin.photo}
										fontSize={13}
										width={40}
									></XUserProfilePicture>
									<p className='xfosi11 xfowebo xmale10'>{ pro.admin.lastName } { pro.admin.firstName }</p>
								</div>

								<div className={ pro.status == 'En cours' ? "pro-status xdifl pro-en-cours" : "pro-status xdifl pro-termine" }>
									<p className='xfosi11 xfowebo'>{ pro.status }</p>
								</div>

								<div className="pro-pro">
									<span style={{width: pro.progression + '%',}}></span>
								</div>
							</div>
						))}
						

						<p className="x-low-emphasis xmato10 xfosi11">Portefeuille crée le: { getFormatDateTime(port.datetime) }</p>
					</div>

				))}
                
            </div>
        </div>
        
    </div>
    );
};




function Objectif ({data, user}) {

    const [title, setTitle] = React.useState('');
    const [des, setDes] = React.useState('');
    const [date, setDate] = React.useState('');
	const [objs, setObjs] = React.useState([]);


	let socket = null;

	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/obj/' + user.id + '/'
		)
		socket.onopen = function(e) {}
		socket.onclose = function (e) {}
		socket.onmessage = function (e) {
			let response = JSON.parse(e.data);

			if (Array.isArray(response)) {
				setObjs(response)
			} else {
				setObjs((prev) => {
					if (response.action == 'add') {
						return [...prev, response];
					} else if (response.action == 'vote_updated') {
						let new_data = [...prev];


						new_data.forEach((ob) => {
							if (ob.id == response.id) {
								ob.easy_progression = response.easy_progression;
								ob.easy_total = response.easy_total;
								ob.difficult_progression = response.difficult_progression;
								ob.difficult_total = response.difficult_total;
								ob.impossible_progression = response.impossible_progression;
								ob.impossible_total = response.impossible_total;
								ob.not_vote_progression = response.not_vote_progression;
								ob.not_vote_total = response.not_vote_total;
							}
						});

						return new_data;
					}
					
				})
			}
		}
		return () => socket.close()
	}, []);



    const projects = React.useMemo(() => {
		return data.filter((p) => p.admin.id == user.id);
	}, []);

    const [load, setLoad] = React.useState(false);

    const [projectSelected, setProjectSelected] = React.useState(projects.length == 0 ? 'null' : projects[0].id);

    const handleTitleChanged = (val) => {
        setTitle(val);
    }

    const handleDesChanged = (val) => {
        setDes(val);
    }

    const handleDateChanged = (val) => {
        setDate(val);
    }

    const handleProjectSelected = (e) => {
        setProjectSelected(e.target.value);
    }

    const disabled = React.useMemo(() => {
        if (
            des.trim().length != 0 &&
            title.trim().length != 0 &&
            date != '' && date != undefined && date!= null &&
            projectSelected != 'null' && projectSelected != null
        ) {
            return false;
        } else {
            return true;
        }

    }, [des, title, date, projectSelected]);

    const requestCreate = async function () {
        let to_send = {
			project_id: projectSelected,
			title: title,
			description: des,
			date: date.toString(),
			csrfmiddlewaretoken: PAGE_TOKEN,
		}
		let url = '/create_goal/';
		let form_data = new FormData();

		Object.entries(to_send).forEach(([key, val]) => {
			form_data.append(key, val);
		});

		let req = await __.layoutRequest.post(url, form_data, 'json');

		if (req.isSuccess) {
			setLoad(false);
			setDes('');
			setTitle('');
		} else {
			setLoad(false);
			__.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
		}
    }

	const voteEasy = async function (id) {
		let url = '/vote_easy/';

		let to_send = {
			id: id,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form_data = __.getFormData(to_send);
		let req = await __.layoutRequest.post(url, form_data, 'json');
		if (req.isSuccess) {
			let comment = "";
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
		}
	}

	const voteDiff = async function (id) {
		let url = '/vote_diff/';

		let to_send = {
			id: id,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form_data = __.getFormData(to_send);
		let req = await __.layoutRequest.post(url, form_data, 'json');
		if (req.isSuccess) {
			let comment = "";
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
		}
	}

	const voteImpossible = async function (id) {
		let url = '/vote_impossible/';

		let to_send = {
			id: id,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form_data = __.getFormData(to_send);
		let req = await __.layoutRequest.post(url, form_data, 'json');
		if (req.isSuccess) {
			let comment = "";
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
		}
	}

	const months = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Août',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre',
	]

    const create = () => {
        setLoad(true);
        requestCreate();
    }

	const getObjectifDate = (date_value) => {
		let d = new Date(date_value);
		return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
	}

    return <div className="objectif-container">
        <p className="xfosi30 xtealce xfowebo xmato20">Objectif</p>

        <div className="main-objectif xdigr">
            <div className="objectif-form">
                <p className="xfosi20 xfowebo xmale20">Nouvel objectif</p>
                <p className="x-low-emphasis xfosi13 xmale20 xmabo20 xmato4">Créer une nouvel objectif</p>
                
                <XField
                    style={{
                        width: '90%'
                    }}
                    value={title}
                    onChange={handleTitleChanged}
                    center={true}
                    >Titre</XField>

                <XTextarea
					style={{
						width: '90%',
					}}
					className='xmato15'
					value={des}
					onChange={handleDesChanged}
					center={true}
					>Description</XTextarea>
                
                <p className="xmale20 xmato15 xfosi14 xfowebo">Projet:</p>

                <XSelect 
					value={projectSelected} 
					onChange={handleProjectSelected} 
					style={{
						width: '90%'
					}}
					className='xmato5'
					center={true}
				>
					<option value="null">---</option>
					{ projects.map((pro) => (
						<option value={pro.id} key={pro.id}>{pro.name}</option>
					))}
				</XSelect>
                
                <p className="xmale20 xmabo5 xmato15 xfosi14 xfowebo">Date fin d'objectif:</p>

                <XField
                    style={{
                        width: '90%'
                    }}
                    value={date}
                    onChange={handleDateChanged}
                    type='date'
                    center={true}
                    >Titre</XField>

                <XButtonLoadable
                    style={{
                        width: '90%',
                        height: '48px',
                        marginTop: '10px',
                    }}
                    disabled={disabled}
                    load={load}
                    center={true}
                    onClickFunc={create}
                    >Créer</XButtonLoadable>
                

            </div>
            <div className="objectif-content">
                <p className="xfosi20 xfowebo xtealce">Objectif existant</p>
                
				{ objs.map((ob) => (
					<div className="each-obj xwi88per xmato30 x-center xbora12 x-shadow xpa25 xpore" key={ob.id}>
						<div className="objectif-status xpoab xto20 xri20">
							<p className="xfosi12 xfowebo">{ ob.status }</p>
						</div>
						<p className="xfosi20 xfowebo">{ ob.title }</p>
						<p className="xfosi13 x-low-emphasis xmato7">{ ob.description }</p>
						<p className="xmato20">Date fin: <strong>{ getObjectifDate(ob.date) }</strong></p>
						<div className="project-and-progression xdigr xalitce">
							<div className="project xdifl xalitce">
								<div className="x-circle-90 x-child-center">
									<XUserProfilePicture
										name={ob.project.name}
										fontSize={14}
										imageURL={ob.project.photo}
										width={60}
										></XUserProfilePicture>
								</div>
								<p className="xfosi14 xfowebo">{ ob.project.name }</p>
							</div>

							<div className="project-pro-container">
								<p className="xfosi13 xmabo10 xfowebo">Progression du projet : { ob.progression }%</p>
								<div className="project-pro">
									<span style={{width: ob.progression+'%'}}></span>
								</div>
							</div>
							
						</div>

						<div className="vote xdigr xalitce well">
							<div className="objectif-progression">
								<span style={{width: ob.easy_progression + '%'}}></span>
							</div>
							<p className="xfosi12">{ ob.easy_total } personne{ ob.easy_total < 2 ? ' a' :  's ont' } voté qu'on pourra bien atteindre ce objectif</p>
						</div>
						 
						<div className="vote xdigr xalitce difficult">
							<div className="objectif-progression">
								<span style={{width: ob.difficult_progression + '%'}}></span>
							</div>
							<p className="xfosi12">{ ob.difficult_total } personne{ ob.difficult_total < 2 ? ' a' :  's ont' } voté qu'il est un peu difficle d'atteindre ce objectif</p>
						</div>

						<div className="vote xdigr xalitce impossible">
							<div className="objectif-progression">
								<span style={{width: ob.impossible_progression + '%'}}></span>
							</div>
							<p className="xfosi12">{ ob.impossible_total } personne{ ob.impossible_total < 2 ? ' a' :  's ont' } voté qu'il est impossible d'atteindre ce objectif</p>
						</div>

						<div className="vote xdigr xalitce wait">
							<div className="objectif-progression">
								<span style={{width: ob.not_vote_progression + '%'}}></span>
							</div>
							<p className="xfosi12">{ ob.not_vote_total } personnes n'{ ob.not_vote_total < 2 ? 'a' :  ' ont' } pas encore voté</p>
						</div>

						<div className="option-obj xmato20 xdifl xalitce">
							<div className="vote-me xdifl xalitce xwi50per">
								<div className="x-square-50 x-child-center xbora16 x-shadow x-pointer vote-for-possible" onClick={ () => voteEasy(ob.id) }>
									<i className="far xfosi20 fa-heart"></i>
								</div>
								<div className="x-square-50 x-child-center xmale10 xbora16 x-shadow x-pointer vote-for-difficult" onClick={ () => voteDiff(ob.id) }>
									<i className="far xfosi20 fa-thumbs-up"></i>
								</div>
								<div className="x-square-50 x-child-center xmale10 xbora16 x-shadow x-pointer vote-for-impossible" onClick={ () => voteImpossible(ob.id) }>
									<i className="far xfosi20 fa-thumbs-down"></i>
								</div>
							</div>

							<div className="settings-obj xdifl xwi50per">
								<div className="x-circle-50 x-shadow x-child-center x-pointer">
									<i className="fa fa-pen"></i>
								</div>
								<div className="x-circle-50 xmale10 x-shadow x-child-center x-pointer">
									<i className="fa fa-trash-alt"></i>
								</div>
							</div>
						</div>
					</div>
				))}
                
            </div>
        </div>
    </div>
}


function EachRapport ({rap}) {

	React.useEffect(() => {
		let body = document.body;
		let total = rap.project.tasks.length;
		let done = rap.project.tasks.filter((t) => t.status.toLowerCase() == 'terminé').length;
		let perc = (done / total) * 100;
		setTimeout(() => {
			let progress = body.querySelector('#pro-progress-' + rap.id + ' span');
			progress.style.width = perc + '%';
		}, 3000);
	});

	const getPerc = React.useMemo(() => {
		let total = rap.project.tasks.length;
		let done = rap.project.tasks.filter((t) => t.status.toLowerCase() == 'terminé').length;
		let perc = (done / total) * 100;
		
		return Number(perc.toFixed(perc, 2));
	})

	return <div className="each-rapport xwi88per x-center xbora10 x-shadow xmabo20">
		<p className="xfosi30 title-for-rapport xfowebo">Rapport de projet <strong>{rap.project.name}</strong></p>
		<p className="xmato10 xfosi14">{ rap.description }</p>
		<p className="xmato30 xfosi15 xmabo10">Progression du projet: <strong>{ getPerc }%</strong></p>
		<div className="projet-progress" id={'pro-progress-' + rap.id}>
			<span></span>
		</div>
		
		<div className="stat xdifl xjucospev xmato20">
			<div className="each-stat xdifl xjucospev xalitce xfldico xhe90">
				<p className="xfosi30 xfowebo">{ rap.project.tasks.length }</p>
				<p className="xfosi12">Total des taches</p>
			</div>
			<div className="each-stat xdifl xjucospev xalitce xfldico xhe90">
				<p className="xfosi30 xfowebo">{ rap.project.tasks.filter((t) => t.status.toLowerCase() == 'terminé').length }</p>
				<p className="xfosi12">Taches terminée</p>
			</div>
			<div className="each-stat xdifl xjucospev xalitce xfldico xhe90">
				<p className="xfosi30 xfowebo">{ rap.project.tasks.filter((t) => t.status.toLowerCase() == 'en cours').length }</p>
				<p className="xfosi12">Taches en cours</p>
			</div>
			<div className="each-stat xdifl xjucospev xalitce xfldico xhe90">
				<p className="xfosi30 xfowebo">{ rap.project.tasks.filter((t) => t.status.toLowerCase() == 'en attente').length }</p>
				<p className="xfosi12">Taches en attente</p>
			</div>
		</div>


		<p className="xfosi20 xfowebo xmato10">Taches Termiée</p>

		{ rap.project.tasks.filter((t) => t.status.toLowerCase() == 'terminé').map((ta) => (
			<div className="each-task xdigr xmato15 x-bd-bottom x-bd-medium xpabo15" key={ta.id}>
				<div className="task-name xdifl xalitce">
					<div className="icon">
						<i className="far fa-check-circle"></i>
					</div>
					<p className="xmale10 xfosi14 xfowebo">{ ta.name }</p>
				</div>
				<div className="responsable-task xdifl xalitce">
					<div className="x-child-center x-circle30">
						<XUserProfilePicture
							name={ta.user.lastName}
							width={30}
							fontSize={10}
							imageURL={ta.user.photo}
							></XUserProfilePicture>
					</div>
					<p className="xfosi12 xmale10 xfowebo">{ ta.user.lastName} { ta.user.firstName }</p>
				</div>
				<div className="deadline-task x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.deadline }j</p>
				</div>
				<div className="interval-date x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.startDate } - { ta.endDate }</p>
				</div>
				<div className="stat-task-done x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.status }</p>
				</div>
			</div>
		))}
		

		<p className="xfosi20 xfowebo xmato40">Taches En cours</p>

		{ rap.project.tasks.filter((t) => t.status.toLowerCase() == 'en cours').map((ta) => (
			<div className="each-task xdigr xmato15 x-bd-bottom x-bd-medium xpabo15" key={ta.id}>
				<div className="task-name xdifl xalitce">
					<div className="icon">
						<i className="far fa-check-circle"></i>
					</div>
					<p className="xmale10 xfosi14 xfowebo">{ ta.name }</p>
				</div>
				<div className="responsable-task xdifl xalitce">
					<div className="x-child-center x-circle30">
						<XUserProfilePicture
							name={ta.user.lastName}
							width={30}
							fontSize={10}
							imageURL={ta.user.photo}
							></XUserProfilePicture>
					</div>
					<p className="xfosi12 xmale10 xfowebo">{ ta.user.lastName} { ta.user.firstName }</p>
				</div>
				<div className="deadline-task x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.deadline }j</p>
				</div>
				<div className="interval-date x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.startDate } - { ta.endDate }</p>
				</div>
				<div className="stat-task-done x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.status }</p>
				</div>
			</div>
		))}


		<p className="xfosi20 xfowebo xmato40">Taches En attente</p>

		{ rap.project.tasks.filter((t) => t.status.toLowerCase() == 'en attente').map((ta) => (
			<div className="each-task xdigr xmato15 x-bd-bottom x-bd-medium xpabo15" key={ta.id}>
				<div className="task-name xdifl xalitce">
					<div className="icon">
						<i className="far fa-check-circle"></i>
					</div>
					<p className="xmale10 xfosi14 xfowebo">{ ta.name }</p>
				</div>
				<div className="responsable-task xdifl xalitce">
					<div className="x-child-center x-circle30">
						<XUserProfilePicture
							name={ta.user.lastName}
							width={30}
							fontSize={10}
							imageURL={ta.user.photo}
							></XUserProfilePicture>
					</div>
					<p className="xfosi12 xmale10 xfowebo">{ ta.user.lastName} { ta.user.firstName }</p>
				</div>
				<div className="deadline-task x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.deadline }j</p>
				</div>
				<div className="interval-date x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.startDate } - { ta.endDate }</p>
				</div>
				<div className="stat-task-done x-chil-center">
					<p className="xfosi12 xfowebo">{ ta.status }</p>
				</div>
			</div>
		))}

		<p className="x-low-emphasis xfosi12 xmato20">Rapport crée le: { getFormatDateTime(rap.datetime) }</p>
	</div>
}

function Rapport({data, user}) {
    const [load, setLoad] = React.useState(false);
    const [des, setDes] = React.useState("");
    const [allRepports, setAllRepports] = React.useState([]);

	let socket = null;

	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/rapport/' + user.id + '/'
		)
		socket.onopen = function(e) {}
		socket.onclose = function (e) {}
		socket.onmessage = function (e) {
			let response = JSON.parse(e.data);

			if (Array.isArray(response)) {
				setAllRepports(response)
			} else {
				setAllRepports((prev) => {
					return [...prev, response];
				})
			}
		}
		return () => socket.close()
	}, []);


	const project = React.useMemo(() => {
		return data;
	})

    const [projectSelected, setProjectSelected] = React.useState( project.length == 0 ? 'null' : project[0].id)

    const handleDesChanged = (val) => {
        setDes(val);
    }

    const handleProjectSelect = (e) => {
        setProjectSelected(e.target.value);
    }


    const disabled = React.useMemo(() => {
        if (projectSelected != 'null' && des.trim().length > 0) {
            return false;
        } else {
            return true;
        }
    }, [des, projectSelected]);

    const requestAdd = async function () {
        let url = '/create_repport/';
		let to_send = {
			id: projectSelected,
			description: des,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form_data = new FormData();

		Object.entries(to_send).forEach(([key, val]) => {
			form_data.append(key, val);
		})

		let req = await __.layoutRequest.post(url, form_data, 'json');

		if (req.isSuccess) {
			setLoad(false);
			setDes('');
			setAllRepports((prev) => {
				return [...prev, req.data];
			});
		} else {
			__.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
		}
    }

    const createRapport = () => {
        setLoad(true);
        requestAdd();
    }

	

    return <div className="rapport-container">
        <p className="xfosi35 xfowebo xtealce xmato20">Rapport</p>
        <div className="main-rapport xdigr xmato40">
            <div className="rapport-form">
                <p className="xfowebo xfosi118 xmale20">Nouveau rapport</p>
                <p className="xmabo20 x-low-emphasis xmale20 xmato6 xfosi12 xfowebo">Créer une rapport avec une simple étaple.</p>
                
                <label className="xmale20 xfosi13 xfowebo" htmlFor="select-project-rapport">Projet:</label>
                
				<XSelect
					value={projectSelected} 
					onChange={handleProjectSelect}
					style={{
						width: '90%',
					}}
					className={"xmabo15"}
					center={true}
				>
					<option value="null">---</option>
					{ project.map((pro) => (
						<option key={pro.id} value={pro.id}>{pro.name}</option>
					))}
				</XSelect>
                
               
                <XTextarea
					style={{
						width: '90%',
					}}
					center={true}
					value={des} 
					className={"xmabo15"}
					onChange={handleDesChanged}
				>Description</XTextarea>

                <div className="btn-submit-rapport">
                    <XButtonLoadable
                        style={{
                            width: '90%',
                            height: '47px'
                        }}
                        load={load}
                        onClickFunc={createRapport}
                        disabled={disabled}
                        center={true}
                        br={30}
                        >Créer</XButtonLoadable>
                </div>
            </div>
            <div className="rapport-content-container">
                <p className="xfowebo xfosi118 xtealce xmabo20">Les rapport exsistant</p>
                
				{ allRepports.map((rap) => (
					<EachRapport rap={rap} key={rap.id} />
				))}
                
            </div>
        </div>
        
    </div>
}












const TaskManager = ({user}) => {
    const [tasks, setTasks] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState({ 'En attente': '', 'En cours': '', 'Terminé': '' });

    let socket = null;

	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/my_personal_task/' + user.id + '/'
		)

		socket.onmessage = function(e) {
			let response = JSON.parse(e.data);
			if (Array.isArray(response)) {
				setTasks(response);
			}
		}

		socket.onopen = function(e) {}

		socket.onclose = function(e) {}
		
		return () => socket.close()

	}, []);


    const calculateDaysBetween = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const timeDiff = endDate - startDate;
        const daysDiff = timeDiff / (1000 * 3600 * 24);
        return Math.max(0, Math.floor(daysDiff));
    };

    
    const validateDates = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (end < start) {
            __.xAlert('Erreur', "La date de fin ne peut pas être antérieure à la date de début.", 'danger');
            return false;
        }
        return true;
    };

    
    const addTask = async function () {
        
        if (!title || !startDate || !endDate || !description) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        if (!validateDates()) {
            return;
        }

		let url = '/add_personal_task/';


        const deadlineDays = calculateDaysBetween(startDate, endDate);
        const today = new Date();
        const start = new Date(startDate);
        const end = new Date(endDate);

        let status = 'En attente';

        if (today >= start && today <= end) {
            status = 'En cours';
        } else if (today > end) {
            status = 'Terminé';
        }

        const newTask = {
            title: title,
            startDate: start.toLocaleDateString(),
            endDate: end.toLocaleDateString(),
			number_deadline: deadlineDays,
            deadline: `${deadlineDays}j`,
            description: description,
            status: status,
			csrfmiddlewaretoken: PAGE_TOKEN,
        };

		let formData = new FormData();

		Object.entries(newTask).forEach(([key, val]) => {
			formData.append(key, val);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			newTask.id = req.data.id;
			setTasks([...tasks, newTask]);
			setTitle('');
			setStartDate('');
			setEndDate('');
			setDescription('');
			cancelAdd();
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection s'il vous plaît.", "danger");
		}

    };

    // Fonction pour filtrer les tâches par statut et par recherche
    const filterTasksByStatusAndQuery = (status) => {
        return tasks
            .filter(task => task.status === status)
            .filter(task => task.title.toLowerCase().includes(searchQuery[status].toLowerCase()));
    };
	const btnStyle = {
		width: "95%",
	}

	const cancelAdd = function () {
		black.current.style.display = "none";
		addForm.current.style.display = "none";
	}
	const showAdding = function () {
		black.current.style.display = "block";
		addForm.current.style.display = "block";
	}
	const black = React.useRef(null);
	const addForm = React.useRef(null);

	const addingStyle = {
		width: "200px",
	}

	const taskEditForm = React.useRef(null);

	const openTaskEditForm = function () {
		taskEditForm.current.style.top = '0px';
	}
	
	const closeTaskEditForm = function () {
		taskEditForm.current.style.top = '100%';
	}

	const deletePeroTask = async function (id) {
		let url = '/delete_perso_task/';

		let to_send = {
			id: id,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form_data = __.getFormData(to_send);
		let req = await __.layoutRequest.post(url, form_data, 'json');

		if (req.isSuccess) {
			setTasks((prev) => {
				let arc = prev.filter((t) => t.id != id);
				return arc;
			})
		} else {
			__.xAlert('Connection error', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
		}
	}

	const markDone = async function (id) {
		let url = '/done_perso_task/';

		let to_send = {
			id: id,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form_data = __.getFormData(to_send);
		let req = await __.layoutRequest.post(url, form_data, 'json');

		if (req.isSuccess) {
			setTasks((prev) => {
				let arc = [...prev];
				arc.forEach((ar) => {
					if (ar.id == id) {
						ar.status = 'Terminé';
					}
				});

				return arc;
			})
		} else {
			__.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
		}
	}
	
    return (
        <div className="perso-container">
			<p className="xfosi25 xfowebo xmato20 xmabo5 tt-my-task">Gestion de votre tâche personelle</p>
			<p className="x-low-emphasis xfowebo xfosi13 dd-my-task">Toutes votre tâches ici sont tous des tâches qui n'ont pas lié à des projet.</p>
			
			<div className="x-center xwi90per xmabo20">
				<XButton
					onClickFunc={showAdding}
					style={addingStyle}
					center={true}
					>Ajouter une tâches</XButton>
			</div>
			
			<div className="black-this-add x-pointer" onClick={cancelAdd} ref={black}></div>
            <div className="perso-task-entry" ref={addForm}>
                <h3>Ajouter une tâche personnelle</h3>
				<p className="xfosi12 xtealce  x-low-emphasis xmabo20">Remplir les champs suivants pour ajouter votre tâches personelle</p>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titre"
                />
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    placeholder="Date de début"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    placeholder="Date de fin"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                ></textarea>

				<div className="xwi100per xmato10 x-center">
					<XButtonLoadable
						style={btnStyle}
						onClickFunc={addTask}
						br={30}
						center={true}
						>Ajouter cette tâche</XButtonLoadable>
				</div>
				
            </div>

            {['En attente', 'En cours', 'Terminé'].map(status => (
                <div key={status} className="perso-task-section">
                    <h3>Tâches {status}</h3>
                    <div className="perso-search-bar">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchQuery[status]}
                            onChange={(e) => setSearchQuery({...searchQuery, [status]: e.target.value})}
                        />
                    </div>
                    <div className="perso-task-list">
                        {filterTasksByStatusAndQuery(status).map((task) => (
                            <div key={task.id} className="perso-task-card">
                                <h4>{task.title}</h4>
								<p className="tt-task-descri">{task.description}</p>
								<div className="xdifl xalitce">
									<p className="xfosi12 xmale10"><strong>Date de début :</strong> {task.startDate}</p>
									<p className="xfosi12 xmale10"><strong>Date de fin :</strong> {task.endDate}</p>
									<p className="xfosi12 xmale10"><strong>Deadline :</strong> {task.deadline}</p>
								</div>
                                
                                
                                <span className={`perso-status-not-in-table ${task.status.toLowerCase().replace(' ', '-')}`}>
                                    {task.status}
                                </span>

								<div className="xdifl xjucospev xalitce xwi100per xmato15">
									<div onClick={ () => markDone(task.id) } className="each-method-to-task xbora30 x-square-46 x-child-center mark-complete x-pointer">
										<i className="fa fa-check-circle"></i>
									</div>
									<div onClick={ () => deletePeroTask(task.id) } className="each-method-to-task xbora30 x-square-46 x-child-center delete x-pointer">
										<i className="fa fa-trash-alt"></i>
									</div>
								</div>

								<div className="perso-task-edit xpoab xwi100per xle0" ref={taskEditForm}>
									<p className="xfosi15 xfowebo xmale10">Editer ce tâche</p>
									<p className="edit-task-form-message x-low-emphasis">Vous pouvez editer ces deux champs de cette tâches</p>
									<XField
										style={{
											width: '90%',
										}}
										center={true}
										>Titre</XField>
									<textarea placeholder="Description"></textarea>
									<div className="x-center xdigr perso-edit-or-cancel xwi90per xmato10 xhe60">
										<div className="x-child-center x-pointer" onClick={closeTaskEditForm}>
											<button className="x-pointer">Annuler</button>
										</div>
										<XButtonLoadable
											style={{
												width: '140px',
											}}
											center={true}
											br={30}
											>Sauvegarder</XButtonLoadable>
									</div>
								</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div>
                <h3>Toutes les tâches</h3>
                <table className="perso-table">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Date de début</th>
                            <th>Date de fin</th>
                            <th>Deadline</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.title}</td>
                                <td>{task.startDate}</td>
                                <td>{task.endDate}</td>
                                <td>{task.deadline}</td>
                                <td>{task.description}</td>
                                <td>
                                    <span className={`perso-status-in-table ${task.status.toLowerCase().replace(' ', '-')}`}>
                                        {task.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};







function VisualiseFileDetail ({data, updateMe, auth_user, deleteFile}) {
	
	const [fileData, setFileData] = React.useState(data);
	
	const [edit, setEdit] = React.useState(false);
	
	const handleChange = (e) => {
		setFileData(() => {
			return {...fileData, description: e.target.value };
		});
	}
	
	const fileExt = React.useMemo(() => {
		let ext = __.getFileExtension(data.fileURL);
		if (XSettings.filesFormats.indexOf(ext) != -1) {
			return XSettings.fileFormatToIcon[ext] + " xfosi40";
		} else {
			return "far fa-file xfosi40";
		}
		
	}, []);
	
	const getFileType = React.useMemo(() => {
		let ext = __.getFileExtension(data.fileURL);
		if (XSettings.filesFormats.indexOf(ext) != -1) {
			return XSettings.fileFormatToName[ext];
		} else {
			return "Fichier inconnu";
		}
	}, []);
	
	const editOrSave = () => {
		if (auth_user.id == fileData.user.id) {
			if (edit) {
				updateMe(fileData);
				setEdit(false);
			} else {
				setEdit(true);
			}
		} else {
			__.xAlert('Accées non autorisé', 'Vous ne pouvez pas editer ce fichier.', 'danger');
		}
	}
	
	const close = () => {
		detailedFileDOM.style.display = "none";
	}
	
	const toDownload = React.useRef(null);

	const download = () => {
		toDownload.current.click();
	}
	

	const deleteOwnFile = () => {
		deleteFile(fileData.id);
	}
	
	return <React.Fragment>
		<p className="xtealce x-low-emphasis xfowebo xmabo10 xfosi12">Detail d'une fichier</p>
				
		<div className="xdigr xalitce more-file-detail">
			<div className="x-square-100 x-child-center xbora30 x-deep-shadow">
				<i className={ fileExt }></i>
			</div>
			<div className="">
				<p className="xfowebo xmabo2">{ fileData.fileURL }</p>
				<p className="xfosi12 x-low-emphasis xfowebo">{ getFileType } - { fileData.size }</p>
				<p className="file-datetime xfosi11 x-low-emphasis xmato2">{ getFormatDateTime(fileData.date) }</p>
			</div>
		</div>
				
		{ edit ? null : 
		<p className="xfowebo xmato20 xfosi13 x-low-emphasis">{ fileData.description }</p> }
		
		{ edit ?
		<textarea id="edit-des" onChange={handleChange} value={ fileData.description } placeholder="Description..." className="xfowebo xmato20 xfosi13 xlihe2 x-low-emphasis"></textarea> : null }
		
		<p className="xmato20 xfosi12">Uploader par <strong>{ fileData.user.lastName } { fileData.user.firstName }</strong></p>

		<a href={fileData.realFileURL} ref={toDownload} download></a>
				
		<div className="more-option-file xdigr xmato30 xalitce">
			<div onClick={editOrSave} className="x-child-center xhe50 edit-file xbora30 x-pointer">
				<button className="xfowebo">{ edit ? "Sauvegarder" : "Editer" } </button>
			</div>
			<div className="x-circle-50 x-child-center x-pointer" onClick={download}>
				<i className="fa fa-arrow-down"></i>
			</div>
			<div className="x-circle-50 x-child-center x-pointer" onClick={deleteOwnFile}>
				<i className="fa fa-trash-alt"></i>
			</div>
		</div>
				
		<p onClick={close} className="cancel-this-box xtealce xmabo10 x-low-emphasis x-pointer xmato40 xfosi14 xfowebo">Fermer</p>
	</React.Fragment>
}

var FILE_ID = 0;


function ProjectFiles ({data, projectID, auth_user}) {
	
	const [allFiles, setAllFiles] = React.useState(data);
	
	const [uploadFormShowed, setUploadFormShowed] = React.useState(false);
	
	const switchShow = () => {
		setUploadFormShowed(c => !(c));
	}
	
	const getValues = (f, d) => {
		FILE_ID = FILE_ID + 1;

		let newFile = {
			id: 'file-' + FILE_ID,
			fileURL: f.name,
			file: f,
			size: __.byteToHuman(f.size),
			description: d,
		}
		
		setAllFiles((prev) => {
			return [...prev, newFile];
		})
	}

	const onFileSent = (fake_id, data) => {
		setAllFiles((prev) => {
			let arc = prev.filter((fi) => fi.id != fake_id);
			return [...arc, data];
		})
	}

	const requestDeleteFile = async function (id) {
		let url = '/delete_project_file/' + id + '/';
		let req = await __.layoutRequest.get(url, null, 'json');

		if (req.isSuccess) {
			setAllFiles((prev) => {
				return prev.filter((fi) => fi.id != id);
			});
			detailedFileDOM.style.display = "none";
		}
	}

	const deleteFile = (id) => {
		let target = allFiles.find((t) => t.id == id);
		if (target.user.id == auth_user.id) {
			requestDeleteFile(id);
		} else {
			__.xAlert('Accées non autorisé', "Vous n'etez pas autorisé à supprimer cette fichier", 'danger');
		}
	}
	
	const getContent = React.useMemo(() => {
		if (allFiles.length == 0) {
			return <p className="xfosi12 xfowebo x-low-emphasis xtealce xmato80">Aucune fichier uploader jusqu'à maintenant</p>
		} else {
			return <div className="all-files-list xmato30 xdigr xwi100per">
				{ allFiles.map((fi) => (
					<EachProjectFile 
						key={fi.id} 
						onFileSent={onFileSent}
						data={fi} 
						deleteFile={deleteFile}
						projectID={projectID} 
						auth_user={auth_user} />
				))}
			</div>
		}
	}, [allFiles]);
	
	return 	<div id="files-box" className="xpore x-center">
		<p className="xfosi25 xfowebo">Fichiers</p>
		<p className="x-low-emphasis xmato5 xlihe4 xfosi12">Peut-être avez-vous de nombreux fichiers importants liés à ce projet. Uploader ici, téléchargez chaque fois que vous en avez besoin.</p>
			
		<div onClick={switchShow} className="xwi130 x-shadow x-pointer xmato20 xbora30 xhe45 x-child-center btn-upload-new-file">
			<button className="xfosi12 xfowebo x-co_wh">{ uploadFormShowed ? " Annuler" : "Nouveau fichier" }</button>
		</div>
		
		{ uploadFormShowed ? <UploadingForm getValues={getValues} cancel={switchShow} /> : null }
		
		<p className="text-file-length xfosi18 xmato30 xfowebo">Tous les fichiers de ce projet ({allFiles.length})</p>

		{ getContent }
		
	</div>
}



function EachProjectFile ({data, projectID, auth_user, deleteFile, onFileSent}) {
	
	const [fileData, setFileData] = React.useState(data);
	
	const update = (updatedValue) => {
		setFileData(updatedValue);
	}
	
		
	const successUploading = (fake_id, values) => {
		setFileData(values);
		onFileSent(fake_id, values);
	}
	
	
	
	const getContent = React.useMemo(() => {
		if (typeof(fileData.id) == 'number') {
			return <Uploaded data={fileData} updateMe={update} auth_user={auth_user} deleteFile={deleteFile} />
		} else {
			return <Uploading data={fileData} projectID={projectID} success={successUploading} />
		}
	}, [fileData]);
	
	

	
	return <React.Fragment>{getContent}</React.Fragment>
}

function UploadingForm ({cancel, getValues}) {
	const [description, setDescription] = React.useState("");
	const [file, setFile] = React.useState(null);
	const input = React.useRef(null);
	
	const select = () => {
		input.current.click();
	}
	
	const upload = () => {
		getValues(file, description);
		reset();
	}
	
	const handleChange = (e) => {
		setFile(e.target.files[0]);
	}
	
	const handleDes = (e) => {
		setDescription(e.target.value);
	}
	
	const disabled = React.useMemo(() => {
		if (file != null && file != undefined && description.trim().length > 0) {
			return false;
		}
		return true;
	}, [file, description]);
	
	
	const getFileIcon = React.useMemo(() => {
		let otherClassName = " xfosi30";
		if (file == null) {
			return "far fa-file" + otherClassName;
		} else {
			let ext = __.getFileExtension(file.name);
			if (XSettings.filesFormats.indexOf(ext) != -1) {
				return (XSettings.fileFormatToIcon[ext] + otherClassName);
			} else {
				return "far fa-file" + otherClassName;
			}
		}
	}, [file]);
	
	
	const label = React.useMemo(() => {
		if (file == null) {
			return "Choisisez une fichier";
		} else {
			return file.name;
		}
	}, [file]);
	
	
	const fileDetail = React.useMemo(() => {
		if (file == null) {
			return "Le détail du fichier apparaitre ici une fois qu'une fichier est sélectionné";
		} else {
			let name = "";
			let ext = __.getFileExtension(file.name);
			
			if (XSettings.filesFormats.indexOf(ext) != -1) {
				name = XSettings.fileFormatToName[ext];
			} else {
				name = "Fichier inconnu";
			}
			
			return name + " | " + __.byteToHuman(file.size);
		}
	}, [file]);
	
	const reset = () => {
		setDescription("");
		setFile(null);
	}
	
	return 	<div className="xwi95per x-center xmato20 new-file-box x-bd-top x-bd-thin x-bd-bottom">
		<p className="xfosi17 xfowebo">Nouveau fichier</p>
		<div className="xdigr xmato20 upload-new-file-form xalitce">
			<div onClick={select} className="x-square-100 x-pointer x-child-center x-deep-shadow xbora30">
				<i className={getFileIcon}></i>
			</div>
				
			<div className="new-file-des">
				<p className="xfosi15 xfowebo">{ label }</p>
				<p className="xfosi12 x-low-emphasis xmato2 xlihe2">{ fileDetail }</p>
				
				<textarea name="" value={description} onChange={handleDes} className="xmato10 xlihe2 xfowebo x-low-emphasis" placeholder="Ecrire un description d'une fichier..."></textarea>
			</div>
		</div>
		<div className="cancel-or-upload xmato20 xdifl">
			<div onClick={cancel} className="xhe40 xwi100 x-child-center x-pointer">
				<button className="x-low-emphasis xfowebo">Annuler</button>
			</div>
			<XButton
				br={30}
				onClickFunc={upload}
				disabled={disabled}
				>Upload</XButton>
			<input type="file" id="file-input" onChange={handleChange} ref={input} />
		</div>
	</div>
}


function Uploading ({data, success, projectID}) {

	const link = "/project/upload_file/";
	
	const fileExt = React.useMemo(() => {
		let ext = __.getFileExtension(data.fileURL);
		
		if (XSettings.filesFormats.indexOf(ext) != -1) {
			return XSettings.fileFormatToIcon[ext];
		} else {
			return "far fa-file";
		}
		
	}, []);
	
	const getFileType = React.useMemo(() => {
		let ext = __.getFileExtension(data.file.name);
		if (XSettings.filesFormats.indexOf(ext) != -1) {
			return XSettings.fileFormatToName[ext];
		} else {
			return "Fichier inconnu";
		}
	}, []);
	
	const getFileSize = React.useMemo(() => {
		let s = __.byteToHuman(data.file.size);
		return s;
	}, []);
	
	const perc = React.useRef(null);
	
	const callback = (load, total, pourcentage) => {
		perc.current.innerHTML = "Uploading: " + pourcentage + "%";
	}
	
	const upload = async function () {
		let formData = new FormData();
		
		let ext = __.getFileExtension(data.file.name);
		let s = __.byteToHuman(data.file.size);
		

		let forms = {
			size: s,
			file: data.file,
			fileType: XSettings.fileFormatToName[ext],
			project_id: projectID,
			description: data.description,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}
		
		Object.entries(forms).forEach(([key, value]) => {
			formData.append(key, value);
		});
		
		let request = await __.layoutRequest.post(link, formData, 'json', callback);
		
		if (request.isSuccess) {
			success(data.id, request.data);
		} else {
			__.xAlert("Connection erreur", "Verifier votre connection et re-éssayez plus tard.", 'danger');
		}
	}
	
	React.useEffect(() => {
		setTimeout(() => {
			upload();
		}, 1000);
	}, []);
	
	
	
	return 	<div className="each-file-display xbora35 x-deep-shadow">
		<div className="head-file xdigr xwi90per xmale10 xalitce">
			<div className="x-square-80 xbora25 x-deep-shadow x-child-center">
				<i className={ fileExt }></i>
			</div>
			<div className="file-info">
				<p className="filename xfosi15 xfowebo">{ __.getShortText(data.file.name, 10) }</p>
				<p className="filesize-filetype xlihe2 xmato10 xfosi12 x-low-emphasis xfowebo">{ getFileType } | { getFileSize }</p>
				<p ref={perc} className="xmato10 xfowebo xfosi12 x-low-emphasis">...</p>
			</div>
		</div>
		<p className="xfosi12 xmato20 xmari10 xmale15">{ __.getShortText(data.description, 25) }</p>
		<p className="xmabo10 xmato7 xmari10 xmale15 xfosi11">Uploadé par <strong>Vous</strong></p>
					
		<div className="option-file xmato20 xdigr xwi90per x-center">
			<div className="xhe50 xbora30 x-child-center x-pointer">
				<button className="xfosi13 x-co_wh xfowebo">...</button>
			</div>
			<div className="x-circle-50 x-child-center x-pointer">
				<i className="fa fa-ellipsis-h"></i>
			</div>
		</div>
	</div>
}

function Uploaded ({data, updateMe, auth_user, deleteFile}) {
	
	const fileExt = React.useMemo(() => {
		let ext = __.getFileExtension(data.fileURL);
		if (XSettings.filesFormats.indexOf(ext) != -1) {
			return XSettings.fileFormatToIcon[ext];
		} else {
			return "far fa-file";
		}
	}, []);
	
	const getFileType = React.useMemo(() => {
		let ext = __.getFileExtension(data.fileURL);
		if (XSettings.filesFormats.indexOf(ext) != -1) {
			return XSettings.fileFormatToName[ext];
		} else {
			return "Fichier inconnu";
		}
	}, []);
	
	
	const seeDetail = () => {
		detailedFileDOM.style.display = "flex";
		
		let idF = "file-detailed-id-" + data.id;
		
		if (ALL_FILE_OPENED_ID.indexOf(idF) != -1) {
			ALL_FILE_OPENED.forEach((fi) => {
				if (fi.id == idF) {
					fi.style.display = "block";
				} else {
					fi.style.display = "none";
				}
			});
		} else {
			let newDetailDOM = __.createElement("div", idF, "container-file-detail xbora20");
			detailedFileDOM.appendChild(newDetailDOM);
			
			ALL_FILE_OPENED.push(newDetailDOM);
			ALL_FILE_OPENED_ID.push(idF);
			
			let newDetail = ReactDOM.createRoot(newDetailDOM);
			newDetail.render(<VisualiseFileDetail 
				data={data} 
				auth_user={auth_user}
				updateMe={updateMe} 
				deleteFile={deleteFile}
			/>);
			
			ALL_FILE_OPENED.forEach((n) => {
				if (n.id == idF) {
					n.style.display = "block";
				} else {
					n.style.display = "none";
				}
			})
		}
	}

	const domToDownload = React.useRef(null);
	
	const downloadFile = () => {
		domToDownload.current.click();
	}
	
	return 	<div className="each-file-display xbora35 x-deep-shadow">
		<div className="head-file xdigr xwi90per xmale10 xalitce">
			<div className="x-square-80 xbora25 x-deep-shadow x-child-center">
				<i className={fileExt}></i>
			</div>
			<div className="file-info">
				<p className="filename xfosi15 xfowebo">{ __.getShortText(data.fileURL, 10) }</p>
				<p className="filesize-filetype xmato10 xfosi12 x-low-emphasis xfowebo xlihe2">{ getFileType } | { data.size }</p>
			</div>
		</div>
		<p className="xfosi12 xmato20 xmari10 xmale15">{ __.getShortText(data.description, 25) }</p>
		<p className="xmabo10 xmato7 xmari10 xmale15 xfosi11">Uploadé par <strong>{ data.user.lastName } { data.user.firstName }</strong></p>
		<a href={data.realFileURL} className="xop0 xwi0 xhe0" ref={domToDownload} download></a>

		<div className="option-file xmato20 xdigr xwi90per x-center">
			<div onClick={seeDetail} className="xhe50 xbora30 x-child-center x-pointer">
				<button className="xfosi13 x-co_wh xfowebo">Voir plus</button>
			</div>
			<div className="x-circle-50 x-child-center x-pointer" onClick={downloadFile} >
				<i className="fa fa-arrow-down"></i>
			</div>
		</div>
	</div>
				
}




function ProjectNotesComponent ({id, title, des, data, personal, auth_user}) {
	
	const [projectID, setProjectID] = React.useState("create-note-id-" + id);
	
	const [allNote, setAllNote] = React.useState(data);
	
	const save = (data_note) => {
		setAllNote((prev) => {
			return [...prev, data_note];
		});
	}
	
	const create = () => {
		createNoteBoxDOM.style.display = "flex";
		if (ALL_CREATE_NOTE_BOX_ID.indexOf(projectID) != -1) {
			ALL_CREATE_NOTE_BOX.forEach((c) => {
				if (c.id == projectID) {
					c.style.display = "block";
				} else {
					c.style.display = "none";
				}
			});
		} else {
			let newBox = __.createElement("div", projectID, "container-new-note xpore xbora30 xovhi");
			
			createNoteBoxDOM.appendChild(newBox);
			ALL_CREATE_NOTE_BOX_ID.push(projectID);
			ALL_CREATE_NOTE_BOX.push(newBox);
			
			let box = ReactDOM.createRoot(newBox);
			box.render(<CreateNote 
				save={save} 
				projectID={id}
				personal={personal}
				auth_user={auth_user}
			/>);
			
			ALL_CREATE_NOTE_BOX.forEach((n) => {
				if (n.id == projectID) {
					n.style.display = "block";
				} else {
					n.style.display = "none";
				}
			});
		}
	}
	
	
	const getContent = React.useMemo(() => {
		if (allNote.length == 0) {
			return <p className="xfosi12 xtealce x-low-emphasis xmato50" >Aucune note jusqu'a maintenant</p>
		} else {
			return <div className="all-notes xdigr xwi95per x-center">
				{ allNote.map((note) => (
					<EachNote 
						key={note.id} 
						data={note} 
						auth_user={auth_user}
						personal={personal}
					/>
				))}
			</div>
		}
		
	}, [allNote]);
	
	
	
	return <React.Fragment> 
	
		<p className="xfosi25 xmato20 xfowebo">{ title }</p>
		<p className="x-low-emphasis xmato5 xlihe4 xfosi12">{ des }</p>
		
		<div onClick={create} className="btn-new-note x-pointer xdifl xalitce xmato20">
			<div className="x-square-70 xbora25 dashed x-child-center">
				<i className="fa fa-plus"></i>
			</div>
			<div className="xmale20">
				<p className="xfowebo">Créer une note</p>
			</div>
		</div>
		
		<p className="xfosi20 xfowebo xmato20 xmabo20">Tous les notes enregistrer ({ allNote.length })</p>
		{ getContent }
	</React.Fragment>
}


const ProjectNotes = React.memo(ProjectNotesComponent);

function EachNote ({data, auth_user, personal}) {
	
	const [noteData, setNoteData] = React.useState(data);
	
	const getTitle = React.useMemo(() => {
		if (noteData.title.trim().length == 0) {
			return <p className="title-note xfosi20 xfowebo xmale15 x-low-emphasis xfostit">Pas de titre</p>
		} else {
			return <p className="title-note xfosi20 xfowebo xmale15">{ __.getShortText(noteData.title, 15) }</p>
		}
	}, [noteData]);
	
	
	const change = (title, description) => {
		setNoteData(() => {
			return {...noteData, title: title, content: description};
		});
	}
	
	const edit = () => {
		let noteID = "edit-note-id-" + noteData.id;
		
		editNoteBoxDOM.style.display = "flex";
		if (ALL_EDIT_NOTE_BOX_ID.indexOf(noteID) != -1) {
			ALL_EDIT_NOTE_BOX.forEach((c) => {
				if (c.id == noteID) {
					c.style.display = "block";
				} else {
					c.style.display = "none";
				}
			});
		} else {
			let newBox = __.createElement("div", noteID, "container-new-note xpore xbora30 xovhi");
			editNoteBoxDOM.appendChild(newBox);
			ALL_EDIT_NOTE_BOX_ID.push(noteID);
			ALL_EDIT_NOTE_BOX.push(newBox);
			
			let box = ReactDOM.createRoot(newBox);
			box.render(<EditNote 
				save={change} 
				data={data} 
				auth_user={auth_user}
				personal={personal}
			/>);
			
			ALL_EDIT_NOTE_BOX.forEach((n) => {
				if (n.id == noteID) {
					n.style.display = "block";
				} else {
					n.style.display = "none";
				}
			});
		}
		
	}
	
	return <div className="each-note xbora5 x-deep-shadow" onClick={edit}>
		{ getTitle }
		<p className="des-note xmato10 xfosi13 xmale15 xmari15">{ __.getShortText(noteData.content, 30) }</p>
		<p className="xfosi12 xmato10 xmale15">Par <strong>{ noteData.user.lastName } { noteData.user.firstName }</strong></p>
		<p className="x-low-emphasis xmato3 xmale15 xfosi10">{ getFormatDateTime(noteData.date) }</p>
	</div>
}




function CreateNote ({save, projectID, personal}) {
	
	const style = {
		width: "100%",
	}
	
	const [load, setLoad] = React.useState(false);
	const [values, setValues] = React.useState({
		title: "",
		content: "",
		csrfmiddlewaretoken: PAGE_TOKEN,
		project_id: projectID,
	})
	
	const handleContent = (e) => {
		setValues(() => {
			return {...values, content: e.target.value};
		})
	}
	
	const handleTitle = (e) => {
		setValues(() => {
			return {...values, title: e.target.value};
		})
	}
	
	const close = () => {
		createNoteBoxDOM.style.display = "none";
	}
	
	const disabled = React.useMemo(() => {
		if (values.content.trim().length == 0) {
			return true;
		} else {
			return false;
		}
	}, [values]);
	
	const request = async function () {
		let url = '';

		if (personal) {
			url = '/personal/notes/';
		} else {
			url = '/project/notes/';
		}


		let formData = new FormData();
		
		Object.entries(values).forEach(([key, value]) => {
			formData.append(key, value)
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			save(req.data);
			createNoteBoxDOM.style.display = "none";
			setLoad(false);
			
			setValues(() => {
				return {...values, title: "", content: ""};
			});
		}
	}
	
	const submit = () => {
		setLoad(true);
		request();
	}
	
	return 	<React.Fragment>
		<div className="xpoab xhe50 xto5 xle15 xri5 xdigr header-note">
			<input type="text" value={values.title} onChange={handleTitle} placeholder="Titre" className="xfosi17 xfowebo" />
			<div onClick={close} className="x-pointer x-circle-50 x-child-center x-deep-shadow">
				<i className="fa fa-times"></i>
			</div>
		</div>
				
		<textarea placeholder="Write note" onChange={handleContent} value={values.content} className="xpoab xto60 xwi94per xbo60"></textarea>
				
		<div className="save-note xpoab xbo10 xle10 xri10">
			<XButtonLoadable
				br={30}
				onClickFunc={submit}
				load={load}
				disabled={disabled}
				style={style}
				>Créer</XButtonLoadable>
		</div>
	</React.Fragment>
}


function EditNote ({save, data, auth_user, personal}) {
	const style = {
		width: "100%",
	}
	const [load, setLoad] = React.useState(false);
	const [values, setValues] = React.useState(data);
	
	const handleContent = (e) => {
		setValues(() => {
			return {...values, content: e.target.value};
		})
	}
	
	const handleTitle = (e) => {
		setValues(() => {
			return {...values, title: e.target.value};
		})
	}
	
	const close = () => {
		editNoteBoxDOM.style.display = "none";
	}
	
	const disabled = React.useMemo(() => {
		if (values.user.id == auth_user.id) {
			if (values.content.trim().length == 0) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
		
	}, [values]);

	const editRequest = async function () {
		let url = '/edit_note/';

		let to_send = {
			csrfmiddlewaretoken: PAGE_TOKEN,
			id: values.id,
			title: values.title,
			personal: personal,
			content: values.content
		}

		let formData = new FormData();

		Object.entries(to_send).forEach(([key, val]) => {
			formData.append(key, val);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			__.xAlert('Modification terminé', 'Modification de ce note est terminé avec succées.', 'success');
			save(values.title, values.content);
			editNoteBoxDOM.style.display = "none";
		} else {
			__.xAlert('Connection erreur', 'Oupps, verifiez votre connection et essayez plus tard.', 'danger');
		}
		setLoad(false);
	}


	const submit = () => {
		setLoad(true);
		editRequest();
	}

	
	
	return 	<React.Fragment>
		<div className="xpoab xhe50 xto5 xle15 xri5 xdigr header-note">
			<input type="text" value={values.title} onChange={handleTitle} placeholder="Titre" className="xfosi17 xfowebo" />
			<div onClick={close} className="x-pointer x-circle-50 x-child-center x-deep-shadow">
				<i className="fa fa-times"></i>
			</div>
		</div>
				
		<textarea placeholder="Write note" onChange={handleContent} value={values.content} className="xpoab xto60 xwi94per xbo60"></textarea>
				
		<div className="save-note xpoab xbo10 xle10 xri10">
			<XButtonLoadable
				br={30}
				onClickFunc={submit}
				load={load}
				disabled={disabled}
				style={style}
				>Sauvegarder</XButtonLoadable>
		</div>
	</React.Fragment>
}


function TableRows ({data, auth_user}) {
	const dataDerive = React.useMemo(() => {
		let d = [];
		
		data.forEach((project) => {
			let pro = {};
			pro.name = project.name;
			pro.id = project.id;
			pro.tasks = [];
			
			project.sections.forEach((section) => {
				section.tasks.forEach((task) => {
					if (task.user.id == auth_user.id) {
						pro.tasks.push({
							id: task.id,
							name: task.name,
							description: task.description,
							endDate: task.endDate,
							startDate: task.startDate,
							deadline: task.deadline,
							status: task.status
						});
					}
					
				});
			});
			d.push(pro);
		});
		
		return d;
	});
	
	return <React.Fragment>
		{ dataDerive.map((p) => (
			<EachTableTaskRow key={p.id} tasks={p.tasks} projectName={p.name} />
		))}
	</React.Fragment>
}






function EachTableTaskRow ({tasks, projectName}) {
		
	const style = {
		background: XSettings.getColorFromChar[projectName[0].toLowerCase()]
	}
	
	return <React.Fragment>
		{ tasks.map((task, key) => (
		<div className="each-row x-bd-bottom x-bd-thin xdifl" key={key}>
			<div className="task-name-value xwi290 each-value xhe40 xdifl xdifl xalitce">
				<div className="xmale10 x-circle-15 x-child-center">
					<i className="fa fa-check"></i>
				</div>
				<p>{ task.name }</p>
			</div>
									
			<div className="due-date-value xwi200 each-value xhe40 xdifl xdifl xalitce">
				<p>{ task.startDate } { task.endDate }</p>
			</div>
									
			<div className="project-value xwi170 each-value xhe40 xdifl xdifl xalitce">
				<div className="project-of-task xdifl xalitce">
					<div style={style} className="x-square-15 xbora5 xmale5"></div>
					<p className="xfowebo xmato2">{ __.getShortText(projectName, 15) }</p>
				</div>
										
			</div>
									
			<div className="colaborateur-value each-value xwi90 xhe40 xdifl xalitce">
				<p>{ task.deadline } jour{ task.deadline > 1 ? 's' : ''}</p>
			</div> 
									
			<div className="colaborateur-value each-value xwi100 xhe40 xdifl xalitce">
				<p>{ task.status } </p>
			</div>
			<div className="colaborateur-value each-value xhe40 xdifl xalitce">
				<p>{ task.description }</p>
			</div>
		</div>
		))}
	</React.Fragment>
}



function MyTask ({projects, user}) {
	
	const [myData, setMyData] = React.useState(projects);
	
	const addTask = () => {
		openAddNewTask();
	}
	
	return <React.Fragment>
		<div className="my-tasks-header xalitce xdifl">
			<div className="x-profile-pic x-square-45 xmari20">
				<XUserProfilePicture
					width={45}
					fontSize={14}
					name={user.lastName}
					imageURL={user.photo}
					></XUserProfilePicture>
			</div>
			<div>
				<h2 className="xfosi20">Mes tâches dans les project</h2>
			</div>
		</div>
					
		<div className="menu-of-task xdifl xmato20">
			<div className="each-menu-of-task">
				<i className="fa fa-list-ul xmari5"></i>
				<span>Liste</span>
			</div>
		</div>
				
				
		<div className="tableaux xwi100per xmato20">
						
			<div className="table-header x-bd-top x-bd-bottom x-bd-medium xdifl xalitce">
							
				<div className="task-name-header xwi290 xhe40 xdifl xalitce">
					<p>Nom de la tâche</p>
				</div>
							
				<div className="due-date-header xwi200 xhe40 xdifl xalitce">
					<p>date d'échéance</p>
				</div>
							
							
				<div className="project-header xwi170 xhe40 xdifl xalitce">
					<p>Projet</p>
				</div>
							
				<div className="colaborateur-header xwi90 xhe40 xdifl xalitce">
					<p>Deadline</p>
				</div>
							
				<div className="colaborateur-header xwi100 xhe40 xdifl xalitce">
					<p>Status</p>
				</div>
				<div className="colaborateur-header xwi100 xhe40 xdifl xalitce">
					<p>Description</p>
				</div>
							
			</div>
						
			
						
			<div className="table-values">
				{ myData.length == 0 ? <p className="x-low-emphasis xmato50 xfosi12 xtealce xfowebo">Vous n'avez aucune tâche pour le moment</p> :
				<TableRows 
					data={myData} 	
					auth_user={user}
				/> }
			</div>
			
		</div>
					
				
	</React.Fragment> 
	
}


function ProjectListed ({user}) {
	
	const [data, setData] = React.useState(null);
	const [load, setLoad] = React.useState(true);
	let socket = null;

	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/project_list/'
		)
		socket.onclose = function (e) {}
		socket.onopen = function (e) {}
		
		socket.onmessage = function (e) {
			let message = JSON.parse(e.data);
			if (Array.isArray(message)) {
				setLoad(false);
				setData(message);
			} else {
				if (message.action == 'new') {
					setData((recent) => {
						return [...recent, message];
					});
				} else if (message.action == 'delete') {
					
					setData((recent) => {
						let prev = [...recent];
						let to_return = prev.filter((p) => p.id != message.id);
						return to_return;
					});
					
					if (message.deleter_id != user.id) {
						switchMenu('home');
						let home_dim = __.dimension.getDimension("#slide-to-home");
						slideShow.style.left = home_dim.ol + 'px';
						slideShow.style.top = home_dim.ot + 'px';
						focusSlideFunc('home');
						mainPageLoadDOM.style.display = 'none';
					}
					reload_me.click();
				}
				
			}
		}
		return () => socket.close()
	}, []);

	return <React.Fragment>
		
		{ load ? null :
			data.map((project) => (
				<EachProjectOnSideBar 
					id={project.id} 
					data={project}
					key={project.id}
					user={user}
				>{project.name}</EachProjectOnSideBar>
			))
		}
	</React.Fragment>
}



function CreateTaskOnProject ({addNow, cancel, sectionID}) {
	
	const [load, setLoad] = React.useState(false);
	
	
	const [values, setValues] = React.useState({
		name: "",
		description: "",
		id: sectionID,
		startDate: getTaskDate(new Date()),
		endDate: getTaskDate(new Date()),
		csrfmiddlewaretoken: PAGE_TOKEN,
	});
	
	const handleChangeName = (e) => {
		setValues((prec) => {
			return {...prec, name: e.target.value}
		});
	}
	
	
	const handleDescription = (e) => {
		setValues((prec) => {
			return {...prec, description: e.target.value}
		});
	}

	

	const handleStart = (e) => {
		setValues((prec) => {
			return {...prec, startDate: e.target.value}
		});
	}

	const handleFin = (e) => {
		setValues((prec) => {
			return {...prec, endDate: e.target.value}
		});
	}

	const getDeadline = React.useMemo(() => {
		let end = new Date(values.endDate).getTime();
		let begin = new Date(values.startDate).getTime();

		let diffInMIll = end - begin;
		if (diffInMIll < 0) {
			return false;
		} else {
			diffInMIll = Math.abs(diffInMIll);
			let diff = Math.floor(diffInMIll / (1000 * 60 * 60 * 24))
			return diff;
		}

	}, [values.endDate, values.startDate, values]);

	const getStatus =  React.useMemo(() => {
		let today = new Date();
		today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		today = new Date(today).getTime();

		let begin = new Date(values.startDate).getTime();
		
		if (today >= begin) {
			return 'En cours'
		} else {
			return 'En attente'
		}

	}, [values.endDate, values.startDate, values]);
	
	const disabled = React.useMemo(() => {
		if (values.name.trim().length > 0 && values.description.trim().length > 0 && values.startDate && values.endDate && getDeadline) {
			return false;
		}
		return true;
	}, [values])
	
	
	
	const request = async function () {
		let url = '/add_task/';

		let formData = new FormData();

		formData.append('deadline', getDeadline);
		formData.append('status', getStatus);

		Object.entries(values).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			addNow(sectionID, req.data);
			setLoad(false);
			cancel();
		} else {
			__.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
			setLoad(false);
		}
		
	}
	
	const save = () => {
		setLoad(true);
		request();
	}
	
	const style = {
		width: "170px",
	}
	
	
	return 	<div className="add-task-in-section xwi86per x-center xbora10">
		<div className="input-task xdigr xalitce">
			<div className="x-circle-30 x-child-center">
				<i className="fa fa-check"></i>
			</div>
			<input value={values.name} onChange={handleChangeName} className="xfosi14 xfowebo" placeholder="Écrire un nom de tâche" />
		</div>
		
		<textarea placeholder="Description" onChange={handleDescription} value={values.description} className="xmato20 xlihe3 xfowebo xwi90per x-center xhe70"></textarea>
		
		<div className="xdigr date-begin-and-end xmabo20">
			<div className="xbora5">
				<input type="date" onChange={handleStart} value={values.startDate} />
			</div>
			
			<div className="xbora5">
				<input type="date" onChange={handleFin} value={values.endDate} />
			</div>
		</div>
		
		<div className="xdigr xalitce save-or-cancel-add-task">
			<div className="x-child-center x-pointer">
				<button>Annuler</button>
			</div>
			<XButtonLoadable
				style={style}
				load={load}
				onClickFunc={save}
				disabled={disabled}
				br={30}
				>Ajouter mon tâche</XButtonLoadable>
		</div>
		
	</div>
}




function ProjectSection ({children, admin, tasks, sectionID, markOneTaskAsDone, projectName, addNow, user, deleted, markDone, projectID, duplicateTask, deleteTask}) {
	
	const [displayAddNewTask, setDisplayAddNewTask] = React.useState(false);
	
	const add = () => {
		setDisplayAddNewTask(c => (!c));
	}
	
	const showOption = () => {
		if (optionShowed) {
			option.current.style.display = 'none';
		} else {
			option.current.style.display = 'block';
		}
		setOptionShowed((r) => !(r));
	}

	const deleteSection = () => {
		if (admin.id == user.id) {
			requestDelete();
		} else {
			__.xAlert('Suppression non autorisé', "Seule l'administrateur peut supprimer les sections dans un projet", 'info');
		}
	}

	const requestDelete = async function () {

		let url = '/delete_section/';

		let to_send = {
			sectionID: sectionID,
			projectID: projectID,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();
		
		Object.entries(to_send).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			deleted(sectionID);
			showOption();
		} else {
			__.xAlert("Connection erreur", 'Verifier votre connection et re-éssayez plus tard.', 'danger');
		}
		
	}

	const requestMarkDone = async function () {
		
		let url = '/mark_all_task_done/';

		let to_send = {
			sectionID: sectionID,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();
		
		Object.entries(to_send).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			markDone(sectionID);
			showOption();
		} else {
			__.xAlert("Connection erreur", 'Verifier votre connection et re-éssayez plus tard.', 'danger');
		}
		
	}


	const markAllTaksAsDone = () => {
		if (admin.id == user.id) {
			requestMarkDone();
		} else {
			__.xAlert('Accées non autorisé', "Seule l'administrateur peut faire cette action.", 'info');
		}
		
	}


	const option = React.useRef(null);

	const [optionShowed, setOptionShowed] = React.useState(false);

 	return 	<div className="each-section x-deep-shadow xpore">
		<div className="section-title xdigr xalitce">
			<div className="xdifl xalitce">
				<p className="xfosi18 xfowebo xmari20 x-low-emphasis">{children}</p>
				<p className="xfosi15 xfowebo">{tasks.length}</p>
			</div>
			<div className="xdifl xjucoflen">
				<div onClick={add} className="x-circle-40 x-pointer x-child-center">
					<i className={ displayAddNewTask ? "fa fa-times" : "fa fa-plus" }></i>
				</div>
				<div className="x-circle-40 x-pointer xmale10 x-child-center" onClick={showOption}>
					<i className="fa fa-ellipsis-h"></i>
				</div>
			</div>
		</div>
		<div className="section-option xzin3 xpoab xto70 xri20 x-deep-shadow xbora10" ref={option}>
			<div className="settings-section-item xdigr" onClick={markAllTaksAsDone}>
				<div className="x-child-center">
					<i className="far fa-check-circle"></i>
				</div>
				<div>
					<p>Marquer les tâches comme terminées</p>
				</div>
			</div>
			<div className="settings-section-item xdigr" onClick={deleteSection}>
				<div className="x-child-center">
					<i className="fa fa-trash-alt"></i>
				</div>
				<div>
					<p>Supprimer cette section</p>
				</div>
			</div>
			<div className="settings-section-item xdigr" onClick={showOption}>
				<div className="x-child-center">
					<i className="fa fa-times"></i>
				</div>
				<div>
					<p>Fermer</p>
				</div>
			</div>
		</div>

		<div className="display-each-task xmato20">
			{ displayAddNewTask ? <CreateTaskOnProject sectionID={sectionID} addNow={addNow} cancel={add} /> : null }
			{ tasks.map((task) => (
				<EachTaskOnProjectVisualisation
					key={task.id}
					sectionName={children}
					projectName={projectName}
					data={task}
					user={user}
					deleteTask={deleteTask}
					markOneTaskAsDone={markOneTaskAsDone}
					duplicateTask={duplicateTask}
					sectionID={sectionID}
				/>
			))}
			<AddTaskIfEmpty onClick={add} cancel={displayAddNewTask} />
		</div>
		
	</div>
}



function AddTaskIfEmpty ({onClick, cancel}) {
	
	const click = () => {
		onClick();
	}
	
	return <div onClick={click} className="add-if-empty-task x-pointer xhe100 x-child-center xwi100per">
		<div className="x-circle-40 x-child-center">
			<i className="fa fa-plus xfosi20"></i>
		</div>
		<p className="xfosi14 x-low-emphasis">{ cancel ? "Annuler l'ajout" : 'Ajouter une tâche'  }</p>
	</div>
}


var ALL_TASK_OPTION_ID = [];
var ALL_TASK_OPTION = [];

var ALL_TASK_VISUAL_ID = [];
var ALL_TASK_VISUAL = [];

function EachTaskOnProjectVisualisation ({data, sectionName, projectName, user, deleteTask, duplicateTask, sectionID, markOneTaskAsDone}) {
	
	const [showOption, setShowOption] = React.useState(false);
	const [taskData, setTaskData] = React.useState(data);
	
	const titleFunc = (val) => {
		setTaskData((prev) => {
			return {...prev, name: val};
		})
	}

	const desFunc = (val) => {
		setTaskData((prev) => {
			return {...prev, description: val};
		});
	}

	const statusFunc = (val) => {
		setTaskData((prev) => {
			return {...prev, status: val};
		})
	}

	const syncComment = (val) => {
		setTaskData((p) => {
			return {...p, comments: val};
		})
	}
	

	const deleteThisTask = () => {
		deleteTask(taskData.id, sectionID);
		close();
	}

	const duplicateThisTask = () => {
		duplicateTask(taskData.id, sectionID);
		close();
	} 

	const markThisTaskAsDone = () => {
		markOneTaskAsDone(taskData.id, sectionID);
		setTaskData((prev) => {
			return {...prev, status: 'Terminé'};
		});
		close();
	}


	const rightClick = (e) => {
		e.preventDefault();
		
		allTaskOtpionDOM.style.display = "flex";
		let id = "tt-task-" + taskData.id;
		
		if (ALL_TASK_OPTION_ID.indexOf(id) != -1) {
			ALL_TASK_OPTION.forEach((box) => {
				if (box.id == id) {
					box.style.display = "block";
				} else {
					box.style.display = "none";
				}
			});
		} else {
			let newTaskOptionBox = __.createElement("div", id, "task-options xbora20 xpabo15");
			allTaskOtpionDOM.appendChild(newTaskOptionBox);
			
			ALL_TASK_OPTION_ID.push(id);
			ALL_TASK_OPTION.push(newTaskOptionBox);
			
			let root = ReactDOM.createRoot(newTaskOptionBox);
			root.render(<TaskOption 
				close={close}
				open={leftClick}
				del={deleteThisTask}
				duplicate={duplicateThisTask}
				markAsDone={markThisTaskAsDone}
			/>);
			
			ALL_TASK_OPTION.forEach((box) => {
				if (box.id == id) {
					box.style.display = "block";
				} else {
					box.style.display = "none";
				}
			});
			
		}
	}
	
	const leftClick = () => {
		allTaskVisualDOM.style.display = "flex";
		
		let id = "task-vis-id-" + taskData.id;
		if (ALL_TASK_VISUAL_ID.indexOf(id) != -1) {
			ALL_TASK_VISUAL.forEach((box) => {
				if (box.id == id) {
					box.style.display = "block";
				} else {
					box.style.display = "none";
				}
			});
		} else {
			let newTaskVisBox = __.createElement("div", id, "container-task-visual xpore x-deep-shadow xbora20");
			allTaskVisualDOM.appendChild(newTaskVisBox);
			
			ALL_TASK_VISUAL_ID.push(id);
			ALL_TASK_VISUAL.push(newTaskVisBox);
			
			let root = ReactDOM.createRoot(newTaskVisBox);
			root.render(<TaskVisualize 
				projectName={projectName} 
				editTitleFunc={titleFunc}
				auth_user={user}
				editStatusFunc={statusFunc}
				changeCommentsFunc={syncComment}
				editDesFunc={desFunc}
				sectionName={sectionName}
				close={closeVis} 
				ndata={taskData} />);
			
			ALL_TASK_VISUAL.forEach((box) => {
				if (box.id == id) {
					box.style.display = "block";
				} else {
					box.style.display = "none";
				}
			});
			
		}
	}
	
	const close = () => {
		allTaskOtpionDOM.style.display = "none";
	}
	const closeVis = () => {
		allTaskVisualDOM.style.display = "none";
	}

	const getStatusClass = React.useMemo(() => {;
		if (taskData.status.trim().toLowerCase() == 'en attente') {
			return 'level task-en-attente'
		} else if (taskData.status.trim().toLowerCase() == "en cours") {
			return "level task-en-cours";
		} else if (taskData.status.trim().toLowerCase() == "terminé") {
			return "level task-termine";
		} else {
			return "level arret";
		}
	}, [taskData]);
	
	const getUserName = React.useMemo(() => {
		return data.user.lastName + " " + data.user.firstName;
	});
	
	
	return 	<div onContextMenu={rightClick} onClick={leftClick} className="each-task-to-display xovhi xpore xwi87per x-center xbora10">
		<div className="project-task-name xalitce xdigr">
			<div className="x-circle-30 x-child-center">
				<i className="fa fa-check"></i>
			</div>
			<p className="xfosi14 xfowebo">{taskData.name}</p>
		</div>
		
		<p className="xfosi13 xmato20" >{ taskData.description }</p>
		
		<p className="x-low-emphasis xfosi10 xmato10">{ taskData.comments.length } commentaire{ taskData.comments.length > 1 ? "s" : ""}</p>
		<div className="task-status xmato20">
			<div className={ getStatusClass }>
				<p>{ taskData.status }</p>
			</div>
		</div>
									
		<div className="people-project xmato20 xdifl xalitce">
			<div className="my-people">
				<XUserProfilePicture 
					name={getUserName} 
					width={35}
					fontSize={14}
					imageURL={data.user.photo} />
			</div>
			<p className="deadline xmale20 x-low-emphasis xfosi14 xfowebo">{ getUserName }</p>
		</div>
		<p className="xmato20 xfosi12 x-low-emphasis">{ getFormatDate(taskData.startDate) + " - " + getFormatDate(taskData.endDate) } <strong>({ taskData.deadline })</strong></p>
	</div>
}




function TaskVisualize ({ndata, changeCommentsFunc, editTitleFunc, editDesFunc, editStatusFunc, projectName, sectionName, close, auth_user}) {
	const [data, setData] = React.useState(ndata);
	const [comments, setComments] = React.useState(data.comments);
	
	const [allowEditTitle, setAllowEditTitle] = React.useState(false);
	const [allowEditDes, setAllowEditDes] = React.useState(false);
	
	
	const getFullName = React.useMemo(() => {
		return data.user.lastName + " " + data.user.firstName;
	}, [data]);
	
	const [commentValue, setCommentValue] = React.useState("");
	const [loadComment, setLoadComment] = React.useState(false);
	
	const getStatusClass = React.useMemo(() => {
		if (data.status.trim().toLowerCase() == 'en attente') {
			return "vis-level task-en-attente";
		} else if (data.status.trim().toLowerCase() == "en cours") {
			return "vis-level task-en-cours";
		} else if (data.status.trim().toLowerCase() == "terminé") {
			return "vis-level task-termine";
		} else {
			return "vis-level task-arret";
		}
	}, [data]);
	
	const btn = {
		width: "200px",
	}
	
	const handleStatusChange = (e) => {
		setData((prevData) => {
			return {...prevData, status: e.target.value }
		})
	}

	const handleNewComment = (e) => {
		setCommentValue(e.target.value);
	}
	
	const [load, setLoad] = React.useState(false);
	
	const disabledNewComment = React.useMemo(() => {
		if (commentValue.trim().length == 0) {
			return true;
		}
		return false;
	}, [commentValue]);
	
	const getOwner = React.useMemo(() => {
		if (data.user.id == auth_user.id && data.user.email == auth_user.email) {
			return true;
		} else {
			return false;
		}
	}, []);
	
	const requestComment = async function () {
		let url = '/post_comment/';

		let data_to_send = {
			csrfmiddlewaretoken: PAGE_TOKEN,
			id: data.id,
			value: commentValue,
		}

		let formData = new FormData();

		Object.entries(data_to_send).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			setComments((prev) => {
				return [...prev, req.data];
			});
			setCommentValue("");
			setLoadComment(false);
		}
	}
	
	React.useEffect(() => {
		changeCommentsFunc(comments);
	}, [comments]);
	
	const sendNewComment = () => {
		setLoadComment(true);
		requestComment();
	}
	
	const editTitle = () => {
		if (getOwner) {
			setAllowEditTitle(true);
		}
	}

	const editDes = () => {
		if (getOwner) {
			setAllowEditDes(true);
		}
	}
	
	const [loadChangeTitle, setLoadChangeTitle] = React.useState(false);
	const [loadChangeDes, setLoadChangeDes] = React.useState(false);
	
	
	const [newTitle, setNewTitle] = React.useState(data.name);
	const [newDes, setNewDes] = React.useState(data.description);
	
	const handleChangeNewTitle = (e) => {
		setNewTitle(e.target.value);
	}
	
	const handleChangeNewDes = (e) => {
		setNewDes(e.target.value);
	}
	

	const request = async function (type) {
		
		let data_to_send = null;
		let url;
		let formData = new FormData();

		formData.append('csrfmiddlewaretoken', PAGE_TOKEN);

		if (type == 'title') {
			url = '/update_task_name/';
			data_to_send = {
				id: data.id,
				title: newTitle,
			}
		} else if (type == 'des') {
			url = '/update_task_des/';

			data_to_send = {
				id: data.id,
				des: newDes,
			}
		} else if (type == "status") {
			url = '/update_task_status/';

			data_to_send = {
				id: data.id,
				status: data.status,
			}
		}

		Object.entries(data_to_send).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			if (type == 'title') {
				setLoadChangeTitle(true);
				setData((prev) => {
					return {...prev, name: newTitle};
				});
				editTitleFunc(newTitle);
				setAllowEditTitle(false);
			} else if (type == 'des') {
				setLoadChangeDes(true);
				setData((prev) => {
					return {...prev, description: newDes};
				});
				editDesFunc(newDes);
				setAllowEditDes(false);
			} else if (type == 'status') {
				setLoadStatus(true);
				editStatusFunc(data.status);
				setLoadStatus(false);
			}
		}
		
	}


	const validChangeTitle = () => {
		setLoadChangeTitle(true);
		request('title');
	}
	
	const validChangeDes = () => {
		setLoadChangeDes(true);
		request('des');
	}
	
	const closeChangeTitle = () => {
		setAllowEditTitle(false);
	}
		
	const closeChangeDes = () => {
		setAllowEditDes(false);
	}
	
	const disabledTitleChange = React.useMemo(() => {
		if (newTitle.trim().length == 0) {
			return true;
		}
		return false;
	}, [newTitle]);
	
	const disabledDesChange = React.useMemo(() => {
		if (newDes.trim().length == 0) {
			return true;
		}
		return false;
	}, [newTitle]);
	
	const [loadStatus, setLoadStatus] = React.useState(false);
	
	
	const changeStatus = () => {
		setLoadStatus(true);
		request('status');
	}
	
	return <React.Fragment>
		<div className="box-container x-fill-parent xpore xovau">
				
			<div className="change-task-title xwi90per xalitce xdigr x-center ">
				{ allowEditTitle ? <input type="text" placeholder="Editer le titre" className="xfosi25 xfowebo" value={newTitle} onChange={handleChangeNewTitle} /> :
				
				<p className="xfosi25 xfowebo">{ data.name }</p> }
				
				<div onClick={editTitle} className="x-circle-50 x-child-center x-pointer x-black-01">
					<i className={ getOwner ? "fa fa-pen" : "fa fa-lock" }></i>
				</div>
			</div>
			
			{ allowEditTitle ? 
			<div className="xdifl xalitce xmato20 xwi80per">
				<button onClick={closeChangeTitle} className="x-low-emphasis xmale20 xmari20">Annuler</button>
				<XButtonLoadable
					br={30}
					disabled={disabledTitleChange}
					onClickFunc={validChangeTitle}
					load={loadChangeTitle}
					>Changer</XButtonLoadable> 
			</div> : null }
			
			
			<div className="xmato25 change-task-description xwi90per x-center xdigr">
				{ allowEditDes ? 
				<textarea value={newDes} className="edit-task-des xlihe3" onChange={handleChangeNewDes}></textarea> : 
				<p className="xfosi15 xlihe3 xfowebo xmato7">{ data.description } </p>
				}
				<div onClick={editDes} className="x-circle-50 x-pointer x-child-center x-black-01">
					<i className={ getOwner ? "fa fa-pen" : "fa fa-lock" }></i>
				</div>
			</div>
			
			{ allowEditDes ? 
			<div className="xdifl xalitce xmato20 xwi80per">
				<button onClick={closeChangeDes} className="x-low-emphasis xmale20 xmari20">Annuler</button>
				<XButtonLoadable
					br={30}
					disabled={disabledDesChange}
					onClickFunc={validChangeDes}
					load={loadChangeDes}
					>Changer</XButtonLoadable>
			</div> : null }
			
			
			<div className="task-of-user xmale20 xmato30 xdifl xalitce">
				<p className="xfosi15 xmari20 ">Tâche de</p>
				<XUserProfilePicture
					width={35}
					fontSize={13}
					imageURL={data.user.photo}
					name={getFullName}
				/>
				<p className="xmale10 xfosi15 xfowebo">{ getFullName }</p>
			</div>
				
			<div className="dead-stat xmale20  xmato20 xdifl xalitce">
				<p className="x-low-emphasis xfosi13 xmari10">[{ getFormatDate(data.startDate) } - { getFormatDate(data.endDate) }] <strong>({ data.deadline })</strong></p>
				<p className={getStatusClass}>{ data.status }</p>
			</div>
				
			{ getOwner ? 
			<div className="change-status xdifl xalitce xmato20 xmale20">
				<p className="xfowebo">Changer le status</p>
					
				<select value={data.status} onChange={handleStatusChange} className="x-deep-shadow xmari10 xmale20">
					<option value="En attente">En attente</option>
					<option value="En cours">En cours</option>
					<option value="Arret">Arret</option>
					<option value="Terminé">Terminé</option>
				</select>
				<XButtonLoadable
					type="icon"
					onClickFunc={changeStatus}
					load={loadStatus}
					icon="fa fa-save"
					/>
			</div> : null }
				
			<div className="home-pro xmato30 xmabo20 xmale20">
				<p className="xfosi15 xmabo10">Projet: <strong>{ projectName }</strong></p>
				<p className="xfosi15">Section: <strong>{ sectionName }</strong></p>
			</div>
				
			<div className="xmale20 xmato20">
				<textarea value={commentValue} onChange={handleNewComment} className="x-center new-comment xmabo10 xlihe4 xbora10" placeholder="Commenter en tant que Niro Henderson"></textarea>
				<XButtonLoadable
					br={30}
					disabled={disabledNewComment}
					load={loadComment}
					onClickFunc={sendNewComment}
					>Commenter</XButtonLoadable>
			</div>
			
				
			<div className=" xmale20 xmato20 all-task-comment xmabo100">
				<p className="xfosi20 xfowebo">Tous les Commentaire</p>
					
				<div className="all-comments">
					{ comments.map((com) => (
						<EachTaskComment key={com.id} com={com} />
					))}
				</div>
			</div>

		</div>
							
		<div className="close-and-save-change xpoab xhe60 xdigr xalitce">
			<div onClick={close} className="x-child-center xhe50 x-pointer">
				<button className="x-low-emphasis xfowebo x-pointer">Fermer</button>
			</div>
		</div>
	</React.Fragment>
}

function EachTaskComment ({com}) {
	return 	<div className="each-comment xwi90per x-bd-thin x-bd-bottom">
		<div className="xdifl xalitce">
			<XUserProfilePicture 
				imageURL={com.user.photo}
				name={ com.user.lastName }
				fontSize={15}
				width={40}
				/>
			<p className="xmale15 xfosi15 xfowebo">{ com.user.lastName } { com.user.firstName }</p>
		</div>
							
		<p className="x-low-emphasis xlihe3 xmato10 xfosi13">{ com.comment }</p>
		<p className="xmato4 x-low-emphasis xfosi10">{ getFormatDateTime(com.date) }</p>
	</div>
}



function TaskOption ({close, open, del, markAsDone, duplicate}) {
	return <React.Fragment>
		<p className="xmale10 xfosi20 xmato10 xfowebo xmabo20">Options</p>
		<div onClick={duplicate} className="each-task-option xmabo10 x-pointer xalitce xdigr x-center">
			<div className="x-child-center x-circle-40 x-black-02">
				<i className="far fa-copy"></i>
			</div>
			<div>
				<p className="xfowebo">Dupliquer</p>
			</div>
		</div>
			
		<div onClick={markAsDone} className="each-task-option x-pointer xmabo10 xalitce xdigr x-center">
			<div className="x-child-center x-circle-40 x-black-02">
				<i className="fa fa-check"></i>
			</div>
			<div>
				<p className="xfowebo">Marquer comme terminé</p>
			</div>
		</div>
		
		<div className="each-task-option x-pointer xmabo10 xalitce xdigr x-center" onClick={open}>
			<div className="x-child-center x-circle-40 x-black-02">
				<i className="far fa-eye"></i>
			</div>
			<div>
				<p className="xfowebo">Voir le detail</p>
			</div>
		</div>
		
		<div onClick={del} className="each-task-option x-pointer xmabo10 xalitce xdigr x-center">
			<div className="x-child-center x-circle-40 x-black-02">
				<i className="fa fa-trash-alt"></i>
			</div>
			<div>
				<p className="xfowebo">Supprimer</p>
			</div>
		</div>
		
		<div onClick={close} className="each-task-option x-pointer xmabo10 xalitce xdigr x-center">
			<div className="x-child-center x-circle-40 x-black-02">
				<i className="fa fa-times"></i>
			</div>
			<div>
				<p className="xfowebo">Fermer</p>
			</div>
		</div>
	</React.Fragment>
	
}


function InviteToJoinProject ({data, close}) {

    const [project, setProject] = React.useState(data);

    const [projectValue, setProjectValue] = React.useState(project.length > 0 ? project[0].id : 'null');
    
    const [value, setValue] = React.useState("");
	
	const [load, setLoad] = React.useState(false);

    const handleChange = (e) => {
		setValue(e.target.value);
	}

    

    const disabled = React.useMemo(() => {
        if (projectValue == 'null') {
            return true;
        } else {
            if (value.trim().length == 0) {
                return true;
            } else {
                let error = false;
                let val = value.trim();
                let allEmails = val.split(" ");
                allEmails.forEach((email) => {
                    if (!__.testEmail(email)) {
                        error = true;
                    }
                })
                return error;
            }
        }
		
	}, [value, projectValue]);

	const requestInviteThem = async function () {
		let url = '/invite_user_into/';

		let to_send = {
			values: value,
			id: projectValue,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();
		
		Object.entries(to_send).forEach(([key, val]) => {
			formData.append(key, val);
		})

		let req = await __.layoutRequest.post(url, formData, 'json')

		if (req.isSuccess) {
			let message = "Vous voulez ajouter " + req.data.emails.length + " utilisateur dans ce projet. " + req.data.not_found.length + ' utilisateur non trouvé, ' + req.data.added.length + ' utilisateur ajouté. Merci pour votre confiance';
			__.xAlert('Notez que', message, 'success');

		} else {
			__.xAlert('Connecion erreur', 'Verifiez votre connection et essayez plus tard', 'danger');
		}
		setLoad(false);
	}
	
	const addThem = () => {
		setLoad(true);
		requestInviteThem();
	}
    

    const handleProjectChange = (e) => {
        setProjectValue(e.target.value);
    }


    return <div className="invite-team-to-join-project xpore x-deep-shadow">
        <div className="x-child-center x-pointer x-circle-45 x-black-02 xpoab xto10 xri10" onClick={close}>
            <i className="fa fa-times"></i>
        </div>

        <div className="container-invite-to-join xpa30">
            <p className="xfosi20 xfowebo">Invite des coéquipier</p>

            <p className="x-low-emphasis xmato10 xfosi13 xfowebo xmabo20">Pour inviter des personnes, séparer l'addresse email par des espaces.</p>
            
            <p className="xfosi15 xfowebo xmabo10">Selectionner le projet:</p>
            <select onChange={handleProjectChange} value={projectValue} className="x-pointer x-shadow xbora10">
                <option value='null'>---</option>
                { project.map((pro) => (
                    <option key={pro.id} value={pro.id}>{pro.name}</option>
                ))}
            </select>
            
            <textarea value={value} onChange={handleChange} className="xfowebo xmabo20 xfosi12 xlihe5" placeholder="ex: example1@domaine.com example2@domaine.com" ></textarea>
            <XButtonLoadable
                style={{
                    width: '100%',
                    height: '48px'
                }}
                disabled={disabled}
                load={load}
                br={30}
				onClickFunc={addThem}
                center={true}
                >Inviter</XButtonLoadable>
        </div>

    </div>
}



function InviteForProject ({close, added, projectName, projectID}) {
	
	const style = {
		width: "250px",
		height: "48px",
	}
	
	const [value, setValue] = React.useState("");
	
	const [load, setLoad] = React.useState(false);
	
	const handleChange = (e) => {
		setValue(e.target.value);
	}
	
	const disabled = React.useMemo(() => {
		if (value.trim().length == 0) {
			return true;
		} else {
			let error = false;
			let val = value.trim();
			let allEmails = val.split(" ");
			allEmails.forEach((email) => {
				if (!__.testEmail(email)) {
					error = true;
				}
			})
			return error;
		}
	}, [value]);
	
	const request = async function () {
		let formData = new FormData();

		let values = {
			'emails': value.trim(),
			'id': projectID,
			'csrfmiddlewaretoken': PAGE_TOKEN,
		}

		Object.entries(values).forEach(([key, val]) => {
			formData.append(key, val);
		});

		let url = '/invite_user_to_join_project/';

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			let message = "Vous voulez ajouter " + req.data.emails.length + " utilisateur dans ce projet. " + req.data.not_found.length + ' utilisateur non trouvé, ' + req.data.added.length + ' utilisateur ajouté. Merci pour votre confiance';
			__.xAlert('Notez que', message, 'success');

			req.data.users.forEach((us) => {
				added(us);
			});

			setLoad(false);
			setValue('');
		}
	}
	
	
	const addUser = () => {
		setLoad(true);
		request();
	}
	
	
	return <React.Fragment>
		<p className="xfosi25 xlihe4 inv-tt xfowebo">Inviter des collaborateurs pour joindre le projet <strong>{ projectName }</strong></p>
		<p className="x-low-emphasis xfosi13 xmato7 xmabo20">Pour inviter des personnes, séparer l'email par des espaces.</p>
			
		<textarea placeholder="example1@domaine.com example2@domaine.com" value={value} onChange={handleChange}></textarea>
		
		<p className="xfosi13 xmato10 xlihe3 x-low-emphasis">Les utilisateurs invités a le droit d'ajouter sa propre tâche avec ses modifications; ils peuvent commenter aussi la tâche de quelqun mais pas à modifier l'attribut du tache des autre.</p>
		
		<div className="invite-or-cancel xmato20 xalitce xdigr">
			<div className="x-child-center x-pointer" onClick={close}>
				<button className="x-pointer">Annuler</button>
			</div>
			
			<XButtonLoadable
				style={style}
				onClickFunc={addUser}
				br={30}
				load={load}
				disabled={disabled}
				>Ajouter</XButtonLoadable>
		</div>
		
	</React.Fragment>
}

const allInviteForProjectDOM = document.querySelector("#all-invite-for-project");


const ALL_INVITE_FOR_PROJECT = [];
const ALL_INVITE_FOR_PROJECT_ID = [];


function ProjectEdit ({name, photo, editFunc, clientInfo, projectID}) {

	const [validName, setValidName] = React.useState(name);
	
	const [image, setImage] = React.useState(photo);
	const [names, setNames] = React.useState(name);
	
	const [load, setLoad] = React.useState(false);
	const [loadClientRequest, setLoadClienRequest] = React.useState(false);

	const  [profileTouched, setProfileTouched] = React.useState(false);


	const [client, setClient] = React.useState(clientInfo);

	const handleClientName = function (val) {
		setClient((recent) => {
			return {...recent, name: val}
		});
	}
	
	const handleClientEmail = function (val) {
		setClient((recent) => {
			return {...recent, email: val}
		});
	}

	const handleClientNumber = function (val) {
		setClient((recent) => {
			return {...recent, number: val}
		});
	}

	const handleClientAddress = function (val) {
		setClient((recent) => {
			return {...recent, address: val}
		});
	}

	const select = (e) => {
		input.current.click();
	}
	
	const input = React.useRef(null);
	
	const change = (e) => {
		setImage(e.target.files[0]);
		setProfileTouched(true);
	}
	
	const nameChange = (val) => {
		setNames(val);
	}
	
	const style = {
		width: '300px',
		height: '50px',
	}
	
	const disabled = React.useMemo(() => {
		if (names.length >= 2) {
			return false;
		}
		return true;
	}, [image, names]);
	
	const request = async function () {

		let url = '/edit_project_attribute/';

		let newData = {
			id: projectID,
			photo: image,
			name: names,
			touched: profileTouched,
		}
		

		let form = new FormData();

		form.append('csrfmiddlewaretoken', PAGE_TOKEN);

		Object.entries(newData).forEach(([key, value]) => {
			form.append(key, value);
		});

		let req = await __.layoutRequest.post(url, form, 'json');

		if (req.isSuccess) {
			editFunc(newData);
			setLoad(false);
		}
	}
	
	
	const edit = () => {
		setLoad(true);
		request();
	}
	const requestClientInfoSaving = async function () {
		let url = '/edit_client_info/';

		let to_send = {
			id: projectID,
			name: client.name,
			email: client.email,
			address: client.address,
			number: client.number,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();

		Object.entries(to_send).forEach(([key, val]) => {
			formData.append(key, val);
		})
		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			setLoadClienRequest(false);
			__.xAlert('Informations du client', "Merci d'avoir mis à jour l'information de votre client dans cette projet.", "info");
		} else {
			setLoadClienRequest(false);
			__.xAlert('Error', "Ouups, verifier votre connection et essayez plus tard...", "danger");
		}
	}

	const saveClientInfo = () => {
		setLoadClienRequest(true);
		requestClientInfoSaving();
	}
	
	const disabledClientButton = React.useMemo(() => {
		if (client.name && client.email && client.name.trim().length > 2 && __.testEmail(client.email.trim()) && client.number) {
			return false;
		}
		return true;
	}, [client]);
	
	return <React.Fragment>
		<p className="xfosi20 xfowebo xmato20">Paramètres</p>
		<p className="x-low-emphasis xfosi12 xmato3">Cette sections contenant les informations de votre projet et le client lié à cette projet.</p>
		
		<div className="xdigr container-project-settings">
			<div className="project-settings">
				<div className="x-center xwi90per xmato30">
					<div className="x-square-250 x-child-center x-center">
						<XUserProfilePicture 
							imageURL={image}
							fontSize={40}
							width={200}
							name={validName}
						/>
					</div>
					
					<p onClick={select} className="xfosi13 xmabo20 xmato40 xtealce x-text-info x-pointer">Choisir une photo</p>
					
					<input type="file" onChange={change} className="x-square-0 xop_0" ref={input} accept=".jpg, .JPG, .jpeg, .JPEG, .png, .PNG" />
					
					<XField
						onChange={nameChange}
						center={true}
						value={names}
						>Nom du projet</XField>
					
					<div className="xwi100per xmato20">
						<XButtonLoadable
							load={load}
							center={true}
							br={30}
							onClickFunc={edit}
							disabled={disabled}
							style={style}
							>Editer</XButtonLoadable>
					</div>
				</div>
				
			</div>
			<div className="client-settings">
				<p className="xfosi16 xfowebo tt-settings">Informations du client</p>
				<p className="xfosi14 xfowebo xmabo15">Nom du client</p>
				<XField
					style={{
						width: '80%',
					}}
					value={client.name}
					onChange={handleClientName}
					>Nom du client</XField>

				<p className="xfosi14 xfowebo xmabo15 xmato15">Adresse email</p>
				<XField
					type="email"
					style={{
						width: '80%',
					}}
					value={client.email}
					onChange={handleClientEmail}
					>Adresse email</XField>
				<p className="xfosi14 xfowebo xmabo15 xmato15">Contact</p>
				<XField
					type="tel"
					style={{
						width: '80%',
					}}
					value={client.number}
					onChange={handleClientNumber}
					>Numero de téléphone</XField>
				<p className="xfosi14 xfowebo xmabo15 xmato15">Adresse (facultatif)</p>
				<XField
					style={{
						width: '80%',
					}}
					value={client.address}
					onChange={handleClientAddress}
					>Adresse</XField>

				<div className="xmato20">
					<XButtonLoadable
						style={{
							width: '80%',
						}}
						load={loadClientRequest}
						onClickFunc={saveClientInfo}
						disabled={disabledClientButton}
						>Ajouter</XButtonLoadable>
				</div>
				
			</div>
		</div>
		
	</React.Fragment>
}

function ProjectDashboard ({data}) {
	
	const [mychart, setMyChart] = React.useState(null);

	React.useEffect(() => {
		const {total, progression, success, encours, arret, attente} = getProgressionValue();
		let barID = "bar-for-project-" + data.id;
		
		setTimeout(() => {
			let id = "#project-chart-of-" + data.id;
			let body = document.body;

			let projectChartDOM = body.querySelector(id);

			if (projectChartDOM.getAttribute('inuse') != undefined) {
				mychart.data.datasets[0].data = [progression, data.sections.length, total.length, attente.length, success.length, encours.length, arret.length, data.members.length, data.notes.length, data.files.length];
				mychart.update();
			} else {
				projectChartDOM.setAttribute('inuse', 'true');
				const projectChart = body.querySelector(id).getContext('2d');

				setMyChart(new Chart(projectChart, {
					type: "line",
					data: {
						labels: ['Progression', 'Sections', 'Taches', 'En attente', 'Succees', 'En cours', 'Arret', 'Membre', 'Notes', 'Fichiers'],
						datasets: [
							{
								label: 'Visualisation du courbe du projet',
								data: [progression, data.sections.length, total.length, attente.length, success.length, encours.length, arret.length, data.members.length, data.notes.length, data.files.length],
								borderWidth: 4,
								borderColor: '#00B0FF',
							}
						]
					},
					options: {
						responsive: true,
						scales: {
							y: {
								min: 0,
								max: 100,
							}
						}
					}
				}));
			}
			__.updateUploadingProgress(barID, progression);
			
		}, 500);
	});
	
	const getProgressionValue = () => {
		let allTasks = [];
		let attenteTask = [];
		let successTasks = [];
		let enCoursTasks = [];
		let arretTasks = []; 

		data.sections.forEach((sec) => {
			sec.tasks.forEach((task) => {
				allTasks.push(task);
			})
		});

		allTasks.forEach((t) => {
			if (t.status == 'En attente') {
				attenteTask.push(t);
			} else if (t.status == 'Terminé') {
				successTasks.push(t);
			} else if (t.status == "En cours") {
				enCoursTasks.push(t);
			} else {
				arretTasks.push(t);
			}
		});

		let prog = allTasks.length == 0 ? 0 : ((successTasks.length / allTasks.length) * 100).toFixed(2);
		
		return {
			total: allTasks,
			progression: Number(prog),
			success: successTasks,
			encours: enCoursTasks,
			arret: arretTasks,
			attente: attenteTask,
		}
	}

	
	return <React.Fragment>
		<p className="xfosi25 xfowebo xmale20 xmato20">Dashboard du projet</p>
		<p className="x-low-emphasis xfosi14 xmato5 xmale20">Visualiser le projet en vue clair</p>

		<div className="present-chart xmato20 xmabo20 xdigr xwi90per x-center">
			<div className="project-chart">
				<canvas id={"project-chart-of-" + data.id}></canvas>
			</div>
			<div className="repport-chart">
				
				<p className="xfosi30 xmato10 xfowebo">Administrateur de ce project</p>
				<XUserList
					dataComplet={data.admin}
					name={data.admin.lastName + ' ' + data.admin.firstName}
					id={data.admin.email}
					imgSrc={data.admin.photo}
					></XUserList>
				<p className="xfosi25 xmato10 xfowebo">Membres ({data.members.length})</p>
				<p className="x-low-emphasis xfosi13 xmato5">Tous les membres dans ce projets</p>
				<div className="all-members-in-dash x-scroll-horizontal xwi100per">
					{ data.members.map((user, key) => (
						<div className="each-member-in-dashboard xbora20" key={key}>
							<div className="x-center xwi100per x-child-center">
								<XUserProfilePicture
									name={user.lastName + ' ' + user.firstName}
									imageURL={user.photo}
									fontSize={20}
									width={70}
								></XUserProfilePicture>
							</div>
							
							<p className="">{ user.lastName }</p>
						</div>
					))}
					
				</div>	
				<div className="xdifl xjucospev x-al-it-ce xmato20">
					<div className="xwi30per">
						<p className="xfosi26 xfowebo xtealce xmabo10">{ data.members.length }</p>
						<p className="xfosi12 x-low-emphasis xtealce">Membres</p>
					</div>

					<div className="xwi30per">
						<p className="xfosi26 xfowebo xtealce xmabo10">{ data.notes.length }</p>
						<p className="xfosi12 x-low-emphasis xtealce">Notes</p>
					</div>

					<div className="xwi30per">
						<p className="xfosi26 xfowebo xtealce xmabo10">{ data.files.length }</p>
						<p className="xfosi12 x-low-emphasis xtealce">Fichiers</p>
					</div>
				</div>
			</div>
		</div>
		
		

		<div className="xdigr project-db xwi95per x-center xmato50 xmabo50">
			<div className="progress-project xpore xasra1 x-child-center">
				<p className="xfosi40">{ getProgressionValue().progression }%</p>

				<div className="xpoab xto0 xle0">
					<XUploadingProgress
						id={"bar-for-project-" + data.id} 	
						color={"#00FFBF"}
						width={'250px'}
						weight={2}
					></XUploadingProgress>
				</div>
					
			</div>
			<div className="total-sections xpore x-child-center x-deep-shadow xbora10 x-deep-shadow xbora20">
				<p className="xfosi70 xfowebo xmabo20">{data.sections.length}</p>
				<div className="title-db-sec xpoab xwi100per xbo20 x-child-center">
					<p className="xfosi13 xfowebo">Sections</p>
				</div>
			</div>
			<div className="total-tasks x-deep-shadow xbora10 x-child-center x-deep-shadow xbora20 xpore">
				<p className="xfosi70 xfowebo xmabo20">{ getProgressionValue().total.length }</p>
				<div className="title-db-sec xpoab xwi100per xbo20 x-child-center">
					<p className="xfosi13 xfowebo">Taches</p>
				</div>
			</div>
			<div className="en-attente-tasks x-child-center xbora20 xpore">
				<p className="xfosi70 xfowebo xmabo20">{ getProgressionValue().attente.length }</p>
				<div className="title-db-sec xpoab xwi100per xbo20 x-child-center">
					<p className="xfosi13 xfowebo">Taches en attente</p>
				</div>
			</div>	
			<div className="success-tasks x-child-center xbora20 xpore">
				<p className="xfosi70 xfowebo xmabo20">{ getProgressionValue().success.length }</p>
				<div className="title-db-sec xpoab xwi100per xbo20 x-child-center">
					<p className="xfosi13 xfowebo">Taches terminée</p>
				</div>
			</div>
			<div className="en-cours-tasks x-child-center xbora20 xpore">
				<p className="xfosi70 xfowebo xmabo20">{ getProgressionValue().encours.length }</p>
				<div className="title-db-sec xpoab xwi100per xbo20 x-child-center">
					<p className="xfosi13 xfowebo">Taches en cours</p>
				</div>
			</div>
			<div className="arret-tasks x-child-center xbora20 xpore">
				<p className="xfosi70 xfowebo xmabo20">{ getProgressionValue().arret.length }</p>
				<div className="title-db-sec xpoab xwi100per xbo20 x-child-center">
					<p className="xfosi13 xfowebo">Taches arreté</p>
				</div>
			</div>
		</div>

	</React.Fragment>
}



function ProjectLoading ({data}) {
    return <React.Fragment>
        <div className="x-child-center xmato100 xmabo50 xwi100per">
            <XUserProfilePicture
                name={data.name}
                width={200}
                fontSize={40}
                imageURL={data.photo}
                ></XUserProfilePicture>
        </div>

        <p className="xfosi30 xfowebo xtealce">{ data.name }</p>
        <p className="x-low-emphasis xmato20 xtealce xfosi13 load-data-project">Chargement des données...</p>
    </React.Fragment>
}


function VisualiseProjectComponent ({modelData, user}) {
	
	const [defaultView, setDefaultView] = React.useState(8);
	const [data, setData] = React.useState(modelData);
	const [loadFirst, setLoadFirst] = React.useState(true);
	
	let section_socket = null;

	React.useEffect(() => {
		if (loadFirst == false) {
			section_socket = new WebSocket(
				'ws://' + window.location.host + '/ws/section_sync/' + data.id + '/'
			);

			section_socket.onopen = function(e) {}
			section_socket.onmessage = function (e) {
				let response = JSON.parse(e.data);
				console.log(response);
				setData((prev) => {
					return {...prev, sections: [...prev.sections, response]}
				})
			}

			section_socket.onclose = function(e) {
				console.error('connection closed');
			}

			return () => section_socket.close();
		}
	}, [loadFirst])

	const deleted = (id) => {
		setData((recent) => {
			let re = data.sections.filter((se) => se.id != id);
			return {...recent, sections: re};
		})
	}

	const markAllTaksAsDone = (id) => {
		let sec = data.sections.filter((se) => se.id == id)[0];
		
		sec.tasks.map((task) => task.status = 'Terminé');

		let newdata = {...data};


		newdata.sections.forEach((section) => {
			if (section.id == id) {
				section = sec;
			}
		});

		setData(newdata);
	}



	const requestData = async function () {
		let url = '/get_project_data/' + modelData.id + '/';

		let req = await __.layoutRequest.get(url, null, 'json');

		if (req.isSuccess) {
			setData(() => {
				return {...data, 
					sections: req.data.sections, 
					notes: req.data.notes,
					files: req.data.files,
					client: req.data.client,
					conversations: req.data.conversations,
				}
			});

			setLoadFirst(false);
			
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection et re-éssayez plus tard.", 'danger');
		}
	}

	React.useEffect(() => {
		requestData();
	}, []);



	const focusList = (e) => {
		setDefaultView(1);
	}

	const focusEdit = (e) => {
		setDefaultView(7);
	}

	const focusDashboard = (e) => {
		setDefaultView(8);
	}

	const focusBoard = (e) => {
		setDefaultView(2);
	}
	const focusCalendar = (e) => {
		setDefaultView(3);
	}
	const focusMessage = (e) => {
		setDefaultView(4);
	}
	const focusFiles = (e) => {
		setDefaultView(5);
	}
	const focusNotes = (e) => {
		setDefaultView(6);
	}
	
	
	const show = {
		display: "block",
	}
	const hide = {
		display: "none",
	}
	
	const addNewSection = (vals) => {
		setData((recent) => {
			return {...recent, sections: [...recent.sections, vals]};
		})
	}
	
	
	const closeInv = () => {
		allInviteForProjectDOM.style.display = "none";
	}
	
	const clickToInvite = () => {
		
		allInviteForProjectDOM.style.display = "flex";
		
		let idP = "invite-for-project-id" + data.id;
		
		if (ALL_INVITE_FOR_PROJECT_ID.indexOf(idP) != -1) {
			ALL_INVITE_FOR_PROJECT.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		} else {
			let newProjectInvite = __.createElement("div", idP, "invite-anyone-to-this-gp xbora5 x-deep-shadow");
			
			allInviteForProjectDOM.appendChild(newProjectInvite);
			
			ALL_INVITE_FOR_PROJECT.push(newProjectInvite);
			ALL_INVITE_FOR_PROJECT_ID.push(idP);
			
			let projectRender = ReactDOM.createRoot(newProjectInvite);
			projectRender.render(<InviteForProject
				close={closeInv}
				projectName={data.name}
				projectID={data.id}
				added={addColab}
			/>);
			
			ALL_INVITE_FOR_PROJECT.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		}
	}
	
	const addColab = (val) => {
		closeInv();
		setData((recent) => {
			return {...recent, members: [...recent.members, val] };
		});
	}
	
	const editFunc = (d) => {
		setData((recent) => {
			return {...recent, name: d.name, photo: d.photo};
		})
	}
	
	const addNow = (sectionID, values) => {
		let recent = {...data};
		
		recent.sections.forEach((sec) => {
			if (sec.id == sectionID) {
				sec.tasks.push(values);
			}
		});

		setData(recent);
	}

	const duplicateTask = (id, sectionID) => {
		duplicateRequest(id, sectionID);
	}

	const duplicateRequest = async function (id, sectionID) {
		let url = '/duplicate_task/';

		let to_send = {
			id: id,
			sectionID: sectionID,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();

		Object.entries(to_send).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			let d = {...data};
			d.sections.forEach((sec) => {
				if (sec.id == sectionID) {
					sec.tasks = [...sec.tasks, req.data];
				}
			});
			setData(d);
		}
	}

	const deleteRequest = async function (id, sectionID) {
		let url = '/delete_task/';

		let to_send = {
			id: id,
			sectionID: sectionID,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();

		Object.entries(to_send).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			let d = {...data};

			d.sections.forEach((sec) => {
				if (sec.id == sectionID) {
					let recent_tasks = sec.tasks.filter((ta) => ta.id != id);
					
					sec.tasks = recent_tasks;
				}
			});

			setData(d);
		}
	}
	
	const deleteTask = (id, sectionID) => {
		let d = {...data};

		let owner = false;

		d.sections.forEach((sec) => {
			if (sec.id == sectionID) {
				sec.tasks.forEach((t) => {
					if (t.id == id) {
						if (t.user.id == user.id) {
							owner = true;
						}
					}
				})
			}
		});
		
		if (owner) {
			deleteRequest(id, sectionID);
		} else {
			__.xAlert('Suppression non autorisé', "Vous ne pouvez pas supprimer cette tâche car ce n'est pas le votre.", "info");
		}
		
	}

	const markOneTaskAsDoneRequest = async function (id, sectionID) {
		let url = '/mark_one_task_as_done/';

		let to_send = {
			id: id,
			sectionID: sectionID,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();

		Object.entries(to_send).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			let d = {...data};

			d.sections.forEach((sec) => {
				if (sec.id == sectionID) {
					sec.tasks.forEach((t) => {
						if (t.id == id) {
							t.status = 'Terminé';
						}
					})
				}
			});
			setData(d);
		}
	}

	const markOneTaskAsDone = (id, sectionID) => {
		let d = {...data};

		let owner = false;
		let model_task;

		d.sections.forEach((sec) => {
			if (sec.id == sectionID) {
				sec.tasks.forEach((t) => {
					if (t.id == id) {
						if (t.user.id == user.id) {
							owner = true;
							model_task = t;
						}
					}
				})
			}
		});
		
		if (owner) {
			if (model_task.status == 'Terminé') {
				__.xAlert('Tâche déja terminée', "Cette tâches est déja terminée.", "info");
			}
			markOneTaskAsDoneRequest(id, sectionID);
		} else {
			__.xAlert('Accées non autorisé', "Vous ne pouvez pas marquer cette tâche comme términée car ce n'est pas le votre. Seule la propriétaire du tâche peut le faire.", "info");
		}
	}

	const requestDeleteProject = async function () {
		let url = '/delete_project/' + data.id + '/';

		let req = await __.layoutRequest.get(url, null, 'json');

		if (req.isSuccess) {
			switchMenu('home');
			let home_dim = __.dimension.getDimension("#slide-to-home");
			slideShow.style.left = home_dim.ol + 'px';
			slideShow.style.top = home_dim.ot + 'px';
			focusSlideFunc('home');
			mainPageLoadDOM.style.display = 'none';
			reload_me.click();
		}
	}

	const [confirmDelete, setConfirmDelete] = React.useState(false);

	const deleteProject = () => {
		setConfirmDelete((prev) => {
			return !(prev);
		});
	}
	

	const confirmed = () => {
		mainPageLoadDOM.style.display = 'flex';
		requestDeleteProject();
	}

	const cancelDelete = () => {
		setConfirmDelete((prev) => {
			return !(prev);
		});
	}


	const deleteAlertRef = React.useRef(null);


	return <React.Fragment>
		{ loadFirst ? <ProjectLoading data={data} /> :
		<React.Fragment>
			<div className="header-project xdigr xalitce xpore">
				<div className="x-square-60 x-child-center">
					<XUserProfilePicture 
						name={data.name}
						width={60}
						fontSize={15}
						imageURL={ data.photo }
					/>
				</div>
				<div className="xmale5" >
					<p className="xfowebo xfosi18 xmabo2">{data.name}</p>
					<p className="xfosi12 xfowebo">Crée par { data.admin.lastName } { data.admin.firstName }</p>
					<p className="x-low-emphasis xfosi10 xmato2">{ data.members.length + 1 } membre{ (data.members.length) + 1 ? 's' : '' }</p>
				</div>
				<div className="project-coworkers xdifl xjucoflen">
					<XButton
						onClickFunc={clickToInvite}
						>Inviter</XButton>
					{ data.admin.id == user.id ?
					<div className="x-child-center x-square-45 xbora15 xmale20 delete-pro-button x-pointer" onClick={deleteProject}>
						<i className="far fa-trash-alt"></i>
					</div> : null }
					<div className='xmale20'></div>
				</div>
				
				{ confirmDelete ?
				<div className="delete-alert xpoab xri30 xto70 x-shadow xpa15">
					<p className='xfosi17 xfowebo xmato10'>Etez vous sûr de supprimer ce projet?</p>
					<p className='x-low-emphasis xmato10 xfosi12 xlihe4'>Si vous voulez bien supprimer ce projet, notez bien que tous les object liés à ce projet (notes, fichier, objectif, portefeuille, rapport, conversation, facture, etc)
						sont tous supprimé automatiquement avec le projet.
					</p>
					<p className='x-low-emphasis xmato10 xfosi12 xlihe4'>Pensez alors de télécharger les données importantes dans le projet car il n'y pas de moyen à
						recupérer les données apres le suppression.	
					</p>
					<p className='x-low-emphasis xmato10 xfosi12 xlihe4'>La page va s'actuliaser apres le suppression.
					</p>

					<div className="choice xdigr xmato20">
						<div className='x-pointer xhe45 xbora30 x-child-center' onClick={cancelDelete}>
							<p className='xfosi12 xfowebo'>Annuler</p>
						</div>
						<div className='x-pointer xhe45 xbora30 x-child-center' onClick={confirmed}>
							<p className='xfosi12 xfowebo'>Supprimer quand même</p>
						</div>
					</div>
				</div> : null }
			</div>
						
			<div className="all-project-menu x-bd-bottom x-bd-thin xdifl xalitce xmato20">

				<div onClick={focusDashboard} className={ defaultView == 8 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" }>
					<i className="fa fa-home"></i>
					<p className="xmale5">Dashboard</p>
				</div>

				<div onClick={focusList} className={ defaultView == 1 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" }>
					<i className="fa fa-list-ul"></i>
					<p className="xmale5">Liste</p>
				</div>		
				
													
				<div onClick={focusBoard} className={ defaultView == 2 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" } >
					<i className="fa fa-chalkboard"></i>
					<p className="xmale5">Boards</p>
				</div>
													
													
				<div onClick={focusCalendar} className={ defaultView == 3 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" }>
					<i className="fa fa-calendar"></i>
					<p className="xmale5">Calendrier</p>
				</div>
				
													
				<div onClick={focusMessage} className={ defaultView == 4 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" }>
					<i className="far fa-comment"></i>
					<p className="xmale5">Messages</p>
				</div>
							
				<div onClick={focusFiles} className={ defaultView == 5 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" }>
					<i className="far fa-file"></i>
					<p className="xmale5">Fichiers</p>
				</div>
				
				<div onClick={focusNotes} className={ defaultView == 6 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" }>
					<i className="fa fa-book"></i>
					<p className="xmale5">Notes</p>
				</div>

				{ data.admin.id == user.id ? 
				<div onClick={focusEdit} className={ defaultView == 7 ? "each-project-menu xalitce xdifl active x-pointer" : "each-project-menu xalitce xdifl x-pointer" }>
					<i className="fa fa-cog"></i>
					<p className="xmale5">Paramètre</p>
				</div> : null }
				
			</div>
			
			<div className="" style={ defaultView == 1 ? show : hide } >
				<ProjectList 
					data={data}
					addNow={addNow}
				/>
			</div>


			<div className="" style={ defaultView == 8 ? show : hide } >
				<ProjectDashboard data={data} />
			</div>
			
			<div className="" style={ defaultView == 7 ? show : hide }>
				<ProjectEdit 
					photo={data.photo}
					name={data.name}
					editFunc={editFunc}
					projectID={data.id}
					clientInfo={data.client}
				/>
			</div>
			
			<div className="" style={ defaultView == 2 ? show : hide } >
				<ProjectSectionTask 
					data={data} 
					projectID={data.id}
					addNow={addNow}
					admin={data.admin}
					markAllTaksAsDone={markAllTaksAsDone}
					deleted={deleted}
					user={user}
					markOneTaskAsDone={markOneTaskAsDone}
					duplicateTask={duplicateTask}
					deleteTask={deleteTask}
					addNewSection={addNewSection} />
			</div>

			<div className="" style={ defaultView == 3 ? show : hide } >
				<ProjectCalendar data={data} /> 
			</div>

			<div className="xwi100per" style={ defaultView == 4 ? show : hide } >
				<div className="xmato30 xbora15 xovhi x-center box-for-project-conversation-list">
					<ProjectMessage 
						allConvs={data.conversations}
						projectID={data.id}
						auth_user={user}
						projectAdmin={ data.admin }
						userSug={ data.members } />
				</div>
			</div>

			<div className="" style={ defaultView == 5 ? show : hide } >
				<ProjectFiles 
					data={data.files}
					auth_user={user}
					projectID={data.id} />
			</div>

			<div className="" style={ defaultView == 6 ? show : hide } >
				<ProjectNotes 
					id={data.id} 
					title={"Notes"}
					data={data.notes}
					personal={false}
					auth_user={user}
					des={"Les notes dans ce projet"} />
			</div>
		</React.Fragment>
	}
		
	
	</React.Fragment>
}

const VisualiseProject = React.memo(VisualiseProjectComponent);


function ProjectSectionTask ({data, addNow, admin, addNewSection, projectID, markOneTaskAsDone, user, deleted, markAllTaksAsDone, deleteTask, duplicateTask}) {
	return <React.Fragment>
		<div className="section-tasks xmato50 xbora5 x-scroll-horizontal">
			{data.sections.map((sec) => (
				<ProjectSection 
					key={sec.id}
					addNow={addNow}
					sectionID={sec.id}
					projectName={data.name}
					markDone={markAllTaksAsDone}
					user={user}
					deleteTask={deleteTask}
					duplicateTask={duplicateTask}
					projectID={projectID}
					deleted={deleted}
					admin={admin}
					markOneTaskAsDone={markOneTaskAsDone}
					tasks={sec.tasks}>{sec.name}</ProjectSection>
			))}
			
			<AddSection addNewSection={addNewSection} projectID={projectID} />
		</div>
	</React.Fragment>
}



function ProjectCalendar ({data}) {
	
	const [active, setActive] = React.useState(1);
	
	const show = {
		display: "block",
	}
	const hide = {
		display: "none",
	}
	
	const focusMonth = (e) => {
		setActive(1);
	}
	const focusWeek = (e) => {
		setActive(2);
	}
	
	
	return <React.Fragment>
		<p className="xfosi25 xmato20 xfowebo">Calendrier</p>
		<p className="x-low-emphasis xfosi12 xmato3">Obtenir une vue sous forme des Calendrier</p>
		<div className="nav-calendar xmabo20 xdifl xalitce xmato20">
			<div onClick={focusMonth} className={ active == 1 ? "active x-child-center xhe45 x-pointer" : "x-child-center xhe45 x-pointer" }>
				<p className="per-month">Par Mois</p>
			</div>
			<div onClick={focusWeek} className={ active == 2 ? "active x-child-center xhe45 x-pointer" : "x-child-center xhe45 x-pointer" }>
				<p className="per-month">Par Semaine</p>
			</div>
		</div>
		
		<div className="sec-for-month" style={ active == 1 ? show : hide }>
			<CalendarPerMonth data={data} />
		</div>
		
		<div className="sec-for-week" style={ active == 2 ? show : hide }>
			<CalendarPerWeek data={data} />
		</div>
		
	</React.Fragment>
}

const statusColors = {
    "en cours": '#00B6FF',
    "terminé": '#00FF65',
    "arrêté": '#FF0001',
	"en attente": "#767777",
};


function CalendarPerMonth ({data}) {
	
	const tasks = React.useMemo(() => {
		
		let to_return = [];

		data.sections.forEach((section) => {
			section.tasks.forEach((task) => {
				let t_stat = null;

				if (task.status == 'Terminé') {
					t_stat = 'terminé';
				} else {
					t_stat = task.status.toLowerCase();
				}
				let t = {
					id: task.id,
					name: task.name,
					startDate: task.startDate,
					endDate: task.endDate,
					status: t_stat,
				}
				to_return.push(t);
			})
		})

		return to_return;
	});

	const [currentDate, setCurrentDate] = React.useState(new Date());

    const formatMonthYear = (date) => {
        return date.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
    };

    const renderCalendar = () => {
        const monthDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Nombre de jours dans le mois
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // Premier jour du mois

        // Créer les cellules de jours
        const daysCells = [];
        for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
            daysCells.push(<div className="ch-day" key={`empty-${i}`}></div>);
        }

        for (let day = 1; day <= monthDays; day++) {
            const dayCell = (
                <div className="ch-day" key={day}>
                    <p className="xmato10 xmale10 xfowebo">{day}</p>
                    {tasks.map((task, index) => {
                        const taskStartDate = new Date(task.startDate);
                        const taskEndDate = new Date(task.endDate);
                        const currentTaskDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

                        // Si la date actuelle est dans la plage de la tâche
                        if (currentTaskDate >= taskStartDate && currentTaskDate <= taskEndDate) {
                            return (
                                <div
                                    key={index}
                                    className="ch-task"
                                    style={{ backgroundColor: statusColors[task.status] }}
                                >
                                    <p className="xfosi11 xfowebo">{task.name}</p>
                                    <p className="x-low-emphasis xfosi10 xmato2">{task.status}</p>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            );

            daysCells.push(dayCell);
        }

        return daysCells;
    };

    return (
        <div className="App">
            <div className="ch-header">
                <button className='x-pointer' onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                    Mois Précédent
                </button>
                <h2 id="current-month">{formatMonthYear(currentDate)}</h2>
                <button className='x-pointer' onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                    Mois Suivant
                </button>
            </div>
            <div className="ch-days-container">
                {renderCalendar()}
            </div>
        </div>
    );
}

function CalendarPerWeek ({data}) {
  const [currentWeek, setCurrentWeek] = React.useState(new Date());

  
  const tasks = React.useMemo(() => {
		
	let to_return = [];

	data.sections.forEach((section) => {
		section.tasks.forEach((task) => {
			let t_stat = null;

			if (task.status == 'Terminé') {
				t_stat = 'termine';
			} else if (task.status == 'Arret') {
				t_stat = 'arret';
			} else {
				t_stat = task.status.toLowerCase();
				t_stat = t_stat.split(' ');
				t_stat = t_stat.join('-');
			}

			let t = {
				id: task.id,
				name: task.name,
				startDate: task.startDate,
				endDate: task.endDate,
				deadline: task.deadline,
				status: t_stat,
				user: {
					id: task.user.id,
					lastName: task.user.lastName,
					firstName: task.user.firstName,
				}
			}
			to_return.push(t);
		})
	})

	return to_return;
});


  // Fonction pour obtenir les dates de la semaine
  const getWeekDates = (date) => {
    const startOfWeek = new Date(date.setDate(date.getDate() - date.getDay()));
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  // Formate la date en "Mois Jour"
  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const weekDates = getWeekDates(new Date(currentWeek));

  // Fonctions pour changer de semaine
  const nextWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));
  };

  const previousWeek = () => {
    setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));
  };

  return (
    <div className="ca2-calendar-container">
      <div className="ca2-controls">
        <button onClick={previousWeek}>Précédente</button>
        <h2>Semaine du {formatDate(weekDates[0])}</h2>
        <button onClick={nextWeek}>Suivant</button>
      </div>

      <div className="ca2-week">
        {weekDates.map((date, index) => (
          <DayColumn key={index} date={date} formatDate={formatDate} />
        ))}
      </div>

      <div id="ca2-tasks-container">
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} weekDates={weekDates} />
        ))}
      </div>
    </div>
  );
};

// Composant pour chaque jour de la semaine
const DayColumn = ({ date, formatDate }) => (
  <div className="ca2-day">{formatDate(date)}</div>
);

// Composant pour chaque ligne de tâche
function TaskRow ({ task, weekDates }) {
  const taskStartDate = new Date(task.startDate);
  const taskEndDate = new Date(task.endDate);
  const weekStartDate = weekDates[0];
  const weekEndDate = weekDates[6];

  const startIndex = taskStartDate >= weekStartDate
    ? weekDates.findIndex(date => date.toISOString().slice(0, 10) === task.startDate)
    : 0;
  
  const endIndex = taskEndDate <= weekEndDate
    ? weekDates.findIndex(date => date.toISOString().slice(0, 10) === task.endDate)
    : 6;

  if (startIndex !== -1 && endIndex !== -1) {
    const taskWidth = (endIndex - startIndex + 1) * 14;
    const taskMarginLeft = startIndex * 14; 

    return (
      <div className="ca2-task-row">
        <div
          className={`ca2-task ${task.status}`}
          style={{ width: `${taskWidth}%`, marginLeft: `${taskMarginLeft}%` }}
        >
          <p className="xmale10 xfosi15 x-co_wh xfowebo">{task.name}</p>
          <p className="xmale10 xmato5 x-co_wh xfosi10">Tâche de <strong className="x-co_wh">{ task.user.lastName } { task.user.firstName }</strong></p>
          <p className="x-co_wh xfosi10 xmato2 xmale10">Deadline: {task.deadline }js | Status: { task.status }</p>
        </div>
      </div>
    );
  }

  return null;
};



var ALL_CONV_ID = [];
var ALL_CONV = [];

var ALL_CREATE_CONV_ID = [];
var ALL_CREATE_CONV = [];

var ALL_START_CONV_ID = [];
var ALL_START_CONV = [];

var ALL_CREATE_GROUP_ID = [];
var ALL_CREATE_GROUP = [];


const allConvBoxDOM = document.querySelector("#all-conversations-box-opened");
const allCreateConvBoxDOM = document.querySelector("#all-create-conv-box");
const allStartConvBoxDOM = document.querySelector("#all-start-conv-box");
const allCreateGroupBoxDOM = document.querySelector("#all-create-group-conv");


const MESSAGES = [
	{
		id: "message-id-01",
		isMyMessage: false,
		status: "sent",
		text: "Bonjour",
		datetime: "2024-10-22 15:23:11",
		user: {
			id: "user-id-01",
			lastName: "Niro",
			firstName: "Henderson",
			photo: null,
		}
	},
	{
		id: "message-id-01",
		isMyMessage: true,
		status: "sent",
		text: "Bonjour, que puis-je Vous aider?",
		datetime: "2024-10-22 15:23:11",
		user: {
			id: "user-id-01",
			lastName: "Niro",
			firstName: "Henderson",
			photo: null,
		}
	},
]

var ALL_ROOT = [];

var messagePopDOM = document.querySelector('#message-pop-sound');
var newMessageDOM = document.querySelector('#new-message-sound');



function ProjectMessage ({allConvs, projectID, userSug, auth_user, projectAdmin}) {
	
	const getNameFunc = (data) => {
		if (data.type == "private") {
			return data.user.lastName + " " + data.user.firstName;
		} else {
			return data.name;
		}
	}
	
	const create_conv_url = '/create_conversation/';

	const [allConv, setAllConv] = React.useState([]);
	

	const notifNewMessage = () => {
		newMessageDOM.play();
	}

	const notifMessagePop = () => {
		messagePopDOM.play();
	}


	const removeThisRoom = (c) => {
		setAllConv((recent) => {
			let arc = [...recent];
			return arc.filter((f) => f.id != c.id);
		})
	}


	let socket = null;

	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/sync_conversation/' + projectID + '/' 
		)

		socket.onclose = function(e) {}

		socket.onopen = function(e) {}

		socket.onmessage = function(e) {
			let obj = JSON.parse(e.data);

			if (Array.isArray(obj)) {
				setAllConv(obj);
			} else {
				setAllConv((prev) => {
					let focus_conv = prev.find((conv) => conv.crypted_id == obj.crypted_id);
					if (focus_conv == undefined) {
						return [...prev, obj]
					} else {
						let prev_conv = prev.filter((conv) => conv.crypted_id != focus_conv.crypted_id);
						prev_conv = [...prev_conv, obj];
						return prev_conv;
					}
				});
			}
		}
		return () => socket.close()
	}, []);

	
	const close = () => {
		allConvBoxDOM.style.display = "none";
	}
	
	const closeCreateGroup = () => {
		allCreateGroupBoxDOM.style.display = "none";
	}
	
	
	const getUserName = (data) => {
		return data.lastName + " " + data.firstName;
	}
	
	const closeStart = () => {
		allStartConvBoxDOM.style.display = "none";
	}
	
	const created = (val) => {
		allCreateGroupBoxDOM.style.display = "none";
		setAllConv((prev) => {
			return [...prev, val];
		});
	}
	
	const getConversationDate = (conversation) => {
	    if (conversation.type == 'group' && conversation.empty) {
	      return conversation.datetime;
	    } else if (conversation.type == 'private' && conversation.lastMessage) {
	      return conversation.lastMessage.datetime;
	    } else if (conversation.lastMessage) {
	      return conversation.lastMessage.datetime;
	    }
	    return null;
	};
	
	
	const sortedConv = allConv.sort((a, b) => {
		const dateA = new Date(getConversationDate(a));
    	const dateB = new Date(getConversationDate(b));
    	return dateB - dateA;
	});
	
	
	const createGroup = () => {
		allCreateConvBoxDOM.style.display = "none";
		
		setTimeout(() => {
			allCreateGroupBoxDOM.style.display = "flex";
				
			let idCG = "create-gp-conv-for-project" + projectID;
				
			if (ALL_CREATE_GROUP_ID.indexOf(idCG) != -1) {
				ALL_CREATE_GROUP.forEach((fi) => {
					if (fi.id == idCG) {
						fi.style.display = "block";
					} else {
						fi.style.display = "none";
					}
				});
			} else {
				let convBoxDOM = __.createElement("div", idCG, "create-gp-conv-for-project x-deep-shadow xbora10");
				allCreateGroupBoxDOM.appendChild(convBoxDOM);
					
				ALL_CREATE_GROUP.push(convBoxDOM);
				ALL_CREATE_GROUP_ID.push(idCG);
					
				let convBox = ReactDOM.createRoot(convBoxDOM);
				
				convBox.render(<XCreateGroupConv 
					users={userSug}
					projectID={projectID}
					close={closeCreateGroup}
					getName={getUserName}
					created={created}
					token={{csrfmiddlewaretoken: PAGE_TOKEN}}
				/>);
					
				ALL_CREATE_GROUP.forEach((n) => {
					if (n.id == idCG) {
						n.style.display = "block";
					} else {
						n.style.display = "none";
					}
				})
			}
				
		}, 1000);
	}
	
	const getNewConv = () => {
		allStartConvBoxDOM.style.display = "none";
	}
	
	const getConvs = React.useCallback(() => {
		return allConv;
	}, [allConv]);
	
	const getToken = function (user) {
		return {
			user_id: user.id,
			project_id: projectID,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}
	}
	
	const select = React.useCallback((data) => {
		allCreateConvBoxDOM.style.display = "none";
		
		let id = "p-" + projectID + "-conv-box-id-for-" + data.id;
		
		let alreadyIn = false;
		
		
		allConv.forEach((conv) => {
			if (conv.type == "private" && conv.user.id == data.id) {
				alreadyIn = true;
			}
		});
		
		
		if (alreadyIn) {
			setTimeout(() => {
				open(data);
			}, 200);
		} else {
			setTimeout(() => {
				allStartConvBoxDOM.style.display = "flex";
				
				let idE = "p-" + projectID + "-start-conv-id-with-" + data.id;
				
				if (ALL_START_CONV_ID.indexOf(idE) != -1) {
					ALL_START_CONV.forEach((fi) => {
						if (fi.id == idE) {
							fi.style.display = "block";
						} else {
							fi.style.display = "none";
						}
					});
				} else {
					let convBoxDOM = __.createElement("div", idE, "container-start-conv-box");
					allStartConvBoxDOM.appendChild(convBoxDOM);
					
					ALL_START_CONV.push(convBoxDOM);
					ALL_START_CONV_ID.push(idE);
					
					let convBox = ReactDOM.createRoot(convBoxDOM);
					let userData = {
						name: data.lastName + " " + data.firstName,
						id: data.email,
						realID: data.id,
						photo: data.photo,
						firstName: data.firstName,
						lastName: data.lastName,
					}
					
					convBox.render(<XStartConvBox
						close={closeStart}
						url={create_conv_url}
						token={ getToken(data) }
						getConversationJustCreated={getNewConv}
						user={userData}
					/>);
					
					ALL_START_CONV.forEach((n) => {
						if (n.id == idE) {
							n.style.display = "block";
						} else {
							n.style.display = "none";
						}
					})
				}
				
			}, 1000);
		}
	}, [allConv])
	
	const closeCreateGroupOrConv = () => {
		allCreateConvBoxDOM.style.display = 'none';
	}
	
	const createConv = () => {
		allCreateConvBoxDOM.style.display = "flex";
		
		let idF = "create-conv-box-for-project-" + projectID;
		

		if (ALL_CREATE_CONV_ID.indexOf(idF) != -1) {
			ALL_CREATE_CONV.forEach((fi) => {
				if (fi.id == idF) {
					fi.style.display = "block";
					userSug = [...userSug, projectAdmin];

					userSug = userSug.filter((user) => user.id != auth_user.id);
					

					let usersNotInConversations = userSug.filter(user => !getConvs().some(conv => conv.type == "private" && conv.user && conv.user.id == user.id));
					
					ALL_ROOT.forEach((root) => {
						if (root.id == idF) {
							root.root.render(<XDisplayUserToCreateConversation
							getName={getUserName}
							center={true}
							close={closeCreateGroupOrConv}
							userSug={usersNotInConversations}
							createGroupClick={createGroup}
							onSelectUser={select}
						/>);
						}
					});
					
				} else {
					fi.style.display = "none";
				}
			});
			
		} else {
			let convBoxDOM = __.createElement("div", idF, "each-container-conversation-box x-deep-shadow xbora20 xpore");
			allCreateConvBoxDOM.appendChild(convBoxDOM);
			
			ALL_CREATE_CONV.push(convBoxDOM);
			ALL_CREATE_CONV_ID.push(idF);
			
			let convBox = ReactDOM.createRoot(convBoxDOM);
			
			let newRoot = {
				id: idF,
				root: convBox,
			}
			ALL_ROOT.push(newRoot);
			
			userSug = [...userSug, projectAdmin];
			
			userSug = userSug.filter((user) => user.id != auth_user.id);
			
			let usersNotInConversations = userSug.filter((user) => !getConvs().some(conv => conv.type == "private" && conv.user && conv.user.id == user.id));
			
			convBox.render(<XDisplayUserToCreateConversation
				getName={getUserName}
				center={true}
				close={closeCreateGroupOrConv}
				userSug={usersNotInConversations}
				createGroupClick={createGroup}
				onSelectUser={select}
			/>);
			
			ALL_CREATE_CONV.forEach((n) => {
				if (n.id == idF) {
					n.style.display = "block";
				} else {
					n.style.display = "none";
				}
			})
		}
	}
	
	const makeSeenThisMessage = async function (conv) {
		
	}
 	
	const handleConversationClick = (clickedConversation) => {
	    if (!clickedConversation.empty && clickedConversation.lastMessage &&
	      !clickedConversation.lastMessage.isMyMessage && clickedConversation.lastMessage.status == "sent" 
	    ) {
	      
	      const updatedConversations = allConv.map((conversation) => {
	        if (conversation.id == clickedConversation.id) {
	          return {
	            ...conversation,
	            lastMessage: {
	              ...conversation.lastMessage,
	              status: "seen", 
	            },
	          };
	        }
	        return conversation;
	      });
	      setAllConv(updatedConversations);
	      makeSeenThisMessage(clickedConversation);
	    }
	};
	
	const sync = (convId, message) => {
		setAllConv((recent) => {
			recent.forEach((re) => {
				if (re.id == convId) {
					re.lastMessage = message;
					if (re.empty) {
						re.empty = false;
					}
				}
			})
			return [...recent];
		})
	}

	const visual = (data) => {
		fileMessageDOM.style.display = 'block';
		containerFileMessage.render(<VisualFileMessage data={data} />)
	}

	
	const open = (data) => {
		allConvBoxDOM.style.display = "flex";
		
		let idF = "p-" + projectID + "-conv-box-id-for-" + data.id;
		
		let convHeader = {
			status: "Online",
		};
		
		handleConversationClick(data);
		
		if (data.type == "private") {
			convHeader.name = data.user.lastName + " " + data.user.firstName;
			convHeader.img = data.user.photo;
		} else {
			convHeader.name = data.name;
			convHeader.img = data.photo;
		}
		
		if (ALL_CONV_ID.indexOf(idF) != -1) {
			ALL_CONV.forEach((fi) => {
				if (fi.id == idF) {
					fi.style.display = "block";
				} else {
					fi.style.display = "none";
				}
			});
		} else {
			let convBoxDOM = __.createElement("div", idF, "each-container-conversation-box x-deep-shadow xbora20 xpore");
			allConvBoxDOM.appendChild(convBoxDOM);
			
			ALL_CONV.push(convBoxDOM);
			ALL_CONV_ID.push(idF);
			
			let conversation_token = {
				crypted_id: data.crypted_id,
				csrfmiddlewaretoken: PAGE_TOKEN,
			}

			
			let convBox = ReactDOM.createRoot(convBoxDOM);
			convBox.render(<XOpenConversation
				header={convHeader}
				convID={data.id}
				element={convBoxDOM}
				removeThisRoom={removeThisRoom}
				parent={allConvBoxDOM}
				projectID={projectID}
				convCryptedID={data.crypted_id}
				conversationData={data}
				token={conversation_token}
				urlSending={'/send_message/'}
				close={close}
				visual={visual}
				messages={[]}
				sentSound={notifMessagePop}
				newMessageSound={notifNewMessage}
			/>);
			
			ALL_CONV.forEach((n) => {
				if (n.id == idF) {
					n.style.display = "block";
				} else {
					n.style.display = "none";
				}
			})
		}
	}
	
	return <React.Fragment>
		<XConversationList
			data={sortedConv}
			open={open}
			removeThisRoom={removeThisRoom}
			createConvURL={create_conv_url}
			createConvClick={createConv}
			getName={getNameFunc}
		/>
	</React.Fragment>
}


function ProjectList ({data, addNow}) {
  // Données préchargées
	
	const btnAddSectionStyle = {
		width: "140px"
	}
	
  return (
    <div className="ch-project-container">
    	<p className="xfosi25 xfowebo xmato25">Liste</p>
    	<p className="x-low-emphasis xfosi12 xmato3">Obtenir le vue de cette projet sous forme des listes</p>
        <div className="ch-sections-container xmabo20">
        {data.sections.map((section) => (
        	<EachSectionInProjectList 
				key={section.id} 
				name={section.name} 
				sectionID={section.id}
				addNow={addNow}
				tasks={section.tasks} />
        ))}
        </div>
    </div>
  );
};



function AddSectionInListForm ({getValues}) {
	const [name, setName] = React.useState("");
	const [load, setLoad] = React.useState(false);
	
	
	
	const getValue = (val) => {
		setName(val);
	}
	const btn = {
		height: "47px",
	}
	const field = {
		margin: "0px 10px 0px 0px",
		width: "300px",
	}
	
	const request = () => {
		setTimeout(() => {
			setLoad(false);
			getValues(name);
		}, 1000);
	}
	
	
	const send = () => {
		setLoad(true);
		request();
	}
	
	const disabled = React.useMemo(() => {
		if (name.trim().length > 0) {
			return false;
		}
		return true;
	}, [name]);
	
	
	return <React.Fragment>
		<p className="xfosi20 xfowebo xmabo5 xmale15">Nouvel section</p>
		<p className="x-low-emphasis xfosi11 xmabo10 xmale15" >Definie le nom d'une section</p>
		<div className="xdifl xalitce xmale15">
			<XField
				onChange={getValue}
				style={field}
				value={name}
				>Nom du section</XField> 
			<XButtonLoadable
				style={btn}
				disabled={disabled}
				load={load}
				br={30}
				onClickFunc={send}
				>Ajouter</XButtonLoadable>
		</div>
		
	</React.Fragment>
}



function EachSectionInProjectList ({tasks, name, addNow, sectionID}) {
	
	const btnAddSectionStyle = {
		width: "140px"
	}
	
	const [add, setAdd] = React.useState(false);

	const [values, setValues] = React.useState({
		name: '',
		endDate: '',
		startDate: '',
		description: '',
		id: sectionID,
		csrfmiddlewaretoken: PAGE_TOKEN,
	});

	const [load, setLoad] = React.useState(false);
	const handleName = (val) => {
		setValues((prev) => {
			return {...prev, name: val}
		})
	}
	const handleEnd = (val) => {
		setValues((prev) => {
			return {...prev, endDate: val}
		})
	}
	const handleStart = (val) => {
		setValues((prev) => {
			return {...prev, startDate: val}
		})
	}


	const handleDes = (val) => {
		setValues((prev) => {
			return {...prev, description: val}
		})
	}
	
	const switchCase = () => {
		setAdd((s) => !(s));
	}



	const validateDates = () => {
        const start = new Date(values.startDate);
        const end = new Date(values.endDate);
        if (end < start) {
            __.xAlert('Erreur', "La date de fin ne peut pas être antérieure à la date de début.", 'danger');
            return false;
        }
        return true;
    };


	const getDeadline = React.useMemo(() => {
		let end = new Date(values.endDate).getTime();
		let begin = new Date(values.startDate).getTime();

		let diffInMIll = end - begin;
		if (diffInMIll < 0) {
			return false;
		} else {
			diffInMIll = Math.abs(diffInMIll);
			let diff = Math.floor(diffInMIll / (1000 * 60 * 60 * 24))
			return diff;
		}

	}, [values.endDate, values.startDate, values]);

	const getStatus =  React.useMemo(() => {
		let today = new Date();
		today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
		today = new Date(today).getTime();

		let begin = new Date(values.startDate).getTime();
		
		if (today >= begin) {
			return 'En cours'
		} else {
			return 'En attente'
		}

	}, [values.endDate, values.startDate, values]);


	const disabled = React.useMemo(() => {
		if (values.name.trim().length > 1 && values.description.trim().length > 1 && values.startDate && values.endDate) {
			return false;
		}
		return true;
	}, [values]);

	const request = async function () {
		let url = '/add_task/';

		let formData = new FormData();

		formData.append('deadline', getDeadline);
		formData.append('status', getStatus);

		Object.entries(values).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			addNow(sectionID, req.data);
			setLoad(false);
			switchCase();
		} else {
			__.xAlert('Connection erreur', 'Verifier votre connection et re-éssayez plus tard.', 'danger');
			setLoad(false);
		}
	}

	const create = () => {
		if (!validateDates()) {
			return;
		}
		setLoad(true);
		request();
	}
	
	return  <div className="ch-section x-center x-deep-shadow">
        <h2>{name}</h2>

        <table className="ch-task-table xmabo20">
            <thead>
                <tr>
                  <th>Nom</th>
                  <th>Titulaire</th>
                  <th>Délai</th>
                  <th>Description</th>
                  <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, taskIndex) => (
                <tr key={taskIndex}>
                    <td>{task.name}</td>
                    <td>{ task.user.lastName } { task.user.firstName }</td>
                    <td>{task.deadline}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                </tr>
                ))}
            </tbody>
        </table>
		
		{ add ? 
		<div className='add-task-inline-box x-shadow'>
			<p className='xfosi20 xfowebo'>Nouvelle tâches</p>
			<p className='xfosi12 xfowebo x-low-emphasis xmato5'>Remplir tous les chmaps pour ajouter une nouvelle tâches</p>

			<div className="xdigr add-task-in-list-inline xmato20">
				<div>
					<XField
						style={{
							width: '93%',
							marginBottom: '20px'
						}}
						value={values.name}
						onChange={handleName}
						center={true}
					>Nom du taches</XField>
					<div className='xdifl xjucospev xalitce'>
						<XField
							type='date'
							style={{
								width: '45%'
							}}
							value={values.startDate}
							onChange={handleStart}
						></XField>
						<XField
							type='date'
							style={{
								width: '45%'
							}}
							value={values.endDate}
							onChange={handleEnd}
						></XField>
					</div>
				</div>
				<div>
					<XTextarea
						style={{
							width: '90%'
						}}
						value={values.description}
						onChange={handleDes}
						center={true}
					>Description du tâches</XTextarea>
				</div>
			</div> 
			<XButtonLoadable
				style={{
					width: '250px',
					marginLeft: '20px',
				}}
				load={load}
				disabled={disabled}
				onClickFunc={create}
				>Ajouter</XButtonLoadable>
		</div> : null }
		
		{ add == false ? <p className="xfosi12 x-text-info xmato10 x-pointer xfowebo" onClick={switchCase}>Ajouter une nouvelle tâches</p> :
		<p className="xfosi12 x-text-danger xmato10 x-pointer xfowebo" onClick={switchCase}>Annuler l'ajout</p> }
   </div>
}

function getTaskDate (date) {
	let year = date.getFullYear().toString();
	let month = (date.getMonth() + 1 ).toString();
	let day = date.getDate().toString();
	return year + "-" + month + "-" + day;
}



function AddSection ({addNewSection, projectID}) {
	
	const [value, setValue] = React.useState("");
	const [aboutToAdd, setAboutToAdd] = React.useState(false);
	const [load, setLoad] = React.useState(false);
	
	const handleChange = (e) => {
		setValue(e.target.value);
	}
	
	const disabled = React.useMemo(() => {
		if (value.trim().length >= 2) {
			return false;
		}
		return true;
	}, [value]);
	
	const activeAdd = () => {
		setAboutToAdd(true);
	}
	const turnAway = () => {
		setAboutToAdd(false);
	}
	
	const request = async function () {
		let url = '/add_section/';
		
		let obj = {
			name: value.trim(),
			id: projectID,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();


		Object.entries(obj).forEach(([key, value]) => {
			formData.append(key, value);
		})
		


		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			addNewSection(req.data);
			setLoad(false);
			setAboutToAdd(false);
			setValue("");
		} else {
			__.xAlert("Conneciton erreur", "Erreur lors ajout d'une nouvel section. Verifiez votre connection et ressayez plus tard. Merci beaucoup", 'danger');
			setLoad(false);
		}
	}
	
	const createSection= () => {
		setLoad(true);
		request();
	}
	
	return 	<div className="add-section x-deep-shadow">
		{ aboutToAdd ? 
			<div className="xwi100per add-section-form">
				<p className="xfosi25 xfowebo xmato10 xmabo20">Nouvel section</p>
				
				<input type="text" value={value} onChange={handleChange} placeholder="Nom du section" className="xfosi15 xfowebo xwi100per" />
				
				<div className="xdifl xwi100per xmato20 xalitce xhe60 two-method">
					<div className="cancel-add-section xwi50per xdifl x-pointer">
						<button onClick={turnAway} className="x-low-emphasis xfowebo x-pointer">Annuler</button>
					</div>
					<div className="valid-add-section xdifl xwi50per xjucoflen">
					
						<XButtonLoadable
							disabled={disabled}
							onClickFunc={createSection}
							load={load}
							className="x-pointer"
							>Ajouter</XButtonLoadable>
					</div>
				</div>
			</div> : 
		
			<div onClick={activeAdd} className="add-sec-title x-pointer xdifl xwi100per xalitce">
				<div className="x-circle-50 x-child-center">
					<i className="fa fa-plus"></i>
				</div>
				<p className="xmale10 xfowebo x-low-emphasis">Ajouter un section</p>
			</div>
		}
	</div>
}


function PeopleInHome ({peoples}) {
	
	const invite = () => {
		openInviteTeam();
	}
	return 	<div className="people xbora10 xpato25">
		<p className="title-people-home xfosi20 xfowebo xmale25">Collaborateurs</p>
							
		<div className="invite-people xmato20 xdigr xwi90per x-center">
		
			<div className="invite-btn xdigr xalitce x-pointer" onClick={invite}>
				<div className="x-circle-60 x-child-center">
					<i className="fa fa-plus"></i>
				</div>
				<p className="xfosi13 xfowebo">Inviter</p>
			</div>
			
			{peoples.map((people) => (
				<EachPeopleInHome data={people} key={people.id} />
			))}
		</div>
	</div>
}


function EachPeopleInHome ({data}) {
	
	return <div className="invited xdigr xalitce">
		<div className="x-circle-60 x-child-center">
			<XUserProfilePicture
				name={data.lastName}
				width={60}
				fontSize={20}
				imageURL={data.photo}
			></XUserProfilePicture>
		</div>
		<p className="xfosi13 xfowebo">{ __.getShortText((data.lastName + " " + data.firstName), 8) }</p>
	</div>
}


function ProjectHome ({data, user}) {
	
	const openAddPro = () => {
		openAddNewProject();
	}

	const [pros, setPros] = React.useState(data);

	let socket = null;


	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/sync_project_home/'
		)

		socket.onclose = function(e) {
			console.error('Connection close on project home sync');
		}

		socket.onopen = function (e) {}
		socket.onmessage = function (e) {
			let response = JSON.parse(e.data);
			if (response.action == 'new') {
				setPros((recent) => {
					return [...recent, response];
				});
			} else if (response.action == 'delete') {
				setPros((recent) => {
					let prev = [...recent];
					return prev.filter((f) => f.id != response.id);
				});
			}
		}
	})

	return 	<div className="projects-home xbora10 xpato25 xovau">
		<p className="title-project-home xfosi20 xfowebo xmale25">Projects</p>
							
		<div onClick={openAddPro} className="create-project xmato20 xalitce xwi90per x-center xdigr x-pointer">
			<div className="x-square-60 x-child-center xbora15">
				<i className="fa fa-plus"></i>
			</div>
			<p className="xfosi15 xfowebo">Créer un nouveau projet</p>
		</div>
		
		{ pros.map((project) => (
			<ExistingProject
				user={user}
				data={project} 
				key={project.id} />
		))}
		
	</div>
}

function ExistingProject ({data, user}) {

	const open = () => {
		focusSlideFunc('null');
		switchMenu("project-visualisation");
		
		let idP = "project-visual-id-" + data.id;
		if (ALL_PROJECT_OPENED_ID.indexOf(idP) != -1) {
			ALL_PROJECT_OPENED.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		} else {
			let newProjectSection = __.createElement("div", idP, "");
			
			projectVisualisationDOM.appendChild(newProjectSection);
			
			ALL_PROJECT_OPENED.push(newProjectSection);
			ALL_PROJECT_OPENED_ID.push(idP);
			let projectRender = ReactDOM.createRoot(newProjectSection);
			projectRender.render(<VisualiseProject 
				modelData={data}
				user={user}
			/>);
			
			ALL_PROJECT_OPENED.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		}
	}


	return 	<div className="existing-project xmato20 xalitce xwi90per x-center xdigr x-pointer" onClick={open}>
		<div className="x-square-60 x-child-center">
			<XUserProfilePicture
				name={data.name}
				fontSize={20}
				imageURL={data.photo}
				width={60}
				></XUserProfilePicture>
		</div>

		<div>
			<p className="xfosi15 xfowebo">{ data.name }</p>
			<p className="xfosi12 xmato3 x-low-emphasis">{ data.members.length + 1 } membre{ (data.members.length+ 1) > 1 ? 's' : ''}</p>
		</div>
	</div>
}


function MyTaskInHome ({data, user}) {
	const [filter, setFilter] = React.useState('tous');

	const values = [
		{
			val: 'tous',
			name: 'Tous',
		},
		{
			val: 'en attente',
			name: 'En attente',
		},
		{
			val: 'en cours',
			name: 'En cours',
		},
		{
			val: 'terminé',
			name: 'Terminé',
		},
		{
			val: 'arret',
			name: 'Arret',
		},
	]

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	}


	const dataDerive = React.useMemo(() => {
		let d = [];
		
		data.forEach((project) => {
			let pro = {};
			pro.name = project.name;
			pro.tasks = [];
			
			project.sections.forEach((section) => {
				section.tasks.forEach((task) => {
					if (task.user.id == user.id) {
						if (filter == 'tous') {
							
							pro.tasks.push({
								name: task.name,
								deadline: task.deadline,
								status: task.status,
								endDate: task.endDate,
								startDate: task.startDate,
							});
						} else {
							if (task.status.toLowerCase() == filter.toLowerCase()) {
								pro.tasks.push({
									name: task.name,
									deadline: task.deadline,
									endDate: task.endDate,
									status: task.status,
									startDate: task.startDate,
								});
							}
						}
					}
				});
			});
			d.push(pro);
		});
		return d;
	}, [filter]);
	
	const addTask = () => {
		openAddNewTask(); 
	}
	
	return <div className="my-task-home xwi100per xmato30 xpato20 xbora10 xovau">
		<div className="xdifl xmale20 xwi90per x-center x-bd-bottom x-bd-thin xpabo20">
			<div className="x-profile-pic x-square-40">
				<XUserProfilePicture
					name={user.lastName}
					imageURL={user.photo}
					fontSize={14}
					width={40}
				></XUserProfilePicture>
			</div>
			<div className="xmale15 xmato5">
				<div className="xdifl xmabo20">
					<p className=" xfosi20 xfowebo xmari10">Mes tâches dans mes projets</p>
					<i className="fa fa-lock xmato5"></i>
				</div>

				<XSelect value={filter} onChange={handleFilterChange}>
					{ values.map((v, key) => (
						<option value={v.val} key={key}>{ v.name }</option>
					))}
				</XSelect>

			</div>
		</div>

		{ dataDerive.length == 0 ?
			<p className="x-low-emphasis xfosi13 xtealce xmato40 xfowebo">Vous n'avez aucune tâche pour le moment</p> :
			dataDerive.map((p, key) => (
				<EachTaskInHome key={key} tasks={p.tasks} projectName={p.name} />
			))
		}
		
	</div>
}



function EachTaskInHome ({projectName, tasks}) {
		
	const style = {
		background: XSettings.getColorFromChar[projectName[0].toLowerCase()]
	}
	
	return <React.Fragment>
		{ tasks.map((task, key) => (
		<div className="xmato10 x-bd-top x-bd-thin each-task-home xdigr xpato10 xwi90per x-center" key={key}>
			<div className="task-name xdifl xalitce">
				<div className="icon-task-name xmari10 x-circle-23 x-child-center">
					<i className="fa fa-check"></i>
				</div>
				<p className="xfosi14">{ task.name }</p>
			</div>
							
			<div className="project-task xdifl xalitce xjucoflen">
				<p className="xbora3" style={style}>{ __.getShortText(projectName, 10) }</p>
				<p className="xmale10 x-low-emphasis xfosi12 filtered-task">{ task.startDate } - { task.endDate } ({task.deadline}js) <strong className={ task.status.toLowerCase().split(' ').join('-') }>{ task.status }</strong></p>
			</div>
		</div>
		))}
	</React.Fragment>
	
}

function Home ({user, data}) {
	
	const [load, setLoad] = React.useState(true);


	const getProfileCompleted = React.useMemo(() => {
		if (user.email && user.jobTitle && user.description) {
			return true;
		}
		return false;
	}, []);
	
	const [stepSelected, setStepSelected] = React.useState(1);
	
	const months = [
		"Janvier",
		"Février",
		"Mars",
		"Avril",
		"Mai",
		"Juin",
		"Juillet",
		"Août",
		"Septembre",
		"Octobre",
		"Novembre",
		"Décembre",
	]
	
	const days = [
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
	]
	
	const one = () => {
		setStepSelected(1);
	}
	
	const two = () => {
		setStepSelected(2);
	}
	
	const three = () => {
		setStepSelected(3);
	}
	
	
	const getStepContent = React.useMemo(() => {
		if (stepSelected == 0) {
			return <div className="xwi200 xasra1 xdifl xjucospev xalitce xfldico">
				<i className="fa fa-bars xfosi30"></i>
				<p className="xfosi13 x-low-emphasis">Completer touts les etapes.</p>
			</div>
		} else if (stepSelected == 1) {
			return <CreateFirstProjectStep />;
		} else if (stepSelected == 2) {
			return <ManageTeamStep />
		} else if (stepSelected == 3) {
			return <CompleteProfileStep />
		} else {
			return null;
		}
	}, [stepSelected]);
	
	
	const getThisMonth = React.useMemo(() => {
		let date = new Date();
		return months[date.getMonth()];
	}, []);
	
	const getThisDay = React.useMemo(() => {
		let date = new Date();
		return date.getDate();
	}, []);
	
	const getDayName = React.useMemo(() => {
		let date = new Date();
		return days[date.getDay()]
	});
	
	const getFinishedTask = React.useMemo(() => {
		let tasksFinished = [];
		data.forEach((project) => {
			project.sections.forEach((section) => {
				section.tasks.forEach((task) => {
					if (task.user.id == user.id) {
						if (task.status == 'Terminé') {
							tasksFinished.push(task);
						}
					}
				});
			})
		});
		
		return tasksFinished.length;
	}, []);
	
	
	const getColabs = React.useMemo(() => {
		
		let colabs = [];
		let final = [];
		
		let idPushed = [];
		
		data.forEach((project) => {
			if (idPushed.indexOf(project.admin.id) == -1) {
				colabs.push(project.admin);
				idPushed.push(project.admin.id);
			}
			
			project.members.forEach((member) => {
				if (idPushed.indexOf(member.id) == -1) {
					colabs.push(member);
					idPushed.push(member.id);
				}
			});
		});
		
		colabs.forEach((m) => {
			if (m.id != user.id) {
				final.push(m);
			}
		})
		
		return final;
	}, []);
	
	
	return <React.Fragment>
		
		<h2 className="">Accueil</h2>
		<p className="date-today xtealce xmato20 xfosi17">{ getDayName }, { getThisMonth } { getThisDay }</p>
		<p className="greeting xtealce xfowebo xmato10 xfosi30">Bonjour, { user.lastName }</p>
					
					
		<div className="tbs x-center xmato30 x-child-center xhe60 xbora30">
			<div className="xwi50per xhe40 x-child-center x-bd-right x-bd-thin">
				<div className="x-child-center xmari10">
					<i className="fa fa-check"></i>
				</div>
				<p className="xfosi12"><strong>{getFinishedTask}</strong> tâches terminée{ getFinishedTask > 1 ? 's' : ''}</p>
			</div>
			
			<div className="xwi50per xhe40 x-child-center">
				<div className="x-child-center xmari10">
					<i className="fa fa-users"></i>
				</div>
				<p className="xfosi12"><strong>{getColabs.length}</strong> colaborateur</p>
			</div>
		</div>
		
				
		<div className="setup x-deep-shadow x-center xbora10 xovhi xdigr xmato50">
		
			<div className="all-steps">
							
				<div onClick={one} className="x-pointer each-step xalitce xhe40 xbora10 xdigr">
					<div className={ data.length != 0 ? "statut-step done x-circle-35 x-child-center" : "statut-step wait x-circle-35 x-child-center" }>
					{ data.length != 0 ?
						<i className="fa fa-check"></i> :
						<p className="xfowebo">1</p>
					}
					</div>
					<div>
						<p className="xfosi15 xmato2 xfowebo">Créez votre premier projet</p>
					</div>
				</div>
							
				<div onClick={two} className="x-pointer each-step xmato15 xalitce xhe40 xbora10 xdigr">
					<div className=" statut-step wait x-circle-35 x-child-center" >
						<p className="xfowebo">2</p>
					</div>
					<div>	
						<p className="xfosi15 xmato2 xfowebo">Gérer votre équipe</p>
					</div>
				</div>
							
				<div onClick={three} className="x-pointer each-step xmato15 xalitce xhe40 xbora10 xdigr">
					<div className={ getProfileCompleted ? "statut-step done x-circle-35 x-child-center" : "statut-step wait x-circle-35 x-child-center" }>
					{ getProfileCompleted ? 
						<i className="fa fa-check"></i> : 
						<p className="xfowebo">3</p>
					}
					</div>
					<div>
						<p className="xfosi15 xmato2 xfowebo">Completer votre profile</p>
					</div>
				</div>
							
			</div>
			
			<div className="appears-each-step x-child-center">
				{ getStepContent }
			</div>
		</div>
		
					
		
					
		<MyTaskInHome data={data} user={user} />
		
		<div className="people-and-projects x-center xmato50">
			<ProjectHome data={data} user={user} />
			<PeopleInHome data={data} peoples={getColabs} />
		</div>
		
		
	</React.Fragment>
}

function CreateFirstProjectStep () {
	
	const add = () => {
		openAddNewProject();
	}
	
	return 	<div className="each-step-content x-fill-parent xdifl xalitce xjucospev xfldico">
		<i className="fa fa-rocket xfosi50"></i>
		<p className="xfosi20 xfowebo">Créer votre premier projet</p>
		<p className="xfosi12 xfowebo xlihe3 x-low-emphasis">Commencer votre premier projet.</p>
		<div onClick={add} className="x-pointer xwi50per x-deep-shadow xhe45 xbora30 x-child-center">
			<button>Créer</button>
		</div>
	</div>
}

function ManageTeamStep () {
	const add = () => {
		openInviteTeam();
	}
	
	return 	<div className="each-step-content x-fill-parent xdifl xalitce xjucospev xfldico">
		<i className="fa fa-users xfosi50"></i>
		<p className="xfosi20 xfowebo">Gérer votre équipe</p>
		<p className="xfosi12 xfowebo xlihe3 x-low-emphasis">Vous pouvez Gérer votre équipe par l'ajout ou suppression.</p>
		<div onClick={add} className="x-pointer xwi50per x-deep-shadow xhe45 xbora30 x-child-center">
			<button>Gérer</button>
		</div>
	</div>
}

function CompleteProfileStep () {
	const completer = () => {
		openSettings();
	}
	
	return 	<div className="each-step-content x-fill-parent xdifl xalitce xjucospev xfldico">
		<i className="far fa-user-circle xfosi50"></i>
		<p className="xfosi20 xfowebo">Completer votre profile</p>
		<p className="xfosi12 xfowebo xlihe3 x-low-emphasis">Completer votre profile. Vous pouvez remplir quelques informations.</p>
		<div onClick={completer} className="x-pointer xwi50per x-deep-shadow xhe45 xbora30 x-child-center">
			<button>Completer</button>
		</div>
	</div>
}

function EachWMember ({data}) {
	
	
	return 	<div className="other-members xdifl xalitce x-pointer">
		<div className="x-circle-50 x-child-center">
			<XUserProfilePicture
				name={data.lastName}
				width={50}
				fontSize={20}
				imageURL={data.photo}

				></XUserProfilePicture>
		</div>
		<p className="xfowebo xmale10">{ __.getShortText(data.lastName, 8) }</p>
	</div>
}

function WMembers ({data, user}) {
	
	const invite = () => {
		openInviteTeam();
	}
	
	
	const members = React.useMemo(() => {
		let colabs = [];
		let final = [];
		
		let idPushed = [];
		
		data.forEach((project) => {
			if (idPushed.indexOf(project.admin.id) == -1) {
				colabs.push(project.admin);
				idPushed.push(project.admin.id);
			}
			
			project.members.forEach((member) => {
				if (idPushed.indexOf(member.id) == -1) {
					colabs.push(member);
					idPushed.push(member.id);
				}
			});
		});
		
		colabs.forEach((m) => {
			if (m.id != user.id) {
				final.push(m);
			}
		})
		
		return final;
	}, []);
	
	
	return 	<div className="w-members xhe250 xbora10 x-deep-shadow">
		<p className="xfosi20 xfowebo xmale20 xmabo20">Members ({members.length + 1})</p>
		<div className="all-members x-center xdigr">
			<div className="w-inv xdifl xalitce x-pointer" onClick={invite}>
				<div className="x-circle-50 x-child-center">
					<i className="fa fa-plus"></i>
				</div>
				<p className="xmale10 xfowebo">Inviter</p>
			</div>
			
			{ members.map((m) => (
				<EachWMember data={m} key={m.id}></EachWMember>
			))}
		</div>
	</div>
}

function WTemplate () {
	return <div className="w-templates x-deep-shadow xbora10 xmato15">
		<p className="xfosi20 xfowebo xmale20 xmabo20">Templates</p>
								
		<div className="xdifl x-bd-bottom xhe80 x-bd-thin xwi90per x-center xalitce">
			<div className="x-square-55 dashed xbora15 x-child-center">
				<i className="fa fa-plus"></i>
			</div>
			<p className="xmale20 xfowebo">Nouvelle template</p>
		</div>
								
		<div className="xdifl xhe80 xwi90per x-center xalitce">
			<div className="x-square-55 dashed xbora15 x-child-center">
				<i className="fa fa-cube"></i>
			</div>
			<p className="xmale20 xfowebo">Découvrez plus de modèles</p>
		</div>
								
	</div>
}

function WProject ({data, user}) {
	
	const add = () => {
		openAddNewProject();
	}
	
	return <div className="w-project x-deep-shadow xmato15 xpore xbora10">
		<p className="xfosi20 xfowebo xmale20 xmabo20">Project</p>
								
		<div onClick={add} className="w-new-pro x-pointer xbora5 xpoab xri20 xto15">
			<p className="xfosi12 xfowebo">Nouveau projet</p>
		</div>
								
		<div className="w-table-header xmato30 x-bd-thin x-bd-bottom x-center xhe25 xdigr">
			<div className="w-head-tab-name">
				<p className="x-low-emphasis">Nom</p>
			</div>
			<div className="w-head-tab-members">
				<p className="x-low-emphasis">Membres</p>
			</div>
		</div>

		{ data.length == 0 ?
			<p className="x-low-emphasis xfosi13 xtealce xmato30 xfowebo">Vous n'avez aucun projet pour le moment</p> :
			data.map((project, key) => (
				<EachWProject key={key} data={project} user={user}>{project.name}</EachWProject>
			))
		}
	</div>
}

function EachWProject ({data, children, user}) {
	const style = {
		background: XSettings.getColorFromChar[children[0].toLowerCase()]
	}
	
	const getMembers = React.useMemo(() => {
		let colabs = [];
		let final = [];
		
		let idPushed = [];
		
		
		if (idPushed.indexOf(data.admin.id) == -1) {
			colabs.push(data.admin);
			idPushed.push(data.admin.id);
		}
			
		data.members.forEach((member) => {
			if (idPushed.indexOf(member.id) == -1) {
				colabs.push(member);
				idPushed.push(member.id);
			}
		});
	
		
		colabs.forEach((m) => {
			if (m.id != user.id) {
				final.push(m);
			}
		})
		
		return final;
	}, []);
	
	return 	<div className="w-table-values x-center xhe40 xmato5 xdigr x-pointer">
		<div className="w-pro-name xdifl xalitce">
			<div className="x-square-30 xbora10 x-child-center" style={style}>
				<p className="xfowebo xfosi11">{ children[0].toLowerCase() }</p>
			</div>
			<p className="xfosi12 xmale10 xfowebo">{children}</p>
		</div>
		<div className="w-pro-members xdifl xalitce">
			<p className="xfosi14 xfowebo">{ getMembers.length } membres</p>
		</div>
	</div>
}

function MyWorkspace ({data, user}) {
	return <React.Fragment>
		<h2 className="xmabo20">Mon espace de travail</h2>
					
		<div className="xdigr xwi100per w-section">
			<div className="w-one">
				<WMembers data={data} user={user} />
				<WProject data={data} user={user} /> 
				<WTemplate />
			</div>
						
			<div className="w-two">
				<WAboutUs />
				<WKey />
			</div>
		</div>
	</React.Fragment>
}



function WAboutUs () {
	return <div className="w-about-us x-deep-shadow">
		<p className="xfosi20 xfowebo xmale20 xmabo20">Ä propos de nous</p>
								
		<p className="x-low-emphasis x-pointer xfosi13 xmale20 xmato30 xfowebo xmabo30">Cliquez pour ajouter la description de l'équipe...</p>
								
		<div className="x-pointer x-center xbora5 xhe35 x-child-center">
			<p className="xfowebo xmato2 xfosi13">Draft Description</p>
		</div>
	</div>
							
}

function WKey () {
	return 	<div className="w-key-rec x-deep-shadow xpore xmato15">
		<p className="xfosi20 xfowebo xmale20 xmabo20">Key resources</p>
		<div className="w-add x-pointer xbora5 xpoab xri20 xto15">
			<p className="xfosi12 xfowebo">Ajouter</p>
		</div>
								
		<p className="x-low-emphasis xfosi13 xmale20 xmato30 xmari20 xlihe3 xfowebo xmabo30">Ajoutez des ressources de soutien telles que Portofolio ou un lien vers des documents externes.</p>
								
		<div className="xdifl w-block-file xbora5 xhe70 xwi90per x-center xalitce">
			<div className="x-square-60 xmale10 x-child-center">
				<i className="far x-low-emphasis fa-file xfosi40"></i>
			</div>
			<div className="xmale20 w-file-des ">
				<div className="xwi150 xhe15 xbora2"></div>
				<div className="xmato10 xwi120 xhe11 xbora2"></div>
			</div>
		</div>
	</div>
}

function WGoal () {
	
	return 	<div className="w-goals x-deep-shadow xmato15 xpore">
		<p className="xfosi20 xfowebo xmale20 xmabo20">Objectif</p>
								
		<div className="xfowebo xfosi14 xmale20 xmari20 xmato30 xmabo10">Cette équipe a encore été créée des objectifs</div>
								
		<p className="x-low-emphasis x-bd-bottom x-bd-thin xfowebo xmari20 xmale20 xfosi12 xpabo30">Ajoutez des objectifs afin que l'équipe puisse voir ce que vous espérez atteindre l'objectif</p>
								
		<div className="xmale20 xmato20 xwi120 w-tt-goal xhe15 xbora5 xmabo10"></div>
								
		<div className="xwi80per xmale20 w-des-goal xhe10 xbora5 xmabo25"></div>
								
		<div className="xdifl xmale20 xhe20 xalitce">
			<div className="x-circle-10 w-des-goal"></div>
			<p className="xmale10 xmato2 xfosi11 xfowebo">On track (10%) • </p>
			<div className="xwi80 xmale10 xhe15 xbora5 w-tt-goal"></div>
		</div>
								
	</div>
}


function MyTaskInProfile ({data, auth_user}) {

	const [filter, setFilter] = React.useState('tous');

	const values = [
		{
			val: 'tous',
			name: 'Tous',
		},
		{
			val: 'en attente',
			name: 'En attente',
		},
		{
			val: 'en cours',
			name: 'En cours',
		},
		{
			val: 'terminé',
			name: 'Terminé',
		},
		{
			val: 'arret',
			name: 'Arret',
		},
	]

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
	}
	
	const dataDerive = React.useMemo(() => {
		let d = [];
		
		data.forEach((project) => {
			let pro = {};
			pro.name = project.name;
			pro.tasks = [];
			
			project.sections.forEach((section) => {
				section.tasks.forEach((task) => {
					if (task.user.id == auth_user.id) {
						if (filter == 'tous') {
							pro.tasks.push({
								name: task.name,
								deadline: task.deadline,
								status: task.status,
								startDate: task.startDate,
								endDate: task.endDate
							});
						} else {
							if (task.status.toLowerCase() == filter.toLowerCase()) {
								pro.tasks.push({
									name: task.name,
									deadline: task.deadline,
									status: task.status,
									startDate: task.startDate,
									endDate: task.endDate
								});
							}
						}
						
					}
					
				});
			});
			d.push(pro);
		});
		
		return d;
	});
	
	return 	<div className="my-task-home xwi100per xpato20 xbora10 xovau">
							
		<div className="xdifl xmale20 xmato15">
			<p className="xmale10 xfosi20 xfowebo xmabo10 xmari10">Mes tâches</p>
			<i className="fa fa-lock"></i>
		</div>


		<XSelect 
			style={{
				marginLeft: '20px',
				marginBottom: '10px',
			}}
			value={filter} 
			onChange={handleFilterChange}
			>
			{ values.map((v, key) => (
				<option value={v.val} key={key}>{ v.name }</option>
			))}
		</XSelect>

		{ dataDerive.map((p, key) => (
			<EachTaskInProfile key={key} tasks={p.tasks} projectName={p.name} />
		))}
		
	</div>
}

function EachTaskInProfile ({tasks, projectName}) {
	
	const style = {
		background: XSettings.getColorFromChar[projectName[0].toLowerCase()]
	}
	
	return <React.Fragment>
		{ tasks.map((task, key) => (
		
		<div className="xmato10 x-bd-top x-bd-thin each-task-home xdigr xpato10 xwi90per x-center" key={key}>
			<div className="task-name xdifl xalitce">
				<div className="icon-task-name xmari10 x-circle-23 x-child-center">
					<i className="fa fa-check"></i>
				</div>
				<p className="xfosi14">{task.name}</p>
			</div>
									
			<div className="project-task xdifl xalitce xjucoflen">
				<p className="xbora3" style={style}>{ __.getShortText(projectName, 10)}</p>
				<p className="xmale10 x-low-emphasis xfosi12 filtered-task">{ task.startDate } - { task.endDate } ({task.deadline}) |  <strong className={ task.status.toLowerCase().split(' ').join('-') }>{ task.status }</strong> </p>
			</div>
		</div>
		
		))}
		
	</React.Fragment>
}


function MyRecentProject ({projects, user}) {
	return 	<div className="my-recent-project x-deep-shadow xbora10 xovau">
		<p className="xfosi20 xmale20 xmato5 xfowebo">Mon projet récent</p>
								
		<div className="display-my-projects xmato20">
			{ projects.map((pro) => (
				<EachProjectOnRecentProject 
					data={pro}
					key={pro.id}
					user={user}
				>{pro.name}</EachProjectOnRecentProject>
			))}
		</div>
	</div>
}

function EachProjectOnRecentProject ({data, children, user}) {
	
	const open = () => {
		focusSlideFunc('null');
		switchMenu("project-visualisation");
		
		let idP = "project-visual-id-" + data.id;
		if (ALL_PROJECT_OPENED_ID.indexOf(idP) != -1) {
			ALL_PROJECT_OPENED.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		} else {
			let newProjectSection = __.createElement("div", idP, "");
			
			projectVisualisationDOM.appendChild(newProjectSection);
			
			ALL_PROJECT_OPENED.push(newProjectSection);
			ALL_PROJECT_OPENED_ID.push(idP);
			let projectRender = ReactDOM.createRoot(newProjectSection);
			projectRender.render(<VisualiseProject 
				modelData={data}
				user={user}
			/>);
			
			ALL_PROJECT_OPENED.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		}
	}

	return <div className="each-recent-project xwi90per x-center xdigr xalitce x-pointer" onClick={open}>
		<div className="x-square-60">
			<XUserProfilePicture
				name={data.name}
				imageURL={data.photo}
				fontSize={20}
				width={60}
				></XUserProfilePicture>
		</div>
		<div className="title-p">
			<p className="xfosi14 xfowebo">{children}</p>
			<p className='xfosi12 x-low-emphasis xmato5'>Créer par { data.admin.lastName} { data.admin.firstName}</p>
		</div>
	</div>
}

function FrequentColaborateur ({data}) {
	
	const invite = () => {
		openInviteTeam();
	}

	const removeDuplicate = function (col) {
		let all_id = []
		let to_return = []

		col.forEach((u) => {
			if (all_id.indexOf(u.id) == -1) {
				all_id.push(u.id);
				to_return.push(u);
			}
		})

		return to_return;
	}

	
	const getColab = React.useMemo(() => {

		let true_colabs = [];
		let all_user_id = [];


		data.forEach((project) => {

			if (all_user_id.indexOf(project.admin.id) == -1) {
				all_user_id.push(project.admin.id);
				true_colabs.push(project.admin);
			}

			project.members.forEach((member) => {
				if (all_user_id.indexOf(member.id) == -1) {
					all_user_id.push(project.admin.id);
					true_colabs.push(member)
				}
			})
		})
	
		return removeDuplicate(true_colabs);
	});

	
	return 	<div className="frequent-colaborateur xbora10 xovau">
		<div className="xdifl xmale5 xmato15">
			<p className="xfosi20 xfowebo xmari10">Frequent colaborateur</p>
			<i className="fa fa-lock"></i>
		</div>
								
								
		<div className="invite-team-btn xmato20 xdigr xalitce x-pointer" onClick={invite}>
			<div className="x-circle-60 x-child-center">
				<i className="fa fa-plus"></i>
			</div>
			<p className="xfosi15 xfowebo">Inviter des coéquipiers</p>
		</div>
		
		{ getColab.map((colab) => (
			<EachFrequentColaborateur data={colab} key={colab.id} />
		))}
	</div>
}

function EachFrequentColaborateur ({data}) {
	
	return 	<div className="invited-co xmato15 xdigr xalitce">
		<div className="x-circle-60 x-child-center"	>
			<XUserProfilePicture
				name={data.lastName}
				imageURL={data.photo}
				width={60}
				fontSize={20}
			></XUserProfilePicture>
		</div>
		<p className="xfosi15 xfowebo">{ data.lastName } { data.firstName }</p>
	</div>
}


function MyGoalInProfile () {
	
	const add = () => {
		openAddNewGoal();
	}
	
	return 	<div className="my-goals xbora10 xmato20">
		<div className="title-goals xdigr">
			<div className="title-g xdifl xalitce">
				<p className="xfosi20 xfowebo xmari10">Mon objectifs</p>
				<i className="fa fa-lock"></i>
			</div>
			<div className="add-my-own-goal xdifl xjucoflen">
				<div className="btn-add-it x-pointer xbora5" onClick={add}>
					<p className="xfosi11 xfowebo">Add goals</p>
				</div>
			</div>
		</div>
		
		<p className="xfosi14 xmato30">You don't own yet any goals</p>
		<small className="x-low-emphasis xmato5 xfosi11">Ajoutez un objectif afin que l'équipe puisse voir ce que vous espérez atteindre</small>
								
								
		<div className="xmato20 xhe12 xbora10 xwi60per tt-goal"></div>
								
		<div className="goal-progress xhe12 xwi80per xmato10 one-goal-progress">
			<span className=""></span>
		</div>
								
		<div className="xdifl x-bd-bottom x-bd-thin xhe40 xalitce">
			<div className="x-circle-10 on-track-point"></div>
			<p className="xfosi12 xmato2 xmale10">On Track</p>
		</div>
								
								
		<div className="xmato20 xhe12 xbora10 xwi50per tt-goal"></div>
								
		<div className="goal-progress xhe12 xwi80per xmato10 two-goal-progress">
			<span className=""></span>
		</div>
								
		<div className="xdifl x-bd-bottom x-bd-thin xhe40 xalitce">
			<div className="x-circle-10 at-risk-point"></div>
			<p className="xfosi12 xmato2 xmale10">At risk</p>
		</div>
			
	</div>
}



function Profile ({profileData, projects}) {
	
	const [myData, setMyData] = React.useState(projects);
	
	const edit = () => {
		openSettings();
	}
	
	const getProfileName = React.useMemo(() => {
		return profileData.lastName + " " + profileData.firstName;
	}, []);
	
	const getJobTitle = React.useMemo(() => {
		if (profileData.jobTitle && profileData.jobTitle != "") {
			return profileData.jobTitle;
		} else {
			return "...";
		}
	}, []);
	
	return <React.Fragment>
		<div className="xdifl xalitce">
			<div className="xwi120 xasra1 x-child-center">
				<XUserProfilePicture
					name={getProfileName}
					imageURL={profileData.photo}
					fontSize={40}
					width={120}
					/>
			</div>
			<div className="my-info xmale20">
				<p className="xfosi23 xfowebo">{ profileData.lastName } { profileData.firstName }</p>
				<div className="my-fonction xdifl xmato5 xalitce">
					<i className="fa fa-business-time"></i>
					<p className="fonction xfosi12 xmale10" >{ getJobTitle }</p>
				</div>
				<div onClick={edit} className="xmato10 x-pointer btn-edit-profile xbora5">
					<p className="xfosi11">Edit profile</p>
				</div>
			</div>
		</div>
					
					
					
		<div className="section-profile xmato50 xdigr">
						
			<div className="section-left">
				<MyTaskInProfile 
					data={myData}
					auth_user={profileData}
				/>
				<MyRecentProject 
					projects={myData}
					user={profileData}
				/> 
			</div>
						
						
			<div className="section-right">
				<FrequentColaborateur data={myData} />
			</div>
			
		</div>
	</React.Fragment>
}


function SearchBox () {
	
	const [searchValue, setSearchValue] = React.useState("");
	const [response, setResponse] = React.useState({
		projects: [],
		colaborateurs: []
	});
	
	let url = '/search/';


	const request = async function () {
		setLoad(true);
		let data_to_send = {
			key: searchValue,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();

		Object.entries(data_to_send).forEach(([key, val]) => {
			formData.append(key, val);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');

		if (req.isSuccess) {
			setLoad(false);
			setResponse((prev) => {
				return {...prev, 
					projects: req.data[0],
					colaborateurs: req.data[1],
				}
			})
		}
	}
	
	const [load, setLoad] = React.useState(false);
	
	const handleChange = (val) => {
		setSearchValue(val);
	}
	
	React.useEffect(() => {
		$(".draft-search").val(searchValue);
		if (searchValue.length != 0) {
			request();
		}

	}, [searchValue]);
	
	const style = {
		width: "100%",
	}
	
	
	
	const getContent = React.useMemo(() => {
		if (load) {
			return <div className="xwi100per xhe150 x-child-center">
				<XLoading
					w={30}
					weight={6}
					color="#007BFF"
				/>
			</div>
		} else {
			if (searchValue.length == 0) {
				return <p className="xfosi12 xmato30 x-low-emphasis xfowebo xtealce">Taper pour rechercher</p>
			} else {
				return <React.Fragment>
					<DisplayProjectSearched 
						projects={response.projects} 
						val={searchValue} />
					<DisplayUserSearched 
						users={response.colaborateurs}
						val={searchValue} />
				</React.Fragment>
			}
		}
	}, [response, searchValue, load]);
	
	return <React.Fragment>
	
		<div className="search-input-react">
			<XSearch
				value={searchValue}
				style={style}
				onChange={handleChange}
				className="real-input"
				>Rechercher...</XSearch>
		</div>
			
		<div className="result-and-sug xmato10">
			<div className="recents xmato20">
				<p className="xfosi18 xmabo15 xfowebo">Results</p>
				{ getContent }
			</div>
		</div>
	</React.Fragment>
}

function DisplayProjectSearched ({projects, val}) {
	
	const content = function() {
		if (projects.length == 0) {
			return <p className="xfosi12 xmato30 x-low-emphasis xfowebo xtealce">Pas trouvé '{val}'</p>
		} else {
			return <React.Fragment>
			{ projects.map((pro) => (
				<SearchProjectResult 
					key={pro.id}
					data={pro}
					>{pro.name}</SearchProjectResult>
			))}
			</React.Fragment>
		}
	}();
	
	return <React.Fragment>
		<p className="x-low-emphasis xmabo15 xfowebo">Project</p>
		{ content }
	</React.Fragment>
}


function DisplayUserSearched ({users, val}) {
	const content = function() {
		if (users.length == 0) {
			return <p className="xfosi12 xmato30 x-low-emphasis xfowebo xtealce">Pas trouvé '{val}'</p>
		} else {
			return <React.Fragment>
			{ users.map((user) => (
				<SearchUserResult key={user.id} data={user}>{user.pseudo}</SearchUserResult>
			))}
			</React.Fragment>
		}
	}();
	
	return <React.Fragment>
		<p className="x-low-emphasis xmabo10 xmato15 xmabo10 xfowebo">Collaborateurs</p>
		{ content }
	</React.Fragment>
}


function SearchProjectResult ({data, children}) {

	const click = () => {
		switchMenu(null, "project-visualisation");
		projectVisualisation.render(<VisualiseProject data={data} />);
	}
	
	return 	<div className="project-sug xmato10 xdifl xalitce x-pointer">
		<XUserProfilePicture
			name={data.name}
			width={30}
			fontSize={12}
			imageURL={data.photo}
		></XUserProfilePicture>
		<p className="xmale15 xfosi13 xfowebo">{children}</p>
	</div>
}

function SearchUserResult ({children, data}) {
	
	return <div className="people-sug xdifl xmato10 xalitce">
		<XUserProfilePicture
			name={data.lastName}
			width={30}
			fontSize={12}
			imageURL={data.photo}
		></XUserProfilePicture>
		<p className="xmale15 xfosi13 xfowebo">{ data.lastName } { data.firstName }</p>
	</div>
}


function Settings () {
	return <React.Fragment>
	
	</React.Fragment>
}


function SectionAddGlobalTask () {
	const fs = {
		width: "200px",
	}
	return <React.Fragment>
		<input type="text" placeholder="Task name" className="xfosi18 xfowebo xwi85per xmale30  xmabo20" />
				
					
		<div className="for-people xmabo20 xmale30 xdifl xalitce xhe40">
			<label className="xfosi15 xfowebo" htmlFor="select-people">For: </label>
			<select name="select-people" className="x-shadow xbora10 xwi65per xmale10" id="select-people">
				<option value="ste1">Moi</option>
				<option value="id">bigrocket@gmail.com</option>
			</select>
		</div>
				
		<div className="in-project xmabo25 xmale30 xdifl xalitce xhe40">
			<label className="xfosi15 xfowebo" htmlFor="select-project">In project: </label>
			<select name="select-project" className="x-shadow xbora10 xwi65per xmale10" id="select-project">
				<option value="ste1">Web dev</option>
				<option value="id">Graphic design</option>
			</select>
		</div>
				
		<p className="xmale30 xfosi15 xfowebo choose-section"><span>Web dev</span> has 3 section</p>
				
		<p className="x-low-emphasis xmale30 xmato5 xfosi12 xfowebo">Choose one section to create new task.</p>
				
				
		<select name="" id="select-section" className="xmato20 xwi80per xbora10 xmale30 x-deep-shadow">
			<option value="sjs">To do</option>
			<option value="">Doing</option>
			<option value="">Do later</option>
		</select>
		
		<textarea className="task-des xlihe3 xfowebo x-bd-bottom x-bd-thin" placeholder="Add task description"></textarea>
		
		<XButtonLoadable
			className="xmato10"
			br={30}
			center={true}
			style={fs}
			disabled={false}
			>Create task</XButtonLoadable>
	</React.Fragment>
}

function Inbox () {
	return <p>Home</p>
}

var ALL_PROJECT_OPENED_ID = [];
var ALL_PROJECT_OPENED = [];

function EachProjectOnSideBar ({id, children, data, user}) {
	
	const click = () => {
		focusSlideFunc('null');
		switchMenu("project-visualisation");
		
		let idP = "project-visual-id-" + id;
		if (ALL_PROJECT_OPENED_ID.indexOf(idP) != -1) {
			ALL_PROJECT_OPENED.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		} else {
			let newProjectSection = __.createElement("div", idP, "");
			
			projectVisualisationDOM.appendChild(newProjectSection);
			
			ALL_PROJECT_OPENED.push(newProjectSection);
			ALL_PROJECT_OPENED_ID.push(idP);
			let projectRender = ReactDOM.createRoot(newProjectSection);
			projectRender.render(<VisualiseProject 
				modelData={data}
				user={user}
			/>);
			
			ALL_PROJECT_OPENED.forEach((p) => {
				if (p.id == idP) {
					p.style.display = "block";
				} else {
					p.style.display = "none";
				}
			});
		}
	}
	
	return <div className="x-square-50 each-project-arrow-on-side x-pointer" onClick={click}>
		<XUserProfilePicture
			name={children}
			width={50}
			fontSize={15}
			imageURL={data.photo}
		></XUserProfilePicture>
	</div>
}

var PAGE_TOKEN = document.querySelector("#page-token input").value;

function AddNewProject ({allProjects}) {
	
	const [projectName, setProjectName] = React.useState("");
	const [load, setLoad] = React.useState(false);
	const [allP, setAllP] = React.useState(allProjects);
	const [sectionValue, setSectionValue] = React.useState("");
	
	const fieldStyle = {
		width: "100%",
	}
	const getValue = (val) => {
		setProjectName(val);
	}
	const getSectionValue = (val) => {
		setSectionValue(val);
	}
	
	const disabled = React.useMemo(() => {
		if (projectName.length > 3 && sectionValue.length >= 2) {
			return false;
		}
		return true;
		
	}, [projectName, sectionValue]);
	
	
	const request = async function () {
		let url = '/create_new_project/';

		
		let d = {
			name: projectName.trim(),
			section: sectionValue.trim(),
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let formData = new FormData();
		
		Object.entries(d).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let req = await __.layoutRequest.post(url, formData, 'json');
		
		if (req.isSuccess) {
			setAllP((recent) => {
				return [...recent, req.data];
			});
			setProjectName("");
			setLoad(false);
			setSectionValue("");
		} else {
			setLoad(false);
		}
	}


	
	const create = () => {
		setLoad(true);
		request();
	}
	
	
	React.useEffect(() => {
		setTimeout(() => {
			$("#add-new-project-box").hide();
		}, 200);
	}, [allP]);
	
	
	return <React.Fragment>
		<p className="xfosi25 xfowebo xmabo30">Nouveau projet</p>
					
		<label htmlFor="" className="xfosi13 xfowebo">Nom du projet:</label>
		
		<XField
			value={projectName}
			onChange={getValue}
			center={true}
			shadow={true}
			className="xmato15 xmabo15 x-deep-shadow"
			style={fieldStyle}
			
			>eg: Bill on</XField>
					
		<div className="add-new-section xmato20 xpato15 x-bd-thin x-bd-top">
			<p className="xfosi20 xfowebo">Premier section</p>
			<p className="xmato10 xfosi10 xfowebo xlihe3 x-low-emphasis">Apres avoir créer un nouveau projet, vous pouvez ajouter une autre section. Mais pour le moment, nous pouvons vous offrir cette premier section. Creér le</p>
				
			<XField
				value={sectionValue}
				onChange={getSectionValue}
				center={true}
				shadow={true}
				className="xmato15 xmabo15 x-deep-shadow"
				style={fieldStyle}
				
				>eg: To do</XField>
		</div>
		
		<XButtonLoadable
			disabled={disabled}
			load={load}
			shadow={true}
			onClickFunc={create}
			className={"xmato20"}
			style={fieldStyle}
			>Créer maintenant</XButtonLoadable>
		
	</React.Fragment>
}




function FormulaireAjoutFacture({ ajouterFacture, clients }) {
    const [dateEcheance, setDateEcheance] = React.useState("");
    const [montantTotal, setMontantTotal] = React.useState("");
    const [statut, setStatut] = React.useState("impayé");
	
	const [projects, setProjects] = React.useState(clients);
	const [projectSelected, setProjectSelected] = React.useState(projects[0]);
	const [clientEmail, setClientEmail] = React.useState(projectSelected.client ? projectSelected.client.email : '');
	const [clientNumber, setClientNumber] = React.useState(projectSelected.client ? projectSelected.client.number : '');
	const [nomClient, setNomClient] = React.useState(projectSelected.client ? projectSelected.client.name : '');

	const url = '/add_invoice/';
	
    const handleSubmit = async function (e) {

        e.preventDefault();
        if (!nomClient || !dateEcheance || !montantTotal) {
            __.xAlert('Erreur', "Veuillez remplir tous les champs s'il vous plaît...", 'danger');
            return;
        }

        const nouvelleFacture = {
            id: Date.now().toString(), // Génère un ID unique
            client: {
				name: nomClient,
				email: clientEmail,
				number: clientNumber,
			},
			project: {
				name: projectSelected.name,
				photo: projectSelected.photo,
			},
			amount: montantTotal,
			date: dateEcheance,
			paid: statut == 'payé' ? true : false,
        };
		let to_send = {
			timestamp: nouvelleFacture.id,
			amount: montantTotal,
			date: dateEcheance,
			paid: statut == 'payé' ? true : false,
			client_name: nomClient,
			client_email: clientEmail,
			client_number: clientNumber,
			project_id: projectSelected.id,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form_data = new FormData();

		Object.entries(to_send).forEach(([key, val]) => {
			form_data.append(key, val);
		});

		let response = await __.layoutRequest.post(url, form_data, 'json');

		if (response.isSuccess) {
			ajouterFacture(nouvelleFacture);
			setNomClient("");
			setDateEcheance("");
			setMontantTotal("");
			setStatut("impayé");
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection internet et re-essayer plus tard.", 'danger');
		}
    };


	const handleProjectSelected = function (e) {
		let id =  e.target.value;
		let project = projects.filter((project) => (project.id == id));
		project = project[0];
		if (project.client != null && project.client != undefined) {
			setNomClient(project.client.name);
			setClientNumber(project.client.number);
			setClientEmail(project.client.email);
		} else {
			setNomClient('');
			setClientNumber('');
			setClientEmail('');
		}
		setProjectSelected(project);
	}
	const handleClientNumber = function (e) {
		setClientNumber(e.target.value);
	}
	const handleClientEmail = function (e) {
		setClientEmail(e.target.value);
	}


    return (
        <form onSubmit={handleSubmit} className="container-invoice-form">

            <h2 className="xtealce xmabo20">Ajouter une Nouvelle Facture</h2>
			<div className="container-form xdifl">
				<div className="client-form">
					<select value={projectSelected.id} onChange={handleProjectSelected}>
						{ projects.map((project, key) => (
							<option value={project.id} key={key}>{ project.name }</option>
						))}
					</select>
					
					<p className="xfosi14 xfowebo xmabo15 xmato20">Informations du client</p>
					<div className="input-invoice">
						<input
							type="text"
							value={nomClient}
							placeholder="Nom du client"
							onChange={(e) => setNomClient(e.target.value)}
							required
						/>
					</div>

					
					<div className="input-invoice">
						<input type="text" placeholder="Email du client" value={clientEmail} onChange={handleClientEmail} />
					</div>


					<div className="input-invoice">
						<input type="tel" placeholder="Tel du client" value={clientNumber} onChange={handleClientNumber} />
					</div>

				</div>

				<div className="facture-info">
					<p className="xfosi14 xfowebo xmabo15">Date de facture</p>

					<div className="input-invoice">
						<input
							type="date"
							value={dateEcheance}
							onChange={(e) => setDateEcheance(e.target.value)}
							required
						/>
					</div>

					<p className="xfosi14 xfowebo xmabo15">Montant total</p>

					<div className="input-invoice">
						<input
							type="number"
							placeholder="Montant total"
							value={montantTotal}
							onChange={(e) => setMontantTotal(e.target.value)}
							required
						/>
					</div>

					<p className="xfosi14 xfowebo xmabo15">Status</p>
					<div className="input-voice xmabo20">
						<select
							value={statut}
							onChange={(e) => setStatut(e.target.value)}
						>
							<option value="impayé">Impayé</option>
							<option value="payé">Payé</option>
						</select>
					</div>

				</div>
			</div>
			
			
            <button type="submit">Ajouter la Facture</button>

        </form>
    );
}


// Composant pour afficher la liste des factures
function ListeFactures({ factures, modifierStatutFacture , deleteFacture, auth_user }) {
    const [recherche, setRecherche] = React.useState("");

    const filtrerFactures = factures.filter((facture) =>
        facture.client.name.toLowerCase().includes(recherche.toLowerCase())
    );

    const handleStatutChange = (id, newStatut) => {
        modifierStatutFacture(id, newStatut);
    };
	
    return <React.Fragment>
		<p className="xfosi30 xmabo20 xtealce xfowebo">Liste des Factures ( {filtrerFactures.length} )</p>
		<XSearch
			onChange={(val) => setRecherche(val)}
			value={recherche}
			style={{
				width: '50%',
			}}
			center={true}
			>Rechercher par nom du client</XSearch>
		<div className="table-invoice-title xbora20 x-deep-shadow xmato20 xmabo20 xhe65 xdigr xalitce x-center">
			<div className="invoice-id">
				<p>ID</p>
			</div>

			<div className="client-side">
				<p>Client</p>
			</div>
			
			<div className="project-info">
				<p>Projet</p>
			</div>

			<div className="invoice-amount">
				<p>Montant</p>
			</div>

			<div className="invoice-status">
				<p>Status</p>
			</div>

			<div className="invoice-date">
				<p>Date</p>
			</div>

			<div className="invoice-method">
				<p>Options</p>
			</div>
			
		</div>

		
		
		{filtrerFactures.length === 0 ? (
			<p className="x-low-emphasis xtealce xmato50 xmabo50 xfosi13">Aucune facture trouvée.</p>
		) : (
			filtrerFactures.map((facture) => (
				<EachInvoice 
					key={facture.id} 
					data={facture}
					onDelete={deleteFacture}
					auth_user={auth_user}
					></EachInvoice>
			))
		)}
	</React.Fragment>
}



function EachInvoice ({data, onDelete, auth_user}) {
    const [invoice, setInvoice] = React.useState(data);

	const [loadSeding, setLoadSeding] = React.useState(false);


	const sendEmail = () => {
		setLoadSeding(true);
		let func = (file_outpout) => {
			return file_outpout;
		}
		invoicePaper.render(<InvoicePaper
			data={data}
			sender={auth_user}
			callback={func}
			method={'send'}
		/>);
		setTimeout(() => {
			request();
		}, 1000);
	}
	
	const request = async function () {
		
		let url = '/send_invoice_email/';
		
		let to_send = {
			csrfmiddlewaretoken: PAGE_TOKEN,
			id: invoice.id,
		}
		
		let pdf_name = 'inv_' + invoice.id + '.pdf';
		let form_data = __.getFormData(to_send);


		form_data.append('pdf', INVOICE_DATA.file, pdf_name);
		
		let req = await __.layoutRequest.post(url, form_data, 'json');

		if (req.isSuccess) {
			let text = "Bonjour, le facture " + invoice.id + " est envoyé par email à " + invoice.client.email + " (" + invoice.client.name + ") avec succées. Merci pour votre confiance.";
			__.xAlert('Facture envoyé', text, 'success');
			setLoadSeding(false);
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection essayez plus tard.", 'danger');
			setLoadSeding(false);
		}
		 
	}

	const genererPDF = () => {
		invoicePaper.render(<InvoicePaper
			data={data}
			sender={auth_user}
			callback={ () => {} }
			method={'save'}
		/>)
    };

	const deleteInvoice = () => {
		onDelete(invoice.id);
	}

	const changeStatus = async function () {
		
		let url = '/change_invoice_status/';
		let form = new FormData();

		let to_send = {
			id: invoice.id,
			paid: !(data.paid),
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		Object.entries(to_send).forEach(([key, val]) => {
			form.append(key, val);
		});

		let req = await __.layoutRequest.post(url, form, 'json');

		if (req.isSuccess) {
			setInvoice((lastStatus) => {
				return {...lastStatus, paid: !(lastStatus.paid)}
			});
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection internet et re-essayer plus tard.", 'danger');
		}
	}

    return <React.Fragment>
        <div className="each-invoice xbora20 x-deep-shadow xmato20 xmabo20 xdigr xalitce x-center">
            <div className="invoice-id-value x-child-center">
                <p className="xfosi12 xfowebo">{ invoice.id }</p>
            </div>
            
            <div className="client-info">
                <p className="client-name">{ invoice.client.name }</p>
                <p className="client-email">{ invoice.client.email }</p>
                <p className="client-number-phone">{ invoice.client.number }</p>
            </div>
            <div className="project-info-value xpale10">
                <div className="xdifl xalitce">
                    <XUserProfilePicture
                        name={invoice.project.name}
                        imageURL={invoice.project.photo}
                        width={45}
						fontSize={16}
                    ></XUserProfilePicture>
                    <p className='xfosi13 xfowebo xmale10'>{invoice.project.name}</p>
                </div>
            </div>
            <div className="invoice-amount-value x-child-center">
                <p className="xfosi15 xfowebo">${ invoice.amount }</p>
            </div>
            <div className="invoice-status-value x-child-center">
                <p className={ invoice.paid ? "xfosi15 xfowebo paid" : "xfosi15 xfowebo not-paid" }>{ invoice.paid ? 'Payé' : 'Impayé' }</p>
            </div>
            <div className="invoice-date-value x-child-center">
                <p className="xfosi13 xfowebo xtealice">{ invoice.date }</p>
            </div>
            <div className="invoice-method-actions xdifl xjucospev xalitce">
                { invoice.paid ? 
                <div className="x-square-50 x-pointer x-child-center xbora30 not-paid" onClick={changeStatus}>
                    <i className="fa fa-times"></i>
                </div> :

                <div className="x-square-50 x-pointer x-child-center xbora30 done" onClick={changeStatus}>
                    <i className="fa fa-check-circle"></i>
                </div>
                }

				<div className="x-square-50 x-pointer x-child-center xbora30 not-paid" onClick={deleteInvoice}>
                    <i className="fa fa-trash-alt"></i>
                </div>

                <div className="x-square-50 x-pointer x-child-center xbora30 pdf" onClick={genererPDF}>
                    <i className="fa fa-file-pdf"></i>
                </div>

                <XButtonLoadable
                    type="icon"
                    style={{
                        width: '50px',
                        height: '50px',
                    }}
					onClickFunc={sendEmail}
					load={loadSeding}
                    br={30}
                    icon={'fa fa-paper-plane'}
                    ></XButtonLoadable>
            </div>

        </div>
    </React.Fragment>
} 


// Composant pour ajouter une charge financière
function FormulaireCharge({ ajouterCharge }) {
    const [description, setDescription] = React.useState("");
    const [montant, setMontant] = React.useState("");
    const [projetLie, setProjetLie] = React.useState("");
	const [titre, setTitre] = React.useState("");
	const [date, setDate] = React.useState("");

	const url = '/add_charge_finance/';


    const handleSubmit = async function (e) {
        e.preventDefault();
        const charge = {
            id: Date.now(),
			titre: titre,
			date: date,
            description: description,
            montant: montant,
            projetLie: projetLie,
			csrfmiddlewaretoken: PAGE_TOKEN,
        };

		let form = new FormData();

		Object.entries(charge).forEach(([key, val]) => {
			form.append(key, val);
		})

		let response = await __.layoutRequest.post(url, form, 'json');

		if (response.isSuccess) {
			charge.id = response.data.id,
			ajouterCharge(charge);
			setDescription("");
			setMontant("");
			setProjetLie("");
			__.xAlert('Requete', "Une nouvelle charge financiere ajouté", 'success');
		} else {
			__.xAlert('Connection erreur', "Verifier votre connection internet et re-essayer plus tard.", 'danger');
		}
    };

    return (
        <div className="container-add-charge">
            <h2>Ajouter une Charge Financière</h2>
            <form onSubmit={handleSubmit}>
				<p className="xfosi13 xfowebo xmabo10">Titre</p>
                <div className='input-data'>
                    <input
                        type="text"
                        value={titre}
						placeholder="Titre"
                        onChange={(e) => setTitre(e.target.value)}
                        required
                    />
                </div>


				<p className="xfosi13 xfowebo xmabo10">Description</p>
                <div className='input-data'>
                    <textarea
                        type="text"
						placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

				<p className="xfosi13 xfowebo xmabo10">Montant ($)</p>
                <div className='input-data'>
                    <input
                        type="number"
                        value={montant}
						placeholder="Montant"
                        onChange={(e) => setMontant(e.target.value)}
                        required
                    />
                </div>
				<p className="xfosi13 xfowebo xmabo10">Project ou activité</p>
                <div className='input-data'>
                    <input
						placeholder="Project ou activité"
                        type="text"
                        value={projetLie}
                        onChange={(e) => setProjetLie(e.target.value)}
                    />
                </div>

				<p className="xfosi13 xfowebo xmabo10">Date</p>
                <div className='input-data'>
                    <input
                        type="date"
                        value={date}
						placeholder="Montant"
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>


				<div className="btn-data x-child-center">
					<button type="submit">Ajouter la charge</button>
				</div>
                
            </form>
        </div>
    );
}

// Composant pour afficher la liste des charges
function ListeCharges({ charges, addNewCharge }) {
    return (
        <div className="container xmabo50">
            <h2 className="xtealce xmato30 xmabo20">Liste des Charges Financières ( {charges.length} )</h2>

			<div className="charges-lists x-scroll-horizontal">
				<div className="xbora20 x-child-center x-pointer add-charge" onClick={addNewCharge}>
					<i className="fa fa-plus"></i>
				</div>

				{ charges.map((charge) => (
                    <div key={charge.id} className="charge-item">
						<p className="charge-title">{ charge.titre }</p>
						<p className="charge-amount">${ charge.montant }</p>
                        <p className="charge-des">{charge.description}</p>
                        <p className="charge-project-linked"><strong>Projet/Activité Lié(e) :</strong> { charge.projetLie }</p>
						<p className="x-low-emphasis charge-date">{ charge.date }</p>
                    </div>
                ))}
			</div>
        </div>
    );
}

// Composant principal

function MyFinance({projects, auth_user}) {
    const [factures, setFactures] = React.useState([]);
    const [charges, setCharges] = React.useState([]);

	const delete_url = '/delete_invoice/';
	let socket = null;

	React.useEffect(() => {
		socket = new WebSocket(
			'ws://' + window.location.host + '/ws/finance/'
		)

		socket.onopen = function (e) {}

		socket.onclose = function (e) {}
		
		socket.onmessage = function (e) {
			let response = JSON.parse(e.data);

			if (Array.isArray(response)) {
				let response_facture = response[0];
				let response_charge = response[1];

				setFactures(response_facture);
				setCharges(response_charge);
			}
		}
		
		return () => socket.close()
	}, [])

    const ajouterFacture = (facture) => {
        setFactures([...factures, facture]);
		closeAdd();
    };

    const modifierStatutFacture = (id) => {
        setFactures(factures.map((fac) => 
            fac.id === id ? { ...fac, statut: fac.statut === "payé" ? "impayé" : "payé" } : fac
        ));
    };

	const [addInvoiceForm, setAddInvoiceForm] = React.useState(false);
	const [addCharge, setAddCharge] = React.useState(false);
	

    const ajouterCharge = (charge) => {
        setCharges([...charges, charge]);
		closeAdd();
    };

	const getReadyForCharge = function () {
		black.current.style.display = "block";
		setAddCharge(true);
	}

	const getReadyForAdd = function () {
		black.current.style.display = "block";
		setAddInvoiceForm(true);

	}

	const deleteFacture = async function (f_id) {
		
		let d = {
			id: f_id,
			csrfmiddlewaretoken: PAGE_TOKEN,
		}

		let form = new FormData();

		Object.entries(d).forEach(([key, val]) => {
			form.append(key, val);
		});

		let req = await __.layoutRequest.post(delete_url, form, 'json');

		if (req.isSuccess) {
			let newList = factures.filter((fa) => fa.id != f_id);
			setFactures(newList);
			__.xAlert('Facture supprimée', 'Vous venez de supprimez une facture.', 'info');
		} else {
			__.xAlert('Connection erreur', 'Verifier votre connection et re-essayez plus tard', 'danger');
		}
	}

	const closeAdd = function () {
		black.current.style.display = "none";
		setAddInvoiceForm(false);
		setAddCharge(false);
	}

	

	const black = React.useRef(null);

    return <React.Fragment>
		<div ref={black} className="black-facture-form x-black-02" onClick={closeAdd}></div>
		<p className="x-low-emphasis xfosi15 x-pointer xfowebo xtealce xmato10 xmabo30" onClick={getReadyForAdd}>Cliquer ici pour ajouter une nouvelle facture...</p>
        
		
		<div>
            { addInvoiceForm ? <FormulaireAjoutFacture ajouterFacture={ajouterFacture} clients={projects} /> : null }
			
            <ListeFactures 
				factures={factures} 
				modifierStatutFacture={modifierStatutFacture} 
				deleteFacture={deleteFacture}
				auth_user={auth_user}
			/>
				
            { addCharge ? <FormulaireCharge ajouterCharge={ajouterCharge} /> : null }
			<p className="x-low-emphasis xfosi15 x-pointer xfowebo xtealce xmato50 xmabo30" onClick={getReadyForCharge}>Cliquer ici pour ajouter une charge financiere...</p>
			<ListeCharges charges={charges}  addNewCharge={getReadyForCharge} />
        </div>
	</React.Fragment>
}

window.jsPDF = window.jspdf.jsPDF;

function InvoicePaper ({data, sender, method, callback}) {

    React.useEffect(() => {
        setTimeout(() => {
            let qrcode = new QRCode('write-qrcode', {
                text: `${data.id}: ${ data.paid ? 'Payé' : 'Impayé' }`,
                width: 200,
                height: 200,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
        }, 200);
    });

    
    React.useEffect(() => {
        setTimeout(() => {
            let el = document.querySelector('.invoice-paper');

            const elementWidth = el.scrollWidth;
            const elementHeight = el.scrollHeight;


            const pdfWidth = 210;
            const pdfHeight = 297;
            const pdfAspectRatio = pdfWidth / pdfHeight;
            
            const elementAspectRatio = elementWidth / elementHeight;

            let finalWidth = pdfWidth;
            let finalHeight = pdfHeight;

            if (elementAspectRatio > pdfAspectRatio) {
                finalHeight = pdfWidth / elementAspectRatio;
            } else {
                finalWidth = pdfHeight * elementAspectRatio;
            }


            html2canvas(el, {
                scale: 1.1,
                width: elementWidth,
                height: elementHeight
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');

                pdf.addImage(imgData, "PNG", 0, 0, finalWidth, finalHeight);
				
				if (method == 'send') {
					const pdfBlob = pdf.output('blob');
					INVOICE_DATA.setFile(pdfBlob);
					callback(pdfBlob);

					setTimeout(() => {
						let qrcode_el = document.querySelector('#write-qrcode');
						qrcode_el.innerHTML = '';
					}, 1000);
				} else {
					pdf.save(`document${Date.now().toString()}`);
				}
            })
        }, 400);
    });



    return <React.Fragment>
        <div className="xdigr header-invoice-paper">
            <div className="site-logo xdifl xalitce">
                <div className="logo-icon xmari20">
                    <i className="far fa-file-pdf xfosi23"></i>
                </div>
                <div className="logo-name">
                    <p className="xfowebo">IMMONIVO</p>
                </div>
            </div>
            <div className="paper-name">
                <p>FACTURE</p>
            </div>
        </div>

        <div className="invoice-destinator xdigr">
            <div className="dest">
                <p className="name xfowebo">Â:</p>
                <p className="name xfowebo">{ data.client.name }</p>
                <p className="xfosi13 xmato3">{ data.client.email }</p>
                <p className="xfosi13 xmato3">{ data.client.number }</p>
                <p className="xfosi13 xmato3">{ data.client.address }</p>
            </div>

            <div className="invoice-info">
                <p className="xfowebo">De:</p>
                <p className="xfowebo">{ sender.lastName } { sender.firstName }</p>
                <p className="xfosi13 xfowebo x-low-emphasis">{ sender.email }</p>
            </div>
        </div>
        
        <p className="xmato50">Facture ID: <strong>{ data.id }</strong></p>
        <p className="xmato6 xfosi13">Date de facture: <strong>{ data.date }</strong></p>
        <p className="xmato6 xfosi13">Status: <strong>{ data.paid ? 'Payé' : 'Impayé' }</strong></p>

        <div className="invoice-table x-bd-top x-bd-bottom">
            <div className="quant">
                <p>Quantité</p>
            </div>
            <div className="projet-name">
                <p>Nom de projet</p>
            </div>
            <div className="montant">
                <p>Montant</p>
            </div>
            <div className="total">
                <p>Total</p>
            </div>
        </div>

        <div className="invoice-values">
            <div className="quant">
                <p>1</p>
            </div>
            <div className="projet-name">
                <p>{ data.project.name }</p>
            </div>
            <div className="montant">
                <p>${ data.amount }</p>
            </div>
            <div className="total">
                <p>${ data.amount }</p>
            </div>
        </div>

        <div className="invoice-total">
            <div>
                <p className="sous-total xfosi14 x-low-emphasis">Sous-total: ${ data.amount }</p>
                <p className="xfosi14 xmato4 x-low-emphasis">TVA (0%): $0</p>
                <p className="xfosi20 xmato15">TOTAL: ${ data.amount }</p>
            </div>
            
        </div>

        <div className="qrcode-and-ref xmato90">
            <div className="container-qrcode" id="write-qrcode">

            </div>
        </div>

        <p className="x-low-emphasis xfosi12 xtealce xmato50">Scanner le code QR ci-dessus</p>
    </React.Fragment>
}





function SetupProfile ({data}) {
	const name = React.useMemo(() => {
		return data.lastName + " " + data.firstName;
	}, []);
	
	
	React.useEffect(() => {
		let email = document.querySelector("#my-email-on-side-bar");
		email.innerHTML = data.email;
	}, []);
	
	return <XUserProfilePicture
		name={name}
		imageURL={data.photo}
		width={90}
		fontSize={30}
	/>
}


function ProfileOnHeader ({data}) {
	const name = React.useMemo(() => {
		return data.lastName + " " + data.firstName;
	}, []);
	
	return <XUserProfilePicture
		name={name}
		imageURL={data.photo}
		width={35}
		fontSize={14}
	/>
}


function Notification ({data}) {
	
	return <div className="each-notif xpore xpabo10 xpato10 x-bd-thin x-bd-bottom x-pointer">
		<div className="badge-if-not-seen"></div>

		<div className="x-child-center x-square-50">
			<i className={data.icon}></i>
		</div>

		<div className="notif-texto xmato10">
			<p className="xfosi11 xlihe3">{ data.text }</p>
			<p className="x-low-emphasis xfosi10 xmato3">{ getFormatDateTime(data.datetime) }</p>
		</div>
	
	</div>
}

const notificationBagdeDOM = document.querySelector('.notif-bull .notif-bagde p');
const notifDisplay = document.querySelector('.new-notif-display');
const notifDipslayText = notifDisplay.querySelector('p');


function AllNotifications ({}) {
	const [load, setLoad] = React.useState(true);
	const [data, setData] = React.useState([]);

	let notificationSocket = null;

	const newNotSound = () => {
		messagePopDOM.play();
	}

	React.useEffect(() => {
		notificationSocket = new WebSocket(
			'ws://' + window.location.host + '/ws/notification/'
		);
		
		notificationSocket.onmessage = function (e) {
			let response = JSON.parse(e.data);
			if (Array.isArray(response)) {
				setLoad(false);
				setData(response);
			} else {
				notifDisplay.style.display = 'inline-block';
				notifDipslayText.innerHTML = response.text;
				newNotSound();
				setData((recent) => {
					return [...recent, response];
				});
				
				setTimeout(() => {
					notifDisplay.style.display = 'none';
				}, 4000);
			}
		}
		
		notificationSocket.onopen = function(e) {}
	
		notificationSocket.onclose = function(e) {}

		return () => notificationSocket.close()
	}, [])
	

	React.useEffect(() => {
		notificationBagdeDOM.innerHTML = data.length;
	}, [load, data])

	const content = React.useMemo(() => {
		if (!load) {
			if (data.length == 0) {
				return <p className='xtealce xmato50 x-low-emphasis xfosi13 xmabo50'>Vous n'avez aucune notification pour le moment</p>
			} else {
				return <React.Fragment>
					{ data.map((notif) => (
						<Notification data={notif} key={notif.id} />
					))}
				</React.Fragment>
			}
		} else {
			return null;
		}
		
	}, [load, data])

	return <React.Fragment>
		{ load ? <p className='xtealce xmato50 x-low-emphasis xfosi13 xmabo50'>Chargement des notifications...</p> : content }
	</React.Fragment>
}



function ProfileSettings ({profile}) {
    const [data, setData] = React.useState({
		photoTouched: false,
        photo: profile.photo,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        jobTitle: profile.jobTitle,
        description: profile.description,
        username: profile.username,
		csrfmiddlewaretoken: PAGE_TOKEN,
    });

    const [load, setLoad] = React.useState(false);
    const [errorUsername, setErrorUsername] = React.useState(false);

    const [lastestLastName, setLatestLastName] = React.useState(profile.lastName);


    const input = React.useRef(null);

    const handlePhotoChange = (e) => {
        setData((recent) => {
            return {...recent, photo: e.target.files[0], photoTouched: true}
        })
    }

    const handleEmailChange = (val) => {
        setData((recent) => {
            return {...recent, email: val}
        })
    }
	
	const request = async function () {
		let formData = new FormData();

		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		})

		let url = '/update_profile/';
		
		let req = await __.layoutRequest.post(url, formData, 'json');

		let message = ''
		if (req.isSuccess) {
			message	= 'Bonjour ' + data.lastName + ', votre profile a été mis à jour. Merci beaucoup!';
			__.xAlert('Informations editée', message, 'success');
			setLoad(false);
		} else {
			message = 'Oupps, quelques choses ne va pas bien. Verifiez votre connection et essayez plus tard.';
			__.xAlert('Error!', message, 'danger');
			setLoad(false);
		}

	}

	const validChange = () => {
		setLoad(true);
		request();
	} 
    const handleLastNameChange = (val) => {
        setData((recent) => {
            return {...recent, lastName: val}
        })
    }

    const handleFirstNameChange = (val) => {
        setData((recent) => {
            return {...recent, firstName: val}
        })
    }

    const handleUsernameChange = (val) => {
        setData((recent) => {
            return {...recent, username: val}
        });
        setErrorUsername(false);
    }

    const handleJobTitleChange = (val) => {
        setData((recent) => {
            return {...recent, jobTitle: val}
        })
    }

	const handleDescriptionChange = (e) => {
        setData((recent) => {
            return {...recent, description: e.target.value}
        })
    }

    const choosePhoto = () => {
        input.current.click();
    }

    const disabled = React.useMemo(() => {
        if (__.testEmail(data.email.trim()) && 
            data.lastName.trim().length >= 2 && 
            data.firstName.trim().length >= 2 &&
            __.testUsername(data.username.trim())
        ) {
            return false;
        }
        return true;

    }, [data]);

    return <React.Fragment>
        <p className="xfosi20 xfowebo">Paramètre de profile</p>
        <p className="x-low-emphasis xmato10 xfosi12">Completez votre profile si neccessaire pour mieux votre connaître qui vous êtez ...</p>
        <div className="section-settings xdigr xmato30">
            <div className="my-photo-settings">
                <div className="x-child-center xmabo50">
                    <XUserProfilePicture
                        name={lastestLastName}
                        fontSize={30}
                        width={190}
                        imageURL={data.photo}
                        ></XUserProfilePicture>
                </div>
                <p className="xfosi13 xfowebo x-text-info xtealce x-pointer xmabo30" onClick={choosePhoto}>Cliquer pour { data.photo != null ? 'changer le' : 'choisir un' } photo</p>
                <input type="file" onChange={handlePhotoChange} name="" id="" className="x-square-0 xop0" ref={input} />
                <XField
                    type={'email'}
                    center={true}
                    style={{
                        width: '90%'
                    }}
                    value={data.email}
                    onChange={handleEmailChange}
                    >Email</XField>
            </div>

            <div className="others-info-settings">
                <div className="name-settings xdifl xjucospev">
                    <div className="last-name-settings xwi45per">
                        <XField
                            center={true}
                            style={{
                                width: '100%'
                            }}
                            value={data.lastName}
                            onChange={handleLastNameChange}
                            >Prénom</XField>
                    </div>
                    <div className="last-name-settings xwi45per">
                        <XField
                            center={true}
                            style={{
                                width: '100%'
                            }}
                            value={data.firstName}
                            onChange={handleFirstNameChange}

                            >Nom</XField>
                    </div>
                </div>

                <div className="name-settings xdifl xjucospev xmato30">
                    <div className="last-name-settings xwi45per">
                        <XField
                            type={'email'}
                            center={true}
                            style={{
                                width: '100%'
                            }}
                            value={data.username}
                            onChange={handleUsernameChange}
                            >Nom d'utilisateur</XField>
                            { errorUsername ? <p className="x-text-danger xmato8 xfowebo xfosi11">Nom d'utilisateur déja existé</p> : null }
                    </div>
                    <div className="last-name-settings xwi45per">
                        <XField
                            center={true}
                            style={{
                                width: '100%'
                            }}
                            value={data.jobTitle}
                            onChange={handleJobTitleChange}
                            >Titre: eg (Développeur web)</XField>
                    </div>
                </div>
                
                <div className="des-settings xwi90per x-center xmato20">
                    <textarea className="xlihe5" value={data.description} onChange={handleDescriptionChange} placeholder="Descriptez-vous ici en quelques mots..."></textarea>
                </div>
                
                <div className="xmato20">
                    <XButtonLoadable
                        center={true}
                        style={{
                            width: '90%',
                            height: '48px'
                        }}
						onClickFunc={validChange}
                        load={load}
                        disabled={disabled}
                        br={30}
                        >Engresitrer</XButtonLoadable>
                </div>
                
            </div>
        </div>
        
    </React.Fragment>
}

var PROJECTS_LIST_PROD;
var USER_AUTHENTIFIED_INFO_PROD;


async function getUserInfo () {
	let url = "/my_info/";
	let request = await __.layoutRequest.get(url, null, 'json');
	if (request.isSuccess) {
		USER_AUTHENTIFIED_INFO_PROD = request.data;
	} else {
		USER_AUTHENTIFIED_INFO_PROD = {};
	}
	getMyAllProjects();
}


async function getMyAllProjects (userID) {
	let url = '/get_my_projects/';
	
	let request = await __.layoutRequest.get(url, null, 'json');
	if (request.isSuccess) {
		PROJECTS_LIST_PROD = request.data;
	} else {
		PROJECTS_LIST_PROD = [];
	}
	getMyNotes();
}


var MY_NOTES = null;


async function getMyNotes() {
	let url = '/get_my_notes/';
	let request = await __.layoutRequest.get(url, null, 'json');
	if (request.isSuccess) {
		MY_NOTES = request.data;
	} else {
		MY_NOTES = [];
	}
	
	renderAll();
}


// render all JSX
function renderAll () {
	preparation.innerHTML = "Vous êtez presque...";
	mynote.render(<ProjectNotes
		personal={true}
		data={MY_NOTES}
		auth_user={USER_AUTHENTIFIED_INFO_PROD}
		title="Mes notes" 
		des={"Votre notes personelles. Non lié à des projets..."}
		id={"my-note-id-" + USER_AUTHENTIFIED_INFO_PROD.id}
	/>);
	inviteToJoin.render(<InviteToJoinProject data={PROJECTS_LIST_PROD} close={hideBlack} />);
	profilepic.render(<SetupProfile data={USER_AUTHENTIFIED_INFO_PROD} />);
	addproject.render(<AddNewProject allProjects={PROJECTS_LIST_PROD} />);
	sectionGlobalTask.render(<SectionAddGlobalTask />);
	search.render(<SearchBox />);
	profile.render(<Profile profileData={USER_AUTHENTIFIED_INFO_PROD} projects={PROJECTS_LIST_PROD} />);
	myWorkspace.render(<MyWorkspace data={PROJECTS_LIST_PROD} user={USER_AUTHENTIFIED_INFO_PROD} />);
	profileOnHeader.render(<ProfileOnHeader data={USER_AUTHENTIFIED_INFO_PROD} />);
	home.render(<Home user={USER_AUTHENTIFIED_INFO_PROD} data={PROJECTS_LIST_PROD} />);
	projectList.render(<ProjectListed user={USER_AUTHENTIFIED_INFO_PROD} />);
	mytasks.render(<MyTask projects={PROJECTS_LIST_PROD} user={USER_AUTHENTIFIED_INFO_PROD} />);
	taskManager.render(<TaskManager user={USER_AUTHENTIFIED_INFO_PROD} />);
	myFinance.render(<MyFinance projects={PROJECTS_LIST_PROD} auth_user={USER_AUTHENTIFIED_INFO_PROD} />);
	notification.render(<AllNotifications />);
	setting.render(<ProfileSettings profile={USER_AUTHENTIFIED_INFO_PROD} />);
	rapport.render(<Rapport data={PROJECTS_LIST_PROD} user={USER_AUTHENTIFIED_INFO_PROD} />);
	portfolio.render(<PortefeuilleForm projetsExistants={PROJECTS_LIST_PROD} user={USER_AUTHENTIFIED_INFO_PROD} />);
	objectif.render(<Objectif user={USER_AUTHENTIFIED_INFO_PROD} data={PROJECTS_LIST_PROD} />);
	changePasswordForm.render(<ChangePasswordForm />);
	setTimeout(() => {
		$("#page-loading").fadeOut(300);
	}, 2000);
}


getUserInfo();