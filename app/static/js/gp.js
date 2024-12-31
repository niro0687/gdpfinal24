// Project manager


var closedSideBar = false;
var userOptionBoxOpened = false;
const userOptionBox = document.querySelector(".user-option-box");
const addInsightsBox = document.querySelector(".add-insi-box");
const addProjectBox = document.querySelector(".add-project-box");
const black = document.querySelector("#black");
const createBox = document.querySelector(".create-box");
const myworkspacebox = document.querySelector(".my-workspaces-box");
const slideShow = document.querySelector('.slide-show');
const homeSlide = document.querySelector("#slide-to-home");

const body = document.body;

const votre = document.querySelector('.present-animated .votre');
const module = document.querySelector('.present-animated .module');
const finance = document.querySelector('.present-animated .finance');

const creer = document.querySelector('.present-animated .creer');
const gerer = document.querySelector('.present-animated .gerer');
const send = document.querySelector('.present-animated .send');

const present = document.querySelector(".present-animated");
const main_finance = document.querySelector(".main-finance");

const logMeOut = document.querySelector('.log-me-out');

$(document).on('click', ".each-option-user.logout-user", function(e) {
	logMeOut.click();
})

function presentFinance () {
    setTimeout(() => {
        present.classList.add("clearone");
        votre.classList.add("clear");
        setTimeout(() => {
            module.classList.add("clear");
            setTimeout(() => {
                finance.classList.add("clear");
                setTimeout(() => {
                    present.classList.add("cleartwo");
                    setTimeout(() => {
                        creer.classList.add("clear");
                        setTimeout(() => {
                            send.classList.add("clear");
                            setTimeout(() => {
                                gerer.classList.add("clear");
                                setTimeout(() => {
                                    main_finance.style.opacity = "1";
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 100);
}


function getFormatDate(string) {
	let date = new Date(string);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mois commence à 0, donc +1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getFormatDateTime(string) {
	let date = new Date(string);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mois commence à 0, donc +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}





$(document).on("click", ".team .my-workspaces .arrow-work", function() {
	myworkspacebox.style.display = "block";
	showBlack();
});



$(window).on("load", function() {
	let home_dim = __.dimension.getDimension("#slide-to-home");
    slideShow.style.left = home_dim.ol + 'px';
    slideShow.style.top = home_dim.ot + 'px';
    focusSlideFunc('home');
});


const allMenuSlide = [
    'home',
    'reporting',
    'goal',
    'my-tasks',
    'portfolio',
    'my-workspace',
	'my-space',
	'my-finance'
]


$(document).on("click", '.each-menu-slide', function() {
    let name = this.getAttribute("name");
    let focusSlide = __.dimension.getDimension(this);
    slideShow.style.left = focusSlide.ol + 'px';
    slideShow.style.top = focusSlide.ot + 'px';
    focusSlideFunc(name);
	switchMenu(name);
	if (name == "my-finance") {
		presentFinance();
	}
});

const survol = document.querySelector(".survol-title");
const textSurvol = survol.querySelector('p');
const menunavbar = document.querySelector(".menu-nav-bar");
const pointerSurvol = survol.querySelector(".pointer-survol");

$(document).on("mouseover", '.each-menu-slide', function() {
	survol.style.display = "block";
	let text = this.getAttribute("text");
	textSurvol.innerHTML = text;
	let focusDimension = __.dimension.getDimension(this);
	let survolDimension = __.dimension.getDimension(survol);
	let next = (survolDimension.w - 50) / 2;
	let left = (focusDimension.ol - next) + 'px';

	survol.style.left = left;

});

$(document).on("mouseout", '.each-menu-slide', function() {
	survol.style.display = "none";
});

$('.add-project').on("click", function() {
    openAddNewProject();
});

function openChangePasswordBox () {
	$(".change-password-box").css('display', 'flex');
}


function closeChangePasswordBox () {
	$(".change-password-box").css('display', 'none');
}

$(document).on('click', '.btn-open-change-password', openChangePasswordBox);


function focusSlideFunc (focusName) {
    allMenuSlide.forEach((menu) => {
        let id = '#slide-to-' + menu + ' i';
        let el = document.querySelector(id);
        if (menu == focusName) {
            el.style.color = "white";
        } else {
            el.style.color = "#696969";
        }
    });
    
    if (focusName == 'null') {
        slideShow.style.background = "none";
    } else {
        slideShow.style.background = "#001025";
    }
}

$(document).on("click", ".btn-invite-team", openInviteTeam);


function openInviteTeam () {
	$(".header-invite").show();
	showBlack();
}


$(document).on("click", ".btn-close-invite-team", function (){
	hideBlack();
});


$(document).on("click", ".btn-close-create-goal", function (){
	hideBlack();
});





$(document).on("click", "header .create", function() {
	createBox.style.display = "block";
	showBlack();
});

function showBlack() {
	black.style.display = "block";
}


function hideBlack () {
	addInsightsBox.style.display = "none";
	createBox.style.display = "none";
	addProjectBox.style.display = "none";
	userOptionBox.style.display = "none";
	userOptionBoxOpened = false;
	$(".header-invite").hide();
	$(".search-bar").hide();
	black.style.display = "none";
}

var notifShowed = false;
const notifBox = document.querySelector('.notif-box');

$(document).on('click', ".notif-bull", function() {
	if (notifShowed) {
		notifBox.style.display = "none";
	} else {
		notifBox.style.display = "block";
	}
	notifShowed = !(notifShowed);
});


$(black).on("click", function() {
	hideBlack();
})

$(document).on("click", ".insights .insights-titles div", function() {
	showBlack();
	addInsightsBox.style.display = "block";
});

function openSettings () {
	$("#settings-box").css("display", "flex");
}

$(document).on("click", ".btn-open-settings", openSettings);


$(document).on("click", ".btn-close-settings", function() {
	$("#settings-box").css("display", "none");
});


$(document).on("click", ".projects .projects-titles div", function() {
	showBlack();
	addProjectBox.style.display = "block";
});

const softNavBar = document.querySelector(".soft-nav-bar");

$(document).on("click", ".option-and-create .option", function() {
	if (closedSideBar) {
		softNavBar.style.bottom = "30px";
	} else {
		softNavBar.style.bottom = "-80px";
	}	
	closedSideBar = !closedSideBar;
});


function switchMenu(id) {
	let allMain = ["home", "reporting", "goal", "portfolio", "my-workspace" ,"my-tasks", "my-finance","my-space", "profile", "project-visualisation", "my-note"];
	
	allMain.forEach((main) => {
		if (main == id) {
			__.replaceClass("#" + main, "main-not-focused", "main-focused");
		} else {
			__.replaceClass("#" + main, "main-focused", "main-not-focused");
		}
	});
	
	hideBlack();
}



$(document).on("click", ".btn-open-profile" ,function() {
	switchMenu("profile");
	focusSlideFunc("null");
});





$(document).on("click", ".btn-open-my-note", function() {
	switchMenu("my-note");
	focusSlideFunc("null");
});



$(document).on("click", ".profile-arrow", function() {
	if (userOptionBoxOpened) {
		userOptionBox.style.display = "none";
	} else {
		showBlack();
		userOptionBox.style.display = "block";
	}
	userOptionBoxOpened = !userOptionBoxOpened;
});


$(document).on("click", ".btn-open-add-new-project", openAddNewProject);


function openAddNewProject() {
	setTimeout(() => {
		$("#add-new-project-box").show();
	}, 100);
}




$(document).on("click", ".btn-close-add-new-project", function() {
	$("#add-new-project-box").hide();
});




$(document).on("focus", ".draft-search", function() {
	let realInput = body.querySelector(".real-input input");
	$(".search-bar").show();
	showBlack();
	this.blur();
	realInput.focus();
});

